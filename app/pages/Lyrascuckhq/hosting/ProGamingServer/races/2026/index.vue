<script setup lang="ts">
import { marked } from 'marked'

const { data: handbookData, pending, error } = await useFetch<any>('/api/race-handbook')

const renderedMarkdown = computed(() => {
  if (!handbookData.value?.content) return ''
  return marked.parse(handbookData.value.content)
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

  // Strip markdown syntax characters so speech sounds clean
  const cleanText = handbookData.value.content
    .replace(/[#*`_\[\]()]/g, '')
    .replace(/\|/g, ' ')

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

      <!-- Renders the fetched content dynamically as structured Markdown HTML -->
      <div v-html="renderedMarkdown" class="prose prose-invert max-w-none space-y-4"></div>

      <div class="text-xs text-gray-500 pt-4 border-t border-[#2f3542]">
        Last synchronized with live document: {{ new Date(handbookData.updatedAt).toLocaleString() }}
      </div>
    </div>
  </div>
</template>