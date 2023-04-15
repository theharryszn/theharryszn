<script lang="ts" setup>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
</script>
<template>
  <pageContainer>
    <NavbarView />
    <main class="px-10 flex flex-col justify-center gap-5">
      <div data-scroll-section class="md:pt-40 pt-32 py-5 flex flex-col gap-5">
        <div class="text-3xl md:text-5xl">Works</div>
      </div>
      <div data-scroll-section class="flex items-center justify-between py-5">
        <div class="opacity-50">Selected Works</div>
        <div class="text-sm opacity-50">2020 - Present</div>
      </div>
      <div data-scroll-section class="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10">
        <div class="flex flex-col gap-5 col-span-2">
          <div
            class="bg-zinc-800/10 aspect-video border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 hover:scale-[1.01]"
          ></div>
          <div>Stickies</div>
        </div>
        <div class="flex flex-col gap-5 col-span-1">
          <div
            class="bg-zinc-800/10 aspect-square border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 hover:scale-[1.01]"
          ></div>
          <div>Portfolio V1</div>
        </div>
        <div class="flex flex-col gap-5 col-span-full">
          <div
            class="bg-zinc-800/10 aspect-video border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 hover:scale-[1.01]"
          ></div>
          <div>Reflect+ (Coming Soon)</div>
        </div>
        <div class="flex flex-col gap-5 col-span-1">
          <div
            class="bg-zinc-800/10 aspect-square border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 hover:scale-[1.01]"
          ></div>
          <div>Olimf</div>
        </div>
        <div class="flex flex-col gap-5 col-span-2">
          <div
            class="bg-zinc-800/10 aspect-video border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 hover:scale-[1.01]"
          ></div>
          <div>Beatfro Waitlist</div>
        </div>
      </div>
      <div data-scroll-section class="pt-20 flex flex-col justify-center gap-10">
        <blockquote class="text-3xl pl-5 border-l-4 border-zinc-800/50">
          <!-- <span class="text-5xl font-extrabold leading-[0] opacity-30">{{ `"` }}</span> -->
          Software engineering is not just about writing code, it's about designing and building
          solutions that solve real-world problems and improve people's lives.
        </blockquote>
        <div class="leading-relaxed">
          As a software engineer, I'm passionate about using my skills to build solutions that make
          a positive impact on society and the environment. Together, let's envision a better future
          by developing innovative software applications that promote sustainability, social
          responsibility, and human well-being. By working collaboratively, we can create a better
          world for ourselves and for generations to come.
        </div>
        <div class="flex gap-10 flex-wrap gap-y-5">
          <a
            href="mailto:opeabidemi@gmail.com"
            class="text-sm opacity-50 hover:opacity-100 shrink"
            rel="noopener noreferrer"
            >EMAIL</a
          >
          <a
            href="https://www.linkedin.com/in/abidemi-ope-1ba99019a"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm opacity-50 hover:opacity-100 shrink"
            >LINKEDIN</a
          >
          <a
            href="https://twitter.com/theharryszn"
            class="text-sm opacity-50 hover:opacity-100 shrink"
            rel="noopener noreferrer"
            target="_blank"
            >TWITTER</a
          >
          <a
            href="https://github.com/theharryszn"
            class="text-sm opacity-50 hover:opacity-100 shrink"
            rel="noopener noreferrer"
            target="_blank"
            >GITHUB</a
          >
          <a
            href="https://instagram.com/theharryszn"
            class="text-sm opacity-50 hover:opacity-100 shrink"
            rel="noopener noreferrer"
            target="_blank"
            >INSTAGRAM</a
          >
          <a
            href="https://snapchat.com/add/theharryszn"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm opacity-50 hover:opacity-100 shrink"
            >SNAPCHAT</a
          >
          <a
            href="https://open.spotify.com/user/31br6djiz7oburebyiscmbr4lqny?si=71fcf51fb70e4ca3"
            rel="noopener noreferrer"
            target="_blank"
            class="text-sm opacity-50 hover:opacity-100 shrink"
            >SPOTIFY</a
          >
        </div>
      </div>
    </main>
    <FooterView />
  </pageContainer>
</template>
