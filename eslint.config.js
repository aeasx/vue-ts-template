import antfu from '@antfu/eslint-config';

export default antfu({
  // 开始代码样式格式化
  stylistic: {
    semi: true,
  },

  // 运行 npx eslint 会提示你缺少的插件
  formatters: {
    css: true,
    html: true,
    markdown: true,
    scss: true,
    json: true,
    jsonc: true,
  },
});
