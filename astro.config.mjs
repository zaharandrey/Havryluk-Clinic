// @ts-check
import { defineConfig } from 'astro/config';

// TODO: replace with the real production domain before launch.
// Used for canonical URLs, Open Graph, sitemap.xml and robots.txt.
export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'ignore',
  build: {
    // Small stylesheets are inlined to avoid render-blocking requests.
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});
