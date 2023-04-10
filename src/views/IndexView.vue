<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import moment from 'moment'
import gsap from 'gsap'

const time = ref({
  hour: moment().format('hh'),
  min: moment().format('mm'),
  sec: moment().format('ss')
})

onMounted(() => {
  setInterval(() => {
    updateTime()
  }, 1000)

  // shrink animation
  const shrinks = document.querySelectorAll("[class*='shrink']")

  shrinks.forEach((el) => {
    el.addEventListener('mouseover', () => {
      gsap.to('.c-circle', {
        scale: 0.5,
        duration: 0.5
      })
    })

    el.addEventListener('mouseout', () => {
      gsap.to('.c-circle', {
        scale: 1,
        duration: 0.5
      })
    })
  })
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
  <div class="flex min-h-screen justify-center items-center">
    <div class="text-7xl">
      <span class="hover:text-zinc-600 transition shrink">theharryszn</span
      ><span class="hover:text-zinc-600 transition shrink">.dev</span>
    </div>
    <div class="fixed bottom-0 p-5 text-sm w-screen flex items-center justify-between">
      <div>
        Built with
        <a class="shrink" href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"
          >VueJs</a
        >
        and
        <a class="shrink" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"
          >TailwindCSS</a
        >
      </div>
      <div>{{ time.hour }} <span>:</span> {{ time.min }} <span>:</span> {{ time.sec }} WAT</div>
    </div>
  </div>
</template>
