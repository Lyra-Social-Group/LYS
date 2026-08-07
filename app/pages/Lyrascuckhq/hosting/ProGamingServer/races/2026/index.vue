<script setup lang="ts">
const { data: handbookData, pending, error } = await useFetch<any>('/api/race-handbook')

// Client-side sanitizer to completely strip out Google Docs inline dimensions and positioning
const sanitizedContent = computed(() => {
  if (!handbookData.value?.content) return ''
  
  if (!import.meta.client) return handbookData.value.content

  const parser = new DOMParser()
  const doc = parser.parseFromString(handbookData.value.content, 'text/html')

  // Remove width, height, and style attributes from all elements to force full responsiveness
  const allElements = doc.querySelectorAll('*')
  allElements.forEach((el) => {
    el.removeAttribute('width')
    el.removeAttribute('height')
    
    // Keep color/background formatting if needed, but strip rigid layout widths & absolute coords
    const style = el.getAttribute('style')
    if (style) {
      const cleanedStyle = style
        .replace(/width:[^;]+;?/gi, '')
        .replace(/max-width:[^;]+;?/gi, '')
        .replace(/min-width:[^;]+;?/gi, '')
        .replace(/position:[^;]+;?/gi, '')
        .replace(/left:[^;]+;?/gi, '')
        .replace(/top:[^;]+;?/gi, '')
      el.setAttribute('style', cleanedStyle)
    }
  })

  return doc.body ? doc.body.innerHTML : handbookData.value.content
})

const isSpeaking = ref(false)
let speechUtterance: SpeechSynthesisUtterance | null = null

const toggleSpeech = () => {
  if (!import.meta.client || !handbookData.value?.content) return

  if (isSpeaking.value) {
    window.speechSynthesis.cancel()
    isSpeaking.value = false
    return
  }

  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = handbookData.value.content
  const cleanText = tempDiv.textContent || tempDiv.innerText || ''

  speechUtterance = new SpeechSynthesisUtterance(cleanText)
  speechUtterance.rate = 1.0
  speechUtterance.pitch = 1.0

  speechUtterance.onend = () => {
    isSpeaking.value = false
  }

  window.speechSynthesis.speak(speechUtterance)
  isSpeaking.value = true
}

onUnmounted(() => {
  if (import.meta.client) {
    window.speechSynthesis.cancel()
  }
})

useSeoMeta({
  title: 'Programming Endurance Racing Series hand book of 2026 | Lyra Cuck HQ',
  description: 'Programming Endurance Racing Series hand book of 2026',
  ogTitle: 'Programming Endurance Racing Series hand book of 2026 | Lyra Cuck HQ',
  ogDescription: 'Programming Endurance Racing Series hand book of 2026',
  ogImage: 'https://raw.githubusercontent.com/Lyra-Social-Group/lyra-Social-Group-Pictures/refs/heads/main/logos/ProGaming/pro.png',
  twitterCard: 'summary',
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8 text-gray-100">
    <div v-if="pending" class="text-center py-12 text-gray-400 animate-pulse">
      Loading latest racing handbook rules...
    </div>

    <div v-else-if="error" class="text-red-400 bg-red-950/20 p-4 rounded-lg border border-red-900/40">
      Unable to load the race handbook at this moment.
    </div>

    <div v-else-if="handbookData" class="bg-[#181b22] border border-[#2f3542] rounded-xl p-8 shadow-xl space-y-6">
      
      <!-- Audio Assistant Bar -->
      <div class="flex items-center justify-between pb-4 border-b border-[#2f3542]">
        <span class="text-sm text-gray-400">Audio Assistant</span>
        <button 
          @click="toggleSpeech" 
          class="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-colors shadow-lg cursor-pointer"
        >
          <span v-if="!isSpeaking">🔊 Read Handbook</span>
          <span v-else>⏹ Stop Reading</span>
        </button>
      </div>

      <!-- Content Renderer -->
      <div v-html="sanitizedContent" class="handbook-container text-gray-200 leading-relaxed space-y-4"></div>

      <div class="text-xs text-gray-500 pt-4 border-t border-[#2f3542]">
        Last synchronized with live document: {{ new Date(handbookData.updatedAt).toLocaleString() }}
      </div>
    </div>
  </div>
</template>

<style>
.handbook-container, 
.handbook-container div,
.handbook-container table {
  width: 100% !important;
  max-width: 100% !important;
  background-color: transparent !important;
  background: transparent !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  box-sizing: border-box !important;
}

.handbook-container p, 
.handbook-container span, 
.handbook-container li, 
.handbook-container h1, 
.handbook-container h2, 
.handbook-container h3, 
.handbook-container h4 {
  color: #e5e7eb !important;
  background-color: transparent !important;
  white-space: normal !important;
  word-break: normal !important;
  overflow-wrap: break-word !important;
}

.handbook-container li::before,
.handbook-container span::before,
.handbook-container p::before {
  color: #e5e7eb !important;
}

.handbook-container table {
  border-collapse: collapse;
  margin-bottom: 1.5rem;
}

.handbook-container td, 
.handbook-container th {
  padding: 0.75rem 1rem;
  color: #f3f4f6 !important;
  border-color: #2f3542 !important;
  background-color: transparent !important;
}

.handbook-container img {
  max-width: 100%;
  height: auto;
}
</style>