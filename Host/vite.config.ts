import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";
//import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    build: {
      target: "esnext",
      //cssCodeSplit: false,
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
      // cssInjectedByJsPlugin({
      //   jsAssetsFilterFunction: (outputChunk) =>
      //     outputChunk.fileName === "remoteEntry.js",
      // }),
    ],
    server: {
      port: 5000,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
