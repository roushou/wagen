import pages from "@hono/vite-cloudflare-pages";
import honox from "honox/vite";
import clientBuild from "honox/vite/client";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["/app/style.css"],
          output: {
            assetFileNames: "static/assets/[name].[ext]",
          },
        },
      },
      plugins: [clientBuild()],
    };
  }
  return {
    plugins: [
      honox({
        client: {
          input: ["/app/style.css"],
        },
      }),
      pages(),
    ],
  };
});
