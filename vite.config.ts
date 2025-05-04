import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  slidev: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.startsWith("my-");
          },
        },
      },
    },
  },
});
