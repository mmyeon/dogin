import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import vitetsConfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => {
  const isLocal = mode === "development";
  return {
    base: "./",
    plugins: [
      react(),
      vitetsConfigPaths(),
      isLocal
        ? [
            visualizer({
              filename: "./dist/stats.html", // 결과 파일 경로
              template: "treemap", // 그래프 유형: 'treemap', 'sunburst', 'network'
              open: true,
              gzipSize: true,
              brotliSize: true,
            }) as PluginOption,
          ]
        : [],
    ],
    server: {
      open: true,
      port: 3000,
    },
    build: {
      outDir: "build",
    },
  };
});
