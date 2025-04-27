import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  // 确保静态资源被正确复制到dist目录
  publicDir: "public",
  plugins: [react()],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
    build: {
      // 确保资源在构建时被正确处理
      assetsDir: "assets",
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            // 保持图片文件的原始路径结构
            if (assetInfo.name.match(/\.(png|jpe?g|gif|svg)$/)) {
              return "images/[name][extname]";
            }
            return "assets/[name]-[hash][extname]";
          },
        },
      },
    },
  },
}));
