import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    preview: {
      allowedHosts: true,
      port: 3008,
      host: "0.0.0.0",
    }
  }
});