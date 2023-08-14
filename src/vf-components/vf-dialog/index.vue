<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: true
  }
})

defineEmits(['update:visible'])
</script>

<template>
  <Transition name="dialog">
    <div v-if="visible" class="vf-dialog__mask" @click.self="$emit('update:visible', false)">
      <div class="vf-dialog">
        <div class="vf-dialog__header">
          <slot name="header">default header</slot>
        </div>

        <div class="vf-dialog__body">
          <slot name="body">default body</slot>
        </div>

        <div class="vf-dialog__footer">
          <slot name="footer">default footer</slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.vf-dialog__mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.vf-dialog {
  width: 50%;
  margin: auto;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.vf-dialog__header {
  padding: 20px 20px 0;
}

.vf-dialog__body {
  padding: 20px;
}

.vf-dialog__footer {
  padding: 0 20px 20px;
}

.dialog-enter-from {
  opacity: 0;
}

.dialog-leave-to {
  opacity: 0;
}

.dialog-enter-from .vf-dialog,
.dialog-leave-to .vf-dialog {
  transform: scale(0.9);
}
</style>
