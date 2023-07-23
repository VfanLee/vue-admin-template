<script setup>
import { reqPosts } from '@/api/post'
import { ref, onMounted } from 'vue'
import Sortable from 'sortablejs'

const postTableRef = ref(null)

const posts = ref([])

onMounted(async () => {
  const res = await reqPosts()
  posts.value = res

  const el = postTableRef.value.$el.querySelector('.post__table table > tbody')
  Sortable.create(el, {
    onEnd(e) {
      console.log(e)
    }
  })
})
</script>

<template>
  <div class="demo">
    <el-scrollbar>
      <el-table ref="postTableRef" class="post__table" :data="posts">
        <el-table-column prop="id" label="id" />
        <el-table-column prop="userId" label="userId" />
        <el-table-column prop="title" label="title" />
        <el-table-column>
          <template #header>操作</template>
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </el-table-column>
      </el-table>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 200px;
  background-color: #333;

  .el-scrollbar {
    width: 100%;
  }
}
</style>
