<script setup>
import useLangStore from '@/stores/lang'
import { useI18n } from 'vue-i18n'

const langStore = useLangStore()

const { t } = useI18n()

const langOptions = {
  zh: '简体中文',
  en: 'English'
}

const handleCommand = c => {
  if (c !== langStore.lang) {
    langStore.setLang(c)

    ElMessage({
      type: 'success',
      message: t('switchLangTips')
    })
  }
}
</script>

<template>
  <el-dropdown class="lang-switcher" trigger="click" @command="handleCommand" :popper-options="{ modifiers: [{ name: 'computeStyles', options: { adaptive: false } }] }">
    <SvgIcon name="language" />
    <template #dropdown>
      <el-dropdown-item v-for="(value, key) of langOptions" :key="key" :class="{ 'is-active': key === langStore.lang }" :command="key">
        {{ value }}
      </el-dropdown-item>
    </template>
  </el-dropdown>
</template>
