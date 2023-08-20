<script setup>
import SidebarLogo from './components/SidebarLogo.vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <div class="l-sidebar">
    <div class="l-sidebar__inner is-fixed">
      <div class="l-sidebar__header">
        <SidebarLogo />
      </div>
      <div class="l-sidebar__body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum.</p>
      </div>
      <div class="l-sidebar__footer">
        <div class="sidebar__collapse-btn" @click="appStore.collapseSidebar()">
          <i class="fa-solid" :class="[appStore.isCollapseSidebar ? 'fa-indent' : 'fa-outdent']"></i>
        </div>
      </div>
    </div>
  </div>
</template>
