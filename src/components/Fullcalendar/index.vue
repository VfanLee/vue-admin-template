<!-- https://fullcalendar.io/ -->
<script setup>
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'

onMounted(() => {
  const calendarEl = document.querySelector('#calendar')
  let calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    }
  })
  calendar.render()
})
</script>

<template>
  <div id="calendar"></div>
</template>
