<template>
  <footer class="vat-footer">
    <div class="vat-footer">
      <div class="vat-footer-list">
        <a href="https://github.com/VfanLee/vue3-admin-template" target="blank">Vue3 Admin Template</a>
        <a href="https://github.com/VfanLee/vue3-admin-template" target="blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://cn.vitejs.dev/" target="_blank">Vite</a>
        <a href="https://cn.vuejs.org/" target="_blank">Vue3</a>
        <a href="https://element-plus.org/zh-CN/" target="_blank">Element Plus</a>
      </div>
      <div class="vat-footer-copyright">
        <i class="fa-regular fa-copyright"></i>
        <span>Powered by Vfan Lee</span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.vat-footer {
  font-size: 14px;
}

.vat-footer-list {
  margin-block-end: 8px;
  a {
    color: rgba(0, 0, 0, 0.65);
  }
  a + a {
    margin-inline-start: 8px;
  }
}

.vat-footer-copyright {
  color: rgba(0, 0, 0, 0.88);
  span {
    margin-inline-start: 8px;
  }
}
</style>
