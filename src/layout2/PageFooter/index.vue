<script setup>
import useAppStore from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
  <div class="page-footer" v-if="!appStore.isHidePageFooter">
    <p>
      <span>Vue3 Admin Template</span>
      <span class="separate-bar">|</span>
      <a href="https://github.com/VfanLee/vue3-admin-template" target="blank"><i class="fa-brands fa-github"></i></a>
    </p>
    <p>
      <i class="iconfont icon-user"></i>
      Crafted with ❤️ by Vfan Lee in 2023
    </p>
  </div>
</template>
