import path from 'node:path';
import vue from '@vitejs/plugin-vue';

import IconsResolver from 'unplugin-icons/resolver';
// 配置离线使用 Iconify 图标
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';

import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 9527,
  },
  plugins: [
    vue(),
    Components({
      resolvers: [IconsResolver()],
    }),
    Icons({}),
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
