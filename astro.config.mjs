import { defineConfig } from 'astro/config';

import db from '@astrojs/db';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  output: 'server',
  adapter: cloudflare(),
  vite: {
    ssr: {
      external: ["buffer", "path", "fs", "os", "crypto", "async_hooks", "https", "http", "zlib", "events"].flatMap((i) => [`node:${i}`, i]),
    },
  },
});