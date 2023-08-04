<script setup></script>

<template>
  <div class="c-svg-icon">
    <h2>SvgIcon</h2>
    <p>
      参考：
      <a href="https://github.com/vbenjs/vite-plugin-svg-icons" target="blank">vite-plugin-svg-icons</a>
    </p>

    <div class="preview">
      <section class="demo1">
        <SvgIcon style="margin-right: 12px" name="poo" />
        <span>poo</span>
      </section>

      <section>
        <SvgIcon name="poo" font-size="32px" color="yellowgreen" />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
section {
  margin: 20px 0;
}

.demo1 {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: yellowgreen;
}
</style>
