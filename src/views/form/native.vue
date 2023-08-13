<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const data = {
    textValue: 'Hello',
    selectValue: '2',
    dateValue: '2020-02-02',
    timeValue: '12:00',
    checkboxValue1: false,
    checkboxValue2: ['2'],
    radioValue: '2',
    textareaValue: 'Hello',
    fileValue: null
  }

  const submit = () => {
    data.textValue = document.querySelector('.text__el').value
    data.selectValue = document.querySelector('.selectValue').value
    data.dateValue = document.querySelector('.date__el').value
    data.timeValue = document.querySelector('.time__el').value
    data.checkboxValue1 = document.querySelector('.checkbox1__el').checked

    data.checkboxValue2.splice(0)
    document.querySelectorAll('.activity__type').forEach(el => {
      el.checked && data.checkboxValue2.push(el.value)
    })

    document.querySelectorAll('.radio__el').forEach(el => {
      el.checked && (data.radioValue = el.value)
    })

    data.textareaValue = document.querySelector('.textarea__el').value

    console.table(data)
  }

  document.querySelector('.submit__btn').addEventListener('click', submit)
})
</script>

<template>
  <div>
    <section>
      <strong>textValue:</strong>

      <input class="text__el" type="text" value="Hello" />
    </section>

    <section>
      <strong>selectValue:</strong>
      <select class="selectValue">
        <option value="1">option1</option>
        <option value="2" selected>option2</option>
        <option value="3">option3</option>
      </select>
    </section>

    <section>
      <strong>dateValue:</strong>
      <input class="date__el" type="date" value="2020-02-02" />
    </section>

    <section>
      <strong>timeValue:</strong>
      <input class="time__el" type="time" value="12:00" />
    </section>

    <section>
      <label>
        <strong>checkboxValue1:</strong>
        <input class="checkbox1__el" type="checkbox" />
      </label>
    </section>

    <section>
      <strong>checkboxValue2:</strong>

      <label>
        <input class="activity__type" type="checkbox" value="1" name="checkboxValue2" />
        option1
      </label>

      <label>
        <input class="activity__type" type="checkbox" value="2" name="checkboxValue2" checked />
        option2
      </label>

      <label>
        <input class="activity__type" type="checkbox" value="3" name="checkboxValue2" />
        option3
      </label>
    </section>

    <section>
      <strong>radioValue:</strong>

      <label>
        <input class="radio__el" type="radio" value="1" name="radioValue" />
        option1
      </label>

      <label>
        <input class="radio__el" type="radio" value="2" name="radioValue" checked />
        option2
      </label>
    </section>

    <section>
      <label>
        <strong>textareaValue:</strong>
        <textarea class="textarea__el" cols="30" rows="10">Hello</textarea>
      </label>
    </section>

    <section>
      <label>
        <strong>fileValue:</strong>
        <input class="file__el" type="file" />
      </label>
    </section>

    <section>
      <button class="submit__btn" type="button">Submit</button>
    </section>
  </div>
</template>

<style>
section {
  margin-bottom: 20px;
}
</style>
