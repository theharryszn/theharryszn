<script setup lang="ts"></script>
<template>
  <nav
    data-scroll-fixed
    class="fixed z-[40] top-0 p-10 py-6 w-screen flex items-center gap-5 justify-between bg-zinc-100/50 dark:bg-zinc-950/50 backdrop-blur-lg text-sm"
  >
    <RouterLink to="/" class="opacity-50 hover:opacity-100 shrink">theharryszn</RouterLink>
    <div class="items-center gap-10 hidden md:flex">
      <RouterLink to="/works" class="opacity-50 hover:opacity-100 shrink">Works</RouterLink>
      <RouterLink to="/resume" class="opacity-50 hover:opacity-100 shrink">Resume</RouterLink>
      <RouterLink to="/contact" class="opacity-50 hover:opacity-100 shrink">Contact</RouterLink>
    </div>
  </nav>
</template>
