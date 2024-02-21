<!-- https://fullcalendar.io/ -->
<script setup>
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import allLocales from '@fullcalendar/core/locales-all'

const calendarId = ref('calendar-' + +new Date() + Math.round(Math.random() * 1000))

onMounted(() => {
  const calendarEl = document.querySelector('#' + calendarId.value)
  let calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    },
    locales: allLocales,
    locale: 'zh-cn'
  })
  calendar.render()
})
</script>

<template>
  <div :id="calendarId"></div>
</template>
