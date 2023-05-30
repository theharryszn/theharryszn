<script lang="ts" setup>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'

const featured_projects = [
  {
    title: 'Stickies',
    description:
      'Stickies is a simple note-taking web-app built with Vue and TailwindCSS. It allows you to pin sticky notes at random on a board. It harness the browsers Local Storage for storing notes.',
    url: 'https://stickies-app.vercel.app',
    image: 'src/assets/images/screenshots/stickies.png',
    repository: 'https://github.com/OpeAbidemi/stickies',
    team: {
      name: 'Abidemi Ope',
      url: 'https://github.com/OpeAbidemi'
    }
  },
  {
    title: 'Beatfro',
    description: 'A music streaming app',
    url: 'http://beatfrowaitlist.netlify.app/',
    image: 'src/assets/images/screenshots/beatfro.png',
    repository: null,
    team: {
      name: 'Renli Tech',
      url: 'https://github.com/renli-tech'
    }
  },
  {
    title: 'ON-OS',
    description: 'A web based open source operating system',
    url: 'https://on-os.vercel.app/',
    image: 'src/assets/images/screenshots/onos.png',
    repository: 'https://github.com/asterix-oss/on-os',
    team: {
      name: 'Asterix',
      url: 'https://github.com/asterix-oss'
    }
  },
  {
    title: 'darkchill',
    description: 'A very chill dark theme for VS Code',
    url: 'https://marketplace.visualstudio.com/items?itemName=AbidemiOpe.darkchill&ssr=false#overview',
    image: 'src/assets/images/screenshots/darkchill.png',
    repository: 'https://github.com/OpeAbidemi/darkchill',
    team: {
      name: 'Abidemi Ope',
      url: 'https://github.com/OpeAbidemi'
    }
  },
  {
    title: 'Beyond',
    description: 'A React component library based on Renli Design System',
    url: 'https://www.npmjs.com/package/@beyond-ui/react',
    image: 'src/assets/images/screenshots/beyond.png',
    repository: 'https://github.com/renli-tech/Beyond',
    team: {
      name: 'Renli Tech',
      url: 'https://github.com/renli-tech'
    }
  },
  {
    title: 'Olimf Productions',
    description: 'Website for Media Agency',
    url: 'https://www.olimf.com/',
    image: 'src/assets/images/screenshots/olimf.png',
    repository: null,
    team: {
      name: 'Abidemi Ope',
      url: 'https://github.com/OpeAbidemi'
    }
  },
  {
    title: 'hamburger',
    description:
      'A yummy fullstack monorepo boilerplate 🍔🍔 using Typescript, GraphQL, React and React Native (Expo)',
    url: 'https://github.com/renli-tech/hamburger',
    image: 'src/assets/images/screenshots/hamburger.png',
    repository: 'https://github.com/renli-tech/hamburger',
    team: {
      name: 'Renli Tech',
      url: 'https://github.com/renli-tech'
    }
  }
]
</script>
<template>
  <pageContainer>
    <NavbarView />
    <main class="px-5 md:px-20 flex flex-col justify-center gap-5">
      <div data-scroll-section class="md:pt-40 pt-32 py-5 flex flex-col gap-5">
        <div class="text-3xl md:text-5xl">Works</div>
      </div>
      <div data-scroll-section class="flex items-center justify-between py-5">
        <div class="opacity-50">Selected Works</div>
        <div class="text-sm opacity-50">2020 - Present</div>
      </div>
      <div data-scroll-section class="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10">
        <a
          v-for="project in featured_projects"
          :key="project.url"
          target="_blank"
          rel="noopener noreferrer"
          :href="project.url"
          class="flex flex-col gap-5 col-span-1 cursor-shrink"
        >
          <img
            :src="project.image"
            :alt="project.description"
            class="bg-zinc-800/10 aspect-video object-cover md:aspect-square w-full border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 hover:scale-[1.01]"
          />
          <div>
            <div>{{ project.title }}</div>
            <div class="text-sm opacity-80">{{ project.description }}</div>
          </div>
        </a>
        <!-- <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://stickies-app.vercel.app/"
          class="flex flex-col gap-5 col-span-1 cursor-shrink"
        >
          <img
            src="@/assets/images/stickies.png"
            class="bg-zinc-800/10 aspect-video object-cover md:aspect-square w-full border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 hover:scale-[1.01]"
          />
          <div>
            <div>Stickies</div>
            <div class="text-sm opacity-80">A simple note-taking web-app</div>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://abidemiharry.vercel.app"
          class="flex flex-col gap-5 col-span-1 cursor-shrink"
        >
          <img
            src="@/assets/images/portfolio.png"
            class="bg-zinc-800/10 aspect-video md:aspect-square w-full object-cover border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 hover:scale-[1.01]"
          />
          <div>
            <div>Portfolio V1</div>
            <div class="text-sm opacity-80">My first portfolio website</div>
          </div>
        </a>
        <div class="flex flex-col gap-5 col-span-1">
          <div
            class="bg-zinc-800/10 aspect-video md:aspect-square w-full border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 hover:scale-[1.01]"
          ></div>
          <div>Reflect+ (Coming Soon)</div>
        </div>
        <a
          href="https://www.olimf.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col gap-5 col-span-1 cursor-shrink"
        >
          <img
            src="@/assets/images/olimf.png"
            class="bg-zinc-800/10 aspect-video md:aspect-square object-cover border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 hover:scale-[1.01]"
          />
          <div>
            <div>Olimf</div>
            <div class="text-sm opacity-80">Website for Media Agency</div>
          </div>
        </a>
        <div class="flex flex-col gap-5 col-span-1">
          <div
            class="bg-zinc-800/10 aspect-video md:aspect-square border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 hover:scale-[1.01]"
          ></div>
          <div>Beatfro Waitlist</div>
        </div> -->
      </div>
      <div data-scroll-section class="pt-20 flex flex-col justify-center gap-10">
        <blockquote class="text-3xl pl-5 border-l-4 border-zinc-800/50">
          <!-- <span class="text-5xl font-extrabold leading-[0] opacity-30">{{ `"` }}</span> -->
          Software engineer ing is not just about writing code, it's about designing and building
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
