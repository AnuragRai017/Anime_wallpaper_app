import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  adapter: cloudflare({
    mode: 'directory',
    runtime: {
      mode: 'local'
    },
    imageService: 'cloudflare',
    assets: {
      mode: 'directory'
    }
  }),
  vite: {
    build: {
      minify: true,
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'chunks/[name].[hash].js',
          entryFileNames: 'entries/[name].[hash].js'
        }
      }
    },
    ssr: {
      external: ['@astrojs/cloudflare-runtime']
    }
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  }
});