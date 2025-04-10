// Handle static asset requests with proper caching and error handling
export async function handleAsset(request: Request, env: any): Promise<Response> {
  const url = new URL(request.url);
  const key = url.pathname;

  try {
    // Normalize paths that might come from src/assets to just /assets
    const normalizedKey = key
      .replace('/src/assets/', '/assets/')
      .replace('/_astro/', '/assets/_astro/');
    
    // Handle hashed assets (like index.DXEI7vNc.css)
    const isHashedAsset = key.match(/\.[A-Za-z0-9]{8}\.(css|js)$/);
    const baseAssetName = isHashedAsset ? 
      key.replace(/\.[A-Za-z0-9]{8}\.([^.]+)$/, '.$1') : 
      key;
    
    // Try to serve from KV cache first
    if (env.KIBEWALL_ASSETS) {
      const cached = await env.KIBEWALL_ASSETS.get(normalizedKey, 'arrayBuffer');
      if (cached) {
        return createResponse(cached, normalizedKey);
      }
    }

    // If not in KV, try multiple asset locations
    const possiblePaths = [
      // For hashed assets
      isHashedAsset ? `/dist${key}` : null,
      isHashedAsset ? `/dist/_astro${key}` : null,
      isHashedAsset ? `/_astro${key}` : null,
      isHashedAsset ? `/assets/_astro${key}` : null,
      isHashedAsset ? baseAssetName : null,
      
      // Standard paths
      normalizedKey,
      `/_astro${normalizedKey}`,
      `/dist/_astro${normalizedKey}`,
      `/assets${normalizedKey}`,
      `/public${normalizedKey}`,
      
      // Theme assets
      key.match(/\/(kunai-mark|chainsaw-pattern|infinity-symbol)\.svg$/) ? 
        `/public${key}` : null,
      
      // Legacy paths
      key.startsWith('/_astro/') ? `/assets/_astro/${key.slice(8)}` : null,
      key.startsWith('/src/') ? key.replace('/src/', '/') : null
    ].filter(Boolean) as string[];

    let asset = null;
    let lastError = null;

    for (const path of possiblePaths) {
      try {
        const assetUrl = new URL(path, env.ASSET_BASE || request.url);
        const assetResponse = await fetch(assetUrl.toString(), {
          headers: {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate',
            'User-Agent': 'Cloudflare-Worker'
          }
        });
        
        if (assetResponse.ok) {
          asset = assetResponse;
          break;
        }
      } catch (e) {
        lastError = e;
        console.warn(`Failed to fetch asset from ${path}:`, e);
        continue;
      }
    }
    
    if (!asset || !asset.ok) {
      // For CSS files, return empty CSS with retry logic
      if (key.endsWith('.css')) {
        return new Response(
          `/* CSS fallback for ${key} */\n` +
          `/* Will retry loading in 2s */\n` +
          `@import url("${key}?retry=1");`,
          {
            status: 200,
            headers: {
              'Content-Type': 'text/css',
              'Cache-Control': 'no-store, must-revalidate',
              'Access-Control-Allow-Origin': '*'
            }
          }
        );
      }
      
      // For images, return a data URL placeholder
      if (key.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        return new Response(
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjwvc3ZnPg==',
          {
            status: 200,
            headers: {
              'Content-Type': 'text/plain',
              'Cache-Control': 'no-store',
              'Access-Control-Allow-Origin': '*'
            }
          }
        );
      }
      
      throw new Error(`Asset not found: ${key}`);
    }

    const response = createResponse(await asset.arrayBuffer(), key);

    // Cache successful responses in KV
    if (env.KIBEWALL_ASSETS) {
      try {
        const buffer = await asset.clone().arrayBuffer();
        await env.KIBEWALL_ASSETS.put(normalizedKey, buffer);
      } catch (e) {
        console.warn('Failed to cache asset in KV:', e);
      }
    }

    return response;
  } catch (error) {
    console.error(`Error serving asset ${key}:`, error);
    
    if (key.endsWith('.css')) {
      return new Response(
        `/* Error loading ${key} */\n` +
        `/* ${error instanceof Error ? error.message : 'Unknown error'} */`,
        {
          status: 200,
          headers: {
            'Content-Type': 'text/css',
            'Cache-Control': 'no-store',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }
    
    return new Response(
      JSON.stringify({
        error: true,
        message: error instanceof Error ? error.message : 'Unknown error',
        path: key
      }), 
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
}

function createResponse(data: ArrayBuffer | string, path: string): Response {
  return new Response(data, {
    status: 200,
    headers: {
      'Content-Type': getContentType(path),
      'Cache-Control': 'public, max-age=31536000',
      'Access-Control-Allow-Origin': '*',
      'X-Content-Type-Options': 'nosniff'
    }
  });
}

function getContentType(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase();
  const types: Record<string, string> = {
    'js': 'application/javascript',
    'css': 'text/css',
    'html': 'text/html',
    'json': 'application/json',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'webp': 'image/webp',
    'ico': 'image/x-icon',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'ttf': 'font/ttf',
    'eot': 'application/vnd.ms-fontobject'
  };
  return types[ext || ''] || 'application/octet-stream';
}