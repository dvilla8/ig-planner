import { defineNuxtConfig } from 'nuxt/config'
import { createResolver } from "@nuxt/kit";

// @ts-ignore
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "£": resolve(__dirname, ".")
  },
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    }
  },
  modules: [
    "nuxt-swiper",
    "vuetify-nuxt-module",
    '@pinia-plugin-persistedstate/nuxt',
    [
      "@vueuse/nuxt",
      {
        autoImports: ["useClipboard"]
      }
    ],
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"]
      }
    ],
    "@nuxtjs/i18n"
  ],
  css: [
    "swiper/css",
    "£/styles/index.scss",
  ],
  components: {
    global: true,
    dirs: ["./components"],
  },
  // @ts-ignore
  pinia: {
    storesDirs: [
      '../base/stores/**'
    ]
  },
  vuetify: {
    moduleOptions: {
      /* other module options */
      styles: { configFile: resolve("./styles/settings.scss") }
    },
    vuetifyOptions: {
      ssr: true
    }
  },
  features: {
    inlineStyles: false
  },
  imports: {
    dirs: ['config', 'composables', 'core', 'stores', 'utils']
  },
})
