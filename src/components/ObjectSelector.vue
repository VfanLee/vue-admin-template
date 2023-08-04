<script lang="ts" setup>
import { ref, computed } from 'vue'
import '@/styles/object-selector.scss'

const props = withDefaults(
  defineProps<{
    visible: boolean
    modelValue: any
    title?: string
    data: any
    id?: string
    name?: string
  }>(),
  {
    title: '',
    id: 'id',
    name: 'name'
  }
)

const emit = defineEmits(['update:visible', 'update:modelValue'])
const searchText = ref('')
const filterData = computed(() => props.data.filter(item => item[props.name].includes(searchText.value)))
const checked = ref(props.modelValue)
const sureCheck = () => {
  emit('update:modelValue', checked.value)
  emit('update:visible', false)
}
</script>

<template>
  <el-drawer class="object__selector" :modelValue="visible" @update:modelValue="val => $emit('update:visible', val)">
    <template #header>
      <div>
        <h3 class="title">{{ title }}</h3>
        <el-input class="search__input" v-model="searchText" placeholder="输入关键字搜索" @change="filterData" clearable />
      </div>
    </template>

    <template #default>
      <el-scrollbar>
        <el-radio-group :modelValue="checked" @update:modelValue="val => (checked = val)">
          <el-radio :label="item[props.id]" v-for="item of filterData" :key="item[props.id]">{{ item[props.name] }}</el-radio>
        </el-radio-group>
      </el-scrollbar>
    </template>

    <template #footer>
      <span class="selected__tip"></span>
      <el-button @click="$emit('update:visible', false)">取消</el-button>
      <el-button type="primary" @click="sureCheck">选择</el-button>
    </template>
  </el-drawer>
</template>
