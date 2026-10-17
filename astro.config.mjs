import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://berkaycubuk.com',
  // /blog/* and /tools are redirects; keep them out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/blog/') && !page.endsWith('/tools/') })],
  redirects: {
    '/tools': '/projects',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});