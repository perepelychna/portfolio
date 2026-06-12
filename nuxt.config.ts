// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  nitro: {
    prerender: {
      routes: [
        '/',
        '/about',
        '/projects/inserviss',
        '/projects/neirotrace',
        '/projects/ibumper',
        '/projects/glutenfree',
        '/projects/nickytanner',
      ],
    },
  },
})
