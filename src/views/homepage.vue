<script setup>
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
</script>

<template>
  <div>
    <p>开始内容</p>
    <div>{{ userStore.userInfo }}</div>
    <p v-for="i of 100">这是一段内容</p>
    <p>结束内容</p>
  </div>
</template>

<style lang="scss" scoped></style>
