import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://berkaycubuk.com',
  // /blog/* pages are redirects to dated post URLs; keep them out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/blog/') })],
  vite: {
    plugins: [tailwindcss()]
  }
});