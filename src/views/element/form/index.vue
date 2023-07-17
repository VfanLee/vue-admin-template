<script setup>
import { ref } from 'vue'

const inputValue = ref('')

const radioValue = ref('')

const checkboxValue = ref([])

const selectValue = ref('')
</script>

<template>
  <div class="p-form">
    <h1>Element Plus 表单元素的基本使用</h1>

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
      <p>checkbox: {{ checkboxValue }}</p>
      <!-- 用法1 -->
      <!-- <el-checkbox label="Option A" v-model="checkboxValue" />
      <el-checkbox label="Option B" v-model="checkboxValue" />
      <el-checkbox label="Option C" v-model="checkboxValue" /> -->

      <!-- 用法2 -->
      <el-checkbox-group v-model="checkboxValue">
        <el-checkbox label="Option A" />
        <el-checkbox label="Option B" />
        <el-checkbox label="Option C" />
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
.p-form {
  padding: 30px;
}

section {
  margin-bottom: 20px;
}
</style>
