<script lang="ts" setup>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
</script>
<template>
  <pageContainer>
    <NavbarView />
    <main class="px-5 md:px-40 flex flex-col justify-center gap-5">
      <div
        data-scroll-section
        class="md:pt-40 pt-32 py-5 flex flex-col gap-5 h-[70vh] justify-center"
      >
        <div class="text-3xl md:text-6xl text-zinc-400">
          Hi 👋🏾 - <span class="text-zinc-100">I'm Harry</span>, A Nigerian 🇳🇬 based Software
          Engineer. I have a strong passion for designing
          <span class="text-zinc-100">intuitive</span> and
          <span class="text-zinc-100">user-friendly</span> experiences.
        </div>
        <!-- <div class="leading-relaxed">
          <div>Hi recruiters, hiring managers, designers, and other friends 👀</div>
          <br />
          I'm Harry, a software engineer based in Nigeria 🇳🇬. As a self-taught developer, I have a
          strong passion for designing intuitive and user-friendly experiences. My work lies in
          building full-stack web and mobile applications with a focus on simplicity and usability.
        </div> -->
      </div>
      <div data-scroll-section class="h-[80vh] justify-center flex flex-col relative gap-10">
        <div class="text-2xl text-zinc-300">
          <span class="text-zinc-400 font-medium">#</span> Featured Works
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <a
            href="https://au-naturel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col gap-4 cursor-shrink"
          >
            <img
              src="@/assets/images/screenshots/aunaturel.png"
              class="bg-zinc-900/50 backdrop-blur object-cover border rounded-sm border-zinc-50/10 transition-all duration-700 hover:scale-[1.01]"
            />
            <div class="flex flex-col gap-1">
              <div class="text-lg">Au Naturel</div>
              <div class="opacity-80">
                A web gallery dedicated to showcasing the beauty of the human form through nude and
                self-portrait photography.
              </div>
            </div>
          </a>
          <a
            href="https://stickies-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col gap-4 cursor-shrink"
          >
            <img
              src="@/assets/images/screenshots/stickies.png"
              class="bg-zinc-900/50 backdrop-blur object-cover border rounded-sm border-zinc-50/10 transition-all duration-700 hover:scale-[1.01] dark-cursor"
            />
            <div class="flex flex-col gap-1">
              <div class="text-lg">Stickies</div>
              <div class="opacity-80">
                A simple note-taking web-app built with Vue and TailwindCSS. It allows you to pin
                sticky notes at random on a board.
              </div>
            </div>
          </a>
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
            class="text-sm opacity-50 hover:opacity-100 cursor-shrink"
            rel="noopener noreferrer"
            >EMAIL</a
          >
          <a
            href="https://www.linkedin.com/in/abidemi-ope-1ba99019a"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm opacity-50 hover:opacity-100 cursor-shrink"
            >LINKEDIN</a
          >
          <a
            href="https://twitter.com/theharryszn"
            class="text-sm opacity-50 hover:opacity-100 cursor-shrink"
            rel="noopener noreferrer"
            target="_blank"
            >TWITTER</a
          >
          <a
            href="https://github.com/theharryszn"
            class="text-sm opacity-50 hover:opacity-100 cursor-shrink"
            rel="noopener noreferrer"
            target="_blank"
            >GITHUB</a
          >
          <a
            href="https://instagram.com/theharryszn"
            class="text-sm opacity-50 hover:opacity-100 cursor-shrink"
            rel="noopener noreferrer"
            target="_blank"
            >INSTAGRAM</a
          >
          <a
            href="https://snapchat.com/add/theharryszn"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm opacity-50 hover:opacity-100 cursor-shrink"
            >SNAPCHAT</a
          >
          <a
            href="https://open.spotify.com/user/31br6djiz7oburebyiscmbr4lqny?si=71fcf51fb70e4ca3"
            rel="noopener noreferrer"
            target="_blank"
            class="text-sm opacity-50 hover:opacity-100 cursor-shrink"
            >SPOTIFY</a
          >
        </div>
      </div>
    </main>
    <FooterView />
  </pageContainer>
</template>
