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
  const shrinks = document.querySelectorAll('.shrink')

  shrinks.forEach((el) => {
    el.addEventListener('mouseover', () => {
      gsap.to('.cursor', {
        scale: 0.5,
        duration: 0.5
      })
    })

    el.addEventListener('mouseout', () => {
      gsap.to('.cursor', {
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
  <div class="flex min-h-screen flex-col gap-5 justify-center items-center">
    <!-- <p class="text-zinc-400">Hi, I'm</p> -->
    <div class="text-3xl md:text-7xl">
      <span class="hover:text-zinc-600 shrink transition">theharryszn</span
      ><span class="hover:text-zinc-600 shrink transition">.dev</span>
    </div>
    <p class="text-zinc-400">Software Engineer</p>
    <div
      class="fixed text-xs bottom-0 p-5 md:text-sm w-screen flex items-center gap-5 justify-between"
    >
      <div>
        Built with
        <a class="shrink" href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"
          >VueJs</a
        >
        and
        <a class="shrink" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"
          >TailwindCSS</a
        >
        <!-- and ❤️ -->
      </div>
      <div>{{ time.hour }} <span>:</span> {{ time.min }} <span>:</span> {{ time.sec }} WAT</div>
    </div>
  </div>
</template>
