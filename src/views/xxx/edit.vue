<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const $router = useRouter()
const $route = useRoute()

const isEdit = ref(false)

if ($route.params.id) {
  isEdit.value = true
}
</script>

<template>
  <p>{{ isEdit ? '编辑' : '创建' }} xxx</p>
</template>

<style lang="scss" scoped></style>
