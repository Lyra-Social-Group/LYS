export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase'
  ],
  supabase: {
    redirect: false,
    clientOptions: {
      auth: {
        flowType: 'pkce',
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        experimental: {
          passkey: true
        }
      }
    }
  },
  app: {
    head: {
      title: 'Lyra Social Group',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
      meta: [
        { name: 'theme-color', content: '#A033ED' },
        { property: 'og:image', content: 'https://lyrasocialgroup.tech/logo.png' }
      ],
      script: [
        // Google tag (gtag.js)
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-HFENY0PXZZ',
          async: true
        },
        {
          innerHTML: "window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  gtag('config', 'G-HFENY0PXZZ');"
        },
        // Tidio widget script
        {
          src: '//code.tidio.co/hvvgxetrnk48ocehxey8q1zh0zlxw0rb.js',
          async: true
        }
      ]
    }
  }
})