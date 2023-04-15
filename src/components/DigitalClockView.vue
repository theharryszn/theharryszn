<script setup lang="ts">
import moment from 'moment'
import { onMounted, ref } from 'vue'

const time = ref({
  hour: moment().format('hh'),
  min: moment().format('mm'),
  sec: moment().format('ss')
})

onMounted(() => {
  setInterval(() => {
    updateTime()
  }, 1000)
})

function updateTime() {
  time.value = {
    hour: moment().format('hh'),
    min: moment().format('mm'),
    sec: moment().format('ss')
  }
}
</script>
<template>
  <div>{{ time.hour }} <span>:</span> {{ time.min }} <span>:</span> {{ time.sec }} WAT</div>
</template>
