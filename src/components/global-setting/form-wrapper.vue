<template>
  <a-input-number v-if="props.type === 'number'" :style="{ width: '80px' }" size="small" :default-value="props.defaultValue as number" @change="handleChange" />
  <a-switch v-else :default-checked="props.defaultValue as boolean" size="small" @change="handleChange" />
</template>

<script lang="ts" setup>
  interface Props {
    type?: string
    name?: string
    defaultValue?: string | boolean | number
  }
  const props = withDefaults(defineProps<Props>(), { type: '', name: '', defaultValue: '' })
  interface Emits {
    inputChange: [{ value: unknown; key: string }]
  }
  const emit = defineEmits<Emits>()
  const handleChange = (value: unknown) => {
    emit('inputChange', {
      value,
      key: props.name,
    })
  }
</script>
