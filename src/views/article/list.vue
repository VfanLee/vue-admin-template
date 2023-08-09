<script setup></script>

<template>
  <div>
    example list
    <div>
      <RouterLink :to="{ path: '/article/create' }">创建文章</RouterLink>
    </div>
    <div>
      <RouterLink :to="{ path: '/article/edit/1' }">编辑文章</RouterLink>
    </div>
    <div>
      <RouterLink :to="{ path: '/article/detail/1' }">文章详情</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
