// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: 'https://matb85.github.io',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        react(),
        compress({Image: false, SVG: false}),
    ],
    devToolbar: {
        enabled: false,
    }
});
