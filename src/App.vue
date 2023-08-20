<template>
  <RouterView v-slot="{ Component, route }">
    <component :is="Component" />
  </RouterView>
</template>
