<script setup>
import useLangStore from '@/store/modules/lang'
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
  <el-dropdown class="lang-switcher" trigger="click" @command="handleCommand">
    <button class="lang-btn" type="button">
      <i class="fa-solid fa-language"></i>
      <i class="fa-solid fa-angle-down"></i>
    </button>
    <template #dropdown>
      <el-dropdown-item v-for="(value, key) of langOptions" :key="key" :class="{ 'is-active': key === langStore.lang }" :command="key">
        {{ value }}
      </el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<style lang="scss">
.lang-switcher {
  .lang-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    i:first-child {
      font-size: 18px;
    }

    i:last-of-type {
      font-size: 12px;
    }
  }
}
</style>
