<script setup>
import { ref } from 'vue'
import LeftRight from './left-right/index.vue'
import TopBottom from './top-bottom/index.vue'
import MixLayout1 from './mix-layout1/index.vue'
import MixLayout2 from './mix-layout2/index.vue'

const visible = ref(false)
const currentLayout = ref('LeftRight')
const layouts = {
  LeftRight,
  TopBottom,
  MixLayout1,
  MixLayout2
}
</script>

<template>
  <div class="layout">
    <component :is="layouts[currentLayout]"></component>

    <button class="toggle__btn" @click="visible = true"><i class="fa-solid fa-gear"></i></button>
    <el-drawer v-model="visible" :with-header="false">
      <img src="@/assets/img/left-right.png" alt="left-right" @click="currentLayout = 'LeftRight'" />
      <img src="@/assets/img/top-bottom.png" alt="top-bottom" @click="currentLayout = 'TopBottom'" />
      <img src="@/assets/img/mix1.png" alt="mix1" @click="currentLayout = 'MixLayout1'" />
      <img src="@/assets/img/mix2.png" alt="mix2" @click="currentLayout = 'MixLayout2'" />
    </el-drawer>
  </div>
</template>

<style lang="scss" scoped>
.toggle__btn {
  position: fixed;
  top: 50%;
  right: 0;
  border: none;
  font-size: 32px;
  background-color: transparent;
  transform: translateY(-50%);
  cursor: pointer;
}

img {
  width: 60px;
  cursor: pointer;
}
</style>
