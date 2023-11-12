export default defineNuxtConfig({
  extends: '@barbapapazes/solo-sphere',
  nitro: {
    prerender: {
      routes: ['/', '/api/templates'],
      crawlLinks: true,
      failOnError: false,
    },
  },
  devtools: { enabled: true },
})
