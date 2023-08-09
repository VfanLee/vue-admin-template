<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import useUserStore from '@/store/modules/user'

const i18n = useI18n()
const userStore = useUserStore()

const locale = ref('zh')

watch(locale, (newVal, oldVal) => {
  i18n.locale.value = newVal
})
</script>

<template>
  <div class="view-i18n">
    <el-radio-group v-model="locale">
      <el-radio-button label="zh">简体中文</el-radio-button>
      <el-radio-button label="en">English</el-radio-button>
    </el-radio-group>

    <div class="example__text">示例文本1：{{ $t('helloWorld') }}</div>
    <div class="example__text">示例文本2：{{ $t('hello', { name: userStore.userInfo.name }) }}</div>
  </div>
</template>

<style lang="scss" scoped>
.example__text {
  margin-top: 20px;
}
</style>
