import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 9527,
  },
  plugins: [vue()],

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
