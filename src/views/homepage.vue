<script setup>
import request from '@/utils/request'
import {} from 'vue'

request({
  url: 'http://jsonplaceholder.typicode.com/posts',
  method: 'GET'
}).then(value => {
  console.log(value)
})
</script>

<template>
  <div>
    <p>开始内容</p>
    <p v-for="i of 100">这是一段内容</p>
    <p>结束内容</p>
  </div>
</template>

<style lang="scss" scoped></style>
