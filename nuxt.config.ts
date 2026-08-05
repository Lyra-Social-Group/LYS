export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/kinde'],
  kinde: {
    authDomain: 'https://auth.lyrasocialgroup.tech',
    clientId: 'your_actual_client_id',
    clientSecret: 'your_actual_client_secret',
    redirectURL: 'http://localhost:3000/api/callback',
    logoutRedirectURL: 'http://localhost:3000',
    postLoginRedirectURL: 'http://localhost:3000/dashboard',
  },
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