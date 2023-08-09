<script setup>
import { ref } from 'vue'

const textValue = ref('')
const radioValue = ref('')
const checkboxValue1 = ref()
const checkboxValue2 = ref([])
const selectValue = ref('')
</script>

<template>
  <div class="view-basic-form">
    <h2>Vue3 表单元素的基本使用</h2>

    <section>
      <p>textValue: {{ textValue }}</p>
      <div>
        <input v-model="textValue" />
      </div>
    </section>

    <section>
      <p>radioValue: {{ radioValue }}</p>
      <div>
        <input type="radio" id="radio1" value="1" v-model="radioValue" />
        <label for="radio1">radio1</label>

        <input type="radio" id="radio2" value="2" v-model="radioValue" />
        <label for="radio2">radio2</label>

        <input type="radio" id="radio3" value="3" v-model="radioValue" />
        <label for="radio3">radio3</label>
      </div>
    </section>

    <section>
      <p>checkboxValue1: {{ checkboxValue1 }}</p>
      <div>
        <input type="checkbox" id="checkbox" v-model="checkboxValue1" />
        <label for="checkbox">checkbox</label>
      </div>

      <p>checkboxValue2: {{ checkboxValue2 }}</p>
      <div>
        <input type="checkbox" id="checkbox1" value="1" v-model="checkboxValue2" />
        <label for="checkbox1">checkbox1</label>

        <input type="checkbox" id="checkbox2" value="2" v-model="checkboxValue2" />
        <label for="checkbox2">checkbox2</label>
      </div>
    </section>

    <section>
      <p>select: {{ selectValue }}</p>
      <div>
        <select v-model="selectValue">
          <option value="1">option1</option>
          <option value="2">option2</option>
          <option value="3">option3</option>
        </select>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section {
  margin-bottom: 20px;
}
</style>
