// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://kaneo-app.github.io',
  base: '/landing-page',
});
