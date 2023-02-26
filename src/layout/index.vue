<script setup>
import Sidebar from "./components/Sidebar/index.vue";
import Navbar from "./components/Navbar/index.vue";
import AppMain from "./components/AppMain/index.vue";
</script>

<template>
  <div class="app__container">
    <Sidebar />
    <div class="main__container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>
