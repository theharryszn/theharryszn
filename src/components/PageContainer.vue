<script lang="ts" setup></script>
<template>
  <div class="page full-page">
    <div class="container" data-scroll-container ref="container">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'

export default {
  name: 'pageContainer',
  methods: {
    setScroll() {
      const scroller = new this.$locomotiveScroll({
        el: this.$refs.container,
        smooth: true,
        reloadOnContextChange: true
      })
      gsap.registerPlugin(ScrollTrigger)
      scroller.on('scroll', () => {
        ScrollTrigger.update()
      })
      ScrollTrigger.scrollerProxy('.container', {
        scrollTop(value) {
          return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        }
      })

      ScrollTrigger.addEventListener('refresh', () => scroller.update())
      ScrollTrigger.refresh()
    }
  },
  mounted() {
    this.setScroll()
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
  }
}
</script>
<style>
.container,
.container > * {
  width: 100%;
  min-width: 100%;
}
</style>
