// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import compress from 'astro-compress';
import { astroPack } from "@matb85/astro-pack/integration";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://matb85.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    compress({ Image: false, SVG: false }),
    astroPack({
      formats: {
        thumbnail: /min_|thumbnail_/,
        1920: "fhd_",
        1280: "hd_",
        720: "wvga_",
        480: "hvga_",
      },
      enlarged: [1280, 1920],
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
