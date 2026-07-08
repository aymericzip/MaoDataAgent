import { reactI18nextVitePlugin } from "@intlayer/react-i18next/plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    // Aliases `react-i18next` → `@intlayer/react-i18next` and `i18next` →
    // `@intlayer/i18next`
    // Intlayer proxy ignore API route
    reactI18nextVitePlugin({
      proxy: {
        ignore: (req) => req.url?.startsWith("/api"),
      },
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});
