<script setup>
import { marked } from 'marked'

const { data: handbookData, pending, error } = await useFetch('/api/race-handbook')

// Computed property to turn the raw text/markdown into rendered HTML
const renderedMarkdown = computed(() => {
  if (!handbookData.value?.content) return ''
  return marked.parse(handbookData.value.content)
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

    <div v-else class="bg-[#181b22] border border-[#2f3542] rounded-xl p-8 shadow-xl space-y-6">
      <!-- Renders the fetched content dynamically as structured Markdown HTML -->
      <div v-html="renderedMarkdown" class="prose prose-invert max-w-none space-y-4"></div>

      <div class="text-xs text-gray-500 pt-4 border-t border-[#2f3542]">
        Last synchronized with live document: {{ new Date(handbookData.updatedAt).toLocaleString() }}
      </div>
    </div>
  </div>
</template>