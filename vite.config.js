import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from 'vite-plugin-mock'
// import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      supportTs: false,
      logger: false,
      mockPath: "./src/mock/",
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: "8000",
  },
});
