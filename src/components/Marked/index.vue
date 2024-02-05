<!-- https://marked.js.org/ -->
<script setup>
import * as marked from 'marked'
console.log(marked)

const id = 'marked-' + Date.now()

const value = ref('')
</script>

<template>
  <div class="marked-container" :id="id"></div>
</template>
