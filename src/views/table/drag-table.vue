<script setup>
import { ref, onMounted } from 'vue'
import Sortable from 'sortablejs'
import { reqArticleList } from '@/api/article'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },

]

const dragTableRef = ref()

onMounted(async () => {
  const data = await reqArticleList()
  console.log(data);

  const el = dragTableRef.value.$el.querySelector('.el-table__body tbody')
  Sortable.create(el, {
    onEnd(e) {
      const { newIndex, oldIndex } = e
      console.log(newIndex, oldIndex)
    }
  })
})
</script>

<template>
  <div class="view-drag-table">
    <h2>拖拽表格</h2>
    <p>参考:</p>
    <ul>
      <li><a href="https://github.com/SortableJS/Sortable">SortableJS</a></li>
    </ul>

    <el-table ref="dragTableRef" :data="tableData">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<style lang="scss" scoped></style>
