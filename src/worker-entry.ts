import { handleAsset } from './middleware/assets';

// Define types for Cloudflare Workers
interface KVNamespace {
  get(key: string, type?: string): Promise<any>;
  put(key: string, value: ArrayBuffer | ReadableStream | string): Promise<void>;
  delete(key: string): Promise<void>;
}

interface ExecutionContext {
  waitUntil(promise: Promise<any>): void;
  passThroughOnException(): void;
}

interface Env {
  KIBEWALL_ASSETS: KVNamespace;
  ASSET_BASE?: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    try {
      const url = new URL(request.url);
      
      // Enhanced asset handling with better error handling
      if (url.pathname.startsWith('/_astro/') || 
          url.pathname.startsWith('/assets/') || 
          url.pathname.startsWith('/src/assets/') ||
          url.pathname.startsWith('/public/') ||
          url.pathname === '/favicon.svg' ||
          url.pathname === '/kunai-mark.svg' ||
          url.pathname === '/chainsaw-pattern.svg' ||
          url.pathname === '/infinity-symbol.svg' ||
          url.pathname.match(/\.(css|js|jpg|jpeg|png|svg|webp|gif|ico|woff2?|ttf|eot)$/i) !== null) {
        
        try {
          const assetResponse = await handleAsset(request, env);
          if (!assetResponse.ok) {
            console.error(`Asset loading failed for ${url.pathname}: ${assetResponse.status}`);
            // Try serving from ASSET_BASE if defined
            if (env.ASSET_BASE) {
              const assetBaseUrl = new URL(url.pathname, env.ASSET_BASE);
              const fallbackResponse = await fetch(assetBaseUrl.toString());
              if (fallbackResponse.ok) {
                return fallbackResponse;
              }
            }
          }
          return assetResponse;
        } catch (assetError) {
          console.error(`Asset handling error for ${url.pathname}:`, assetError);
          return new Response(`Failed to load asset: ${url.pathname}`, { 
            status: 500,
            headers: {
              'Content-Type': 'text/plain',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }
      }

      // For all other requests, dynamically import the worker handler
      try {
        let handler;
        try {
          handler = await import('./worker.js');
        } catch (e) {
          try {
            handler = await import('./worker.ts');
          } catch (e) {
            handler = {
              default: {
                fetch: async (req: Request) => {
                  const url = new URL(req.url);
                  if (url.pathname === '/') {
                    return new Response('App is running. Worker module not found.', {
                      status: 200,
                      headers: {
                        'Content-Type': 'text/plain',
                        'Access-Control-Allow-Origin': '*'
                      }
                    });
                  }
                  return new Response('Not found. Worker module not implemented.', {
                    status: 404,
                    headers: {
                      'Content-Type': 'text/plain',
                      'Access-Control-Allow-Origin': '*'
                    }
                  });
                }
              }
            };
          }
        }
        return handler.default.fetch(request, env, ctx);
      } catch (importError) {
        console.error('Failed to import worker handler:', importError);
        return new Response('Failed to load application handler', { 
          status: 500,
          headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    } catch (error) {
      console.error('Worker error:', error);
      return new Response(JSON.stringify({
        error: true,
        message: error instanceof Error ? error.message : 'Internal Server Error',
        path: new URL(request.url).pathname
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
  }
}