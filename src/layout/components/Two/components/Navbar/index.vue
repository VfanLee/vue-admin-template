<script setup>
import NavbarLogo from './NavbarLogo.vue';
import Breadcrumb from '@/layout/components/Breadcrumb.vue';
import UserInfo from '@/layout/components/UserInfo.vue';
</script>

<template>
  <div class="l-navbar">
    <NavbarLogo />
    <div class="navbar__left">
      <Breadcrumb />
    </div>
    <div class="navbar__right">
      <UserInfo />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
