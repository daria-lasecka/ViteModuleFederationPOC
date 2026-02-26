import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    build: {
      target: "esnext",
    },
    plugins: [
      react(),
      federation({
        name: "app",
        remotes: {
          remote_app: `${env.VITE_REMOTE_URL}/assets/remoteEntry.js`,
        },
        shared: ["react", "react-dom"],
      }),
    ],
    server: {
      port: 5000,
    },
  };
});
