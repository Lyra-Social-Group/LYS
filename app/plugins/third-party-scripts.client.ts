// Add this declaration at the top of plugins/third-party-scripts.client.ts
declare global {
  interface Window {
    dataLayer: any[]
  }
}

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    // 1. Lock document title to block Tidio notification renaming
    let activeTitle = document.title
    Object.defineProperty(document, 'title', {
      configurable: true,
      get: () => activeTitle,
      set: (newTitle) => {
        if (newTitle.includes('New message') || newTitle.includes('(')) {
          return
        }
        activeTitle = newTitle
      },
    })

    // 2. Inject Google Tag (gtag.js)
    const gtagScript = document.createElement('script')
    gtagScript.async = true
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-HFENY0PXZZ'
    document.head.appendChild(gtagScript)

    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', 'G-HFENY0PXZZ')

    // 3. Inject Tidio Chat Script
    const tidioScript = document.createElement('script')
    tidioScript.async = true
    tidioScript.src = '//code.tidio.co/hvvgxetrnk48ocehxey8q1zh0zlxw0rb.js'
    document.head.appendChild(tidioScript)
  }
})