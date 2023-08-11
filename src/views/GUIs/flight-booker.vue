<script setup>
import { ref, computed } from 'vue'

const flightType = ref('one-way flight')
const departureDate = ref('2023-08-01')
const returnDate = ref('2023-08-26')

const isReturn = computed(() => flightType.value === 'return flight')
const canBook = computed(() => !isReturn.value || returnDate.value > departureDate.value)

const book = () => {
  alert(isReturn.value ? `You have booked a return flight leaving on ${departureDate.value} and returning on ${returnDate.value}.` : `You have booked a one-way flight leaving on ${departureDate.value}.`)
}
</script>

<template>
  <div class="view-GUIs">
    <p>
      Challenge 3：
      <a href="https://eugenkiss.github.io/7guis/tasks/#flight" target="_blank">Flight Booker</a>
    </p>

    <div>
      <select v-model="flightType">
        <option value="one-way flight">One-way Flight</option>
        <option value="return flight">Return Flight</option>
      </select>
    </div>

    <div>
      <input type="date" v-model="departureDate" />
    </div>

    <div>
      <input type="date" v-model="returnDate" :disabled="!isReturn" />
    </div>

    <button @click="book" :disabled="!canBook">Book</button>

    <p>{{ canBook ? '' : 'Return date must be after departure date.' }}</p>
  </div>
</template>
