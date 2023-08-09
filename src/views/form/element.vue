<script setup>
import { ref } from 'vue'

const inputValue = ref('')
const radioValue = ref('')
const checkboxValue1 = ref(false)
const checkboxValue2 = ref([])
const selectValue = ref('')
</script>

<template>
  <div class="view-element-form">
    <h2>Element Plus 表单元素的基本使用</h2>

    <section>
      <p>input: {{ inputValue }}</p>
      <el-input v-model="inputValue"></el-input>
    </section>

    <section>
      <p>radio: {{ radioValue }}</p>
      <!-- 用法1 -->
      <!-- <el-radio label="1" v-model="radioValue">Option 1</el-radio>
      <el-radio label="2" v-model="radioValue">Option 2</el-radio> -->

      <!-- 用法2 -->
      <el-radio-group v-model="radioValue">
        <el-radio label="1">Option 1</el-radio>
        <el-radio label="2">Option 2</el-radio>
      </el-radio-group>
    </section>

    <section>
      <p>checkbox1: {{ checkboxValue1 }}</p>
      <!-- 用法1 -->
      <el-checkbox label="checkbox" v-model="checkboxValue1" />

      <!-- 用法2 -->
      <p>checkbox2: {{ checkboxValue2 }}</p>
      <el-checkbox-group v-model="checkboxValue2">
        <el-checkbox label="A">checkbox A</el-checkbox>
        <el-checkbox label="B">checkbox B</el-checkbox>
        <el-checkbox label="C">checkbox C</el-checkbox>
      </el-checkbox-group>
    </section>

    <section>
      <p>select: {{ selectValue }}</p>
      <el-select v-model="selectValue">
        <el-option label="option1" value="1"></el-option>
        <el-option label="option2" value="2"></el-option>
        <el-option label="option3" value="3"></el-option>
      </el-select>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section {
  margin-bottom: 20px;
}
</style>
