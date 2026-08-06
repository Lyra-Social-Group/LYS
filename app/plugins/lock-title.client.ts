export default defineNuxtPlugin(() => {
  if (import.meta.client) {
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
  }
})