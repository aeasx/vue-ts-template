# Vue 3 + TypeScript + Vite 的初始化项目模版

## (1)主要内容

1. 集成了TailWindCss3
2. 在Vite.config.ts配置了路径别名，可以直接使用 `@` 符号访问 `src` 目录下的内容，同时
   可以使用 `@utils` 和 `@components` 访问对应目录下的内容
3. 可以在Vue模版中直接使用Iconify图标，使用方式如下：

   ```vue
   <template>
     <!-- 离线图标使用方式 -->
     <i-carbon-accessibility class="text-[100px] text-[red]" />
     <i-icon-park-outline:align-text-left-one />
   </template>
   ```

   参考:[vue3+vite使用iconify图标 - 知乎](https://zhuanlan.zhihu.com/p/688842750)

4. 集成了 antfu 的 Eslint配置用于代码检查与格式化 <br/>
   参考:

   1. [vue3+vite项目配置ESlint](https://developer.aliyun.com/article/1483837)
   2. https://github.com/antfu/eslint-config
   3. [Vue3+ TypeScript中如何使用Eslint V9.0.0](https://juejin.cn/post/7358352353295368232)

## (2)开发环境

1. 包管理工具 `pnpm` verson: 10.11.0
