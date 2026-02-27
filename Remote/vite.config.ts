import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  //base: 'http://localhost:5001/',
  build: {
    target: "esnext",
  },
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Home": {
          import: "./src/pages/Home.tsx",
          name: "RemoteApp",
        },
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5001,
    strictPort: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
