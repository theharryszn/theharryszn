<script setup lang="ts"></script>
<template>
  <div class="preloader p-10">
    <div class="w-40 lg:w-56 h-1 bg-zinc-700 rounded-full">
      <div id="progress-indicator" class="h-1 w-[0%] bg-zinc-50 rounded-full transition"></div>
    </div>
    <!-- <div
      class="bg-zinc-900/20 m-auto border border-zinc-50/5 p-5 font-mono text-sm rounded-md max-w-[30rem] min-h-[10rem] w-full flex flex-col gap-5"
    >
      <div class="flex gap-2">
        <span class="w-2.5 bg-red-500 aspect-square rounded-full"></span>
        <span class="w-2.5 bg-amber-500 aspect-square rounded-full"></span>
        <span class="w-2.5 bg-green-500 aspect-square rounded-full"></span>
      </div>
      <div>
        <span class="text-green-500">theharryszn</span>@Portfolio
        <span class="text-green-500">~</span>> start . v1.0.0
        <br />
        <span class="opacity-50">start .</span> <br />
        <br />
        <div>
          <span><span class="opacity-50">[1/4]</span> 🔍 Resolving dependencies...</span><br />
          <span><span class="opacity-50">[2/4]</span> 🚚 Fetching dependencies...</span><br />
          <span><span class="opacity-50">[3/4]</span> 🔗 Building application...</span><br />
          <span><span class="opacity-50">[3/4]</span> ⚡️ Starting application...</span><br />
        </div>
        <br />
        <span>Started Successfully ✅🚀</span><br />
        <span>Opening <span class="text-green-500">theharryszn.dev</span> right now</span>
      </div>
    </div> -->
  </div>
</template>
<style scoped lang="scss">
.preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  @apply flex items-center justify-center bg-zinc-950 text-white;
  overflow: hidden;
  z-index: 999;
}
</style>
