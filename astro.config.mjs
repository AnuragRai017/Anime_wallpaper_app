import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
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
      cssCodeSplit: false, // Bundle all CSS into a single file
      assetsInlineLimit: 0, // Don't inline any assets as data URLs
      minify: true,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'chunks/[name].[hash].js',
          entryFileNames: 'entries/[name].[hash].js'
        }
      }
    },
    css: {
      // Ensure CSS is properly processed
      devSourcemap: true,
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