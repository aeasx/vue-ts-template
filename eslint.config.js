import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // ts 默认推荐规则
  tseslint.configs.recommended,

  // Vue3 基础推荐规则
  pluginVue.configs['flat/essential'],

  // js 文件默认推荐规则
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },

  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
]);
