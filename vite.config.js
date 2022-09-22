import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    host: "0.0.0.0",
    port: "8000",
  },
});
