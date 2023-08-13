<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.querySelector('.form__el').addEventListener('submit', e => {
    console.log(e)
    e.preventDefault()
  })

  document.querySelector('.submit__btn').addEventListener('click', e => {
  })
})
</script>

<template>
  <form class="form__el">
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
      <button class="submit__btn" type="submit">Submit</button>
    </section>
  </form>
</template>

<style>
section {
  margin-bottom: 20px;
}
</style>
