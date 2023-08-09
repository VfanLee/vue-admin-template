<script setup>
import '@/styles/components/object-selector.scss'
import { ref, computed } from 'vue'

const props = defineProps({
  // 类型
  type: {
    type: String,
    default: 'radio' // or checkbox
  },
  // 是否显示
  visible: {
    type: Boolean,
    default: false
  },
  // 选择值
  modelValue: {
    type: [String, Number, Boolean, Array],
    required: true
  },
  // 标题
  title: {
    type: String,
    default: '对象选择器'
  },
  // 展示数据
  data: {
    type: Array,
    default: () => []
  },
  // 指定 data 中的 id
  id: {
    type: String,
    default: 'id'
  },
  // 指定 data 中的 name
  name: {
    type: String,
    default: 'name'
  }
})

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
        <el-radio-group v-if="type === 'radio'" :modelValue="checked" @update:modelValue="val => (checked = val)">
          <el-radio :label="item[props.id]" v-for="item of filterData" :key="item[props.id]">{{ item[props.name] }}</el-radio>
        </el-radio-group>

        <el-checkbox-group v-if="type === 'checkbox'" :modelValue="checked" @update:modelValue="val => (checked = val)">
          <el-checkbox :label="item[props.id]" v-for="item of filterData" :key="item[props.id]">{{ item[props.name] }}</el-checkbox>
        </el-checkbox-group>
      </el-scrollbar>
    </template>

    <template #footer>
      <div class="checked__tip" v-if="type === 'checkbox'">已选择：{{ checked.length }}</div>
      <div class="action__wrap">
        <el-button @click="$emit('update:visible', false)">取消</el-button>
        <el-button type="primary" @click="sureCheck">选择</el-button>
      </div>
    </template>
  </el-drawer>
</template>
