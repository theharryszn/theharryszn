<script setup lang="ts">
import { gsap } from 'gsap'
import { onBeforeRouteLeave } from 'vue-router'

const openMenu = () => {
  gsap.to('#mobile-menu', {
    translateX: 0,
    duration: 0.5,
    ease: 'easeIn'
  })
}

const closeMenu = () => {
  gsap.to('#mobile-menu', {
    translateX: window.innerWidth,
    ease: 'easeIn'
  })
}

onBeforeRouteLeave(() => {
  closeMenu()
})
</script>
<template>
  <nav
    data-scroll-fixed
    class="fixed z-[40] top-0 px-5 md:px-40 py-10 w-screen flex items-center gap-5 justify-between bg-zinc-950/50 backdrop-blur-lg text-sm"
  >
    <RouterLink to="/" class="cursor-shrink">theharryszn.dev</RouterLink>
    <div class="items-center gap-10 hidden md:flex">
      <RouterLink to="/works" class="opacity-50 hover:opacity-100 cursor-shrink">Works</RouterLink>
      <RouterLink to="/resume" class="opacity-50 hover:opacity-100 cursor-shrink"
        >Resume</RouterLink
      >
    </div>
    <div class="flex md:hidden opacity-50 hover:opacity-100 cursor-shrink" @click="openMenu">
      MENU
    </div>
  </nav>
  <div
    id="mobile-menu"
    class="fixed z-[99] bg-zinc-950 p-10 gap-10 flex md:hidden flex-col w-screen h-screen transform translate-x-[100vh]"
  >
    <div class="flex opacity-50 hover:opacity-100 cursor-shrink" @click="closeMenu">CLOSE</div>
    <RouterLink to="/" class="opacity-50 hover:opacity-100 cursor-shrink text-3xl">Home</RouterLink>
    <RouterLink to="/works" class="opacity-50 hover:opacity-100 cursor-shrink text-3xl"
      >Works</RouterLink
    >
    <RouterLink to="/resume" class="opacity-50 hover:opacity-100 cursor-shrink text-3xl"
      >Resume</RouterLink
    >
  </div>
</template>
