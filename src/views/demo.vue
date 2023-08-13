<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const data = {
    activityName: 'Hello',
    activityZone: '2',
    activityDate: '2020-02-02',
    activityTime: '12:00',
    instantDelivery: false,
    activityType: ['2'],
    resource: '2'
  }

  const submit = () => {
    data.activityName = document.querySelector('.activity__name').value
    data.activityZone = document.querySelector('.activity__zone').value
    data.activityDate = document.querySelector('.activity__date').value
    data.activityTime = document.querySelector('.activity__time').value
    data.instantDelivery = document.querySelector('.instant__delivery').checked

    data.activityType.splice(0)
    document.querySelectorAll('.activity__type').forEach(el => {
      el.checked && data.activityType.push(el.value)
    })

    document.querySelectorAll('.resource').forEach(el => {
      el.checked && (data.resource = el.value)
    })

    console.table(data)
  }

  document.querySelector('.submit__btn').addEventListener('click', submit)
})
</script>

<template>
  <div>
    <div>
      <strong>活动名称：</strong>

      <input class="activity__name" type="text" value="Hello" />
    </div>

    <div>
      <strong>活动区域：</strong>
      <select class="activity__zone" name="activityZone">
        <option value="1">区域1</option>
        <option value="2" selected>区域2</option>
        <option value="3">区域3</option>
      </select>
    </div>

    <div>
      <strong>活动时间：</strong>
      <input class="activity__date" type="date" value="2020-02-02" />
      <span>-</span>
      <input class="activity__time" type="time" value="12:00" />
    </div>

    <label>
      <strong>即时交付：</strong>
      <input class="instant__delivery" type="checkbox" name="instantDelivery" />
    </label>

    <div>
      <strong>活动类型：</strong>

      <label>
        <input class="activity__type" type="checkbox" value="1" name="activityType" />
        线上活动
      </label>

      <label>
        <input class="activity__type" type="checkbox" value="2" name="activityType" checked />
        促销活动
      </label>

      <label>
        <input class="activity__type" type="checkbox" value="3" name="activityType" />
        线下活动
      </label>

      <label>
        <input class="activity__type" type="checkbox" value="4" name="activityType" />
        简单的品牌曝光
      </label>
    </div>

    <div>
      <strong>资源：</strong>

      <label>
        <input class="resource" type="radio" value="1" name="resource" />
        赞助
      </label>

      <label>
        <input class="resource" type="radio" value="2" name="resource" checked />
        场地
      </label>
    </div>

    <div>
      <button class="submit__btn" type="button">提交</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
