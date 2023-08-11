<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const $emit = defineEmits(['update:modelValue'])
</script>

<template>
  <label class="vf-switch" :class="{ 'is-checked': modelValue }">
    <input class="vf-switch__input" type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)" />

    <div class="vf-switch__core">
      <div class="vf-switch__action"></div>
    </div>
  </label>
</template>

<style lang="scss">
.vf-switch {
  display: inline-flex;
  cursor: pointer;

  input[type='checkbox'] {
    display: none;
  }

  .vf-switch__core {
    position: relative;
    width: 40px;
    height: 20px;
    background-color: #dcdfe6;
    border-radius: 20px;
    transition: all 0.3s;
  }

  .vf-switch__action {
    position: absolute;
    top: 2px;
    left: calc(100% - 18px);
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 9px;
    transition: all 0.3s;
  }

  &.is-checked {
    .vf-switch__core {
      background-color: $primary-color;
    }

    .vf-switch__action {
      left: 2px;
    }
  }
}
</style>
