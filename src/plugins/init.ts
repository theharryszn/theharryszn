// @ts-ignore
import LocomotiveScroll from "locomotive-scroll";
import type { Plugin } from "vue";

export default {
  install(app) {
    app.config.globalProperties.$locomotiveScroll = LocomotiveScroll;
  },
} as Plugin;
