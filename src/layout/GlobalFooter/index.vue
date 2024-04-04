<template>
  <div class="global-footer">
    <div class="global-footer-list">
      <a href="https://github.com/VfanLee/vue3-admin-template" target="blank">Vue3 Admin Template</a>
      <a href="https://github.com/VfanLee/vue3-admin-template" target="blank"><i class="fa-brands fa-github"></i></a>
      <a href="https://cn.vitejs.dev/">Vite</a>
      <a href="https://cn.vuejs.org/">Vue3</a>
      <a href="https://element-plus.org/zh-CN/">Element Plus</a>
    </div>
    <div class="global-footer-copyright">
      <i class="fa-regular fa-copyright"></i>
      <span>Powered by Vfan Lee</span>
    </div>
  </div>
</template>

<style lang="scss">
.global-footer {
  font-size: 14px;
}

.global-footer-list {
  margin-block-end: 8px;
  a {
    color: rgba(0, 0, 0, 0.65);
  }
  a + a {
    margin-inline-start: 8px;
  }
}

.global-footer-copyright {
  color: rgba(0, 0, 0, 0.88);
  span {
    margin-inline-start: 8px;
  }
}
</style>
