// vite.config.ts
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 9527,
  },
  plugins: [
    tailwindcss(),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({ resolvers: [ElementPlusResolver()] }),
  ],

  // 配置路径别名
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, './src/utils'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
    ],
  },
});
