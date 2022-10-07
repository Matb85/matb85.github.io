import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { basePathname } from "@qwik-city-plan";

export default defineConfig(() => {
  return {
    base: "/portfolio/",
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
  };
});
