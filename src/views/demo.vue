<script setup>
console.log(getComputedStyle(document.documentElement).getPropertyValue('--primary-color'))

document.documentElement.style.setProperty('--sidebar-width', '48px')

</script>

<template>
  <div class="demo">sdasd</div>
</template>

<style lang="scss" scoped>
.demo {
  width: var(--sidebar-width);
  height: 100px;
  background-color: pink;
  color: var(--primary-color);
}
</style>
