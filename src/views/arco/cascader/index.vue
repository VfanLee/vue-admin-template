<template>
  <div class="arco-cascader">
    <a-card>
      <a-checkbox v-model="multiple">多选</a-checkbox>
      <a-checkbox v-model="showPath">路径模式</a-checkbox>
      <a-checkbox v-model="strict">严格模式</a-checkbox>
    </a-card>

    <a-card>
      <a-cascader :style="{ width: '320px' }" :options="options" v-model="val" :multiple="multiple" :show-path="showPath" :strict="strict" allow-clear />
      <pre>{{ val }}</pre>
    </a-card>
  </div>
</template>

<script setup lang="ts">
  const options = [
    {
      value: 'beijing',
      label: 'Beijing',
      children: [
        {
          value: 'chaoyang',
          label: 'ChaoYang',
          children: [
            {
              value: 'datunli',
              label: 'Datunli',
            },
          ],
        },
        {
          value: 'haidian',
          label: 'Haidian',
        },
        {
          value: 'dongcheng',
          label: 'Dongcheng',
        },
        {
          value: 'xicheng',
          label: 'Xicheng',
          children: [
            {
              value: 'jinrongjie',
              label: 'Jinrongjie',
            },
            {
              value: 'tianqiao',
              label: 'Tianqiao',
            },
          ],
        },
      ],
    },
    {
      value: 'shanghai',
      label: 'Shanghai',
      children: [
        {
          value: 'huangpu',
          label: 'Huangpu',
        },
      ],
    },
  ]

  const val = ref()
  // 是否开启多选
  const multiple = ref(false)
  // 是否开启path
  const showPath = ref(false)
  // 是否开启严格模式
  const strict = ref(false)
</script>

<style scoped lang="less">
  .arco-cascader {
    width: 100%;
    padding: 16px;
  }
</style>
