import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lamaaulabs.com',
  server: { host: true, port: 4321 },
  build: { inlineStylesheets: 'auto' },
});
