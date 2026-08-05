export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Lyra Social Group',
      meta: [
        { name: 'theme-color', content: '#A033ED' },
        { property: 'og:image', content: 'https://lyrasocialgroup.tech/logo.png' }
      ]
    }
  }
})