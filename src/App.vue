<template>
  <nav class="w-full h-10 bg-[#222] flex text-white *:text-blue-300 gap-2">
    <RouterLink to="/">
      首页
    </RouterLink>
    <RouterLink to="/about">
      关于
    </RouterLink>
  </nav>
  <main>
    <!-- 路由视图（类似与插槽） -->
    <RouterView />
  </main>
</template>
