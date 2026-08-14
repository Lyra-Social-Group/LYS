<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-[#0d0d12] text-gray-100 px-6 text-center">
    <div class="max-w-md w-full space-y-6 p-8 rounded-2xl bg-[#13131a] border border-[#A033ED]/40 shadow-2xl relative overflow-hidden">
      
      <!-- Background Glow Effect -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#A033ED]/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Error Code Badge -->
      <div class="inline-flex items-center px-3 py-1 rounded-full bg-[#A033ED]/20 border border-[#A033ED]/40 text-purple-300 text-xs font-semibold uppercase tracking-wider">
        Error {{ error.statusCode }}
      </div>

      <!-- Heading & Description -->
      <div class="space-y-2">
        <h1 class="text-3xl font-extrabold tracking-tight text-white">
          {{ isNotFound ? 'Page Not Found 🌸' : 'Something Went Wrong' }}
        </h1>
        <p class="text-sm text-gray-400">
          {{ isNotFound ? "Oops! The page you're looking for doesn't exist or has been moved." : error.message || 'An unexpected error occurred on our end.' }}
        </p>
      </div>

      <!-- Action Button -->
      <div class="pt-2">
        <button 
          @click="handleError"
          class="w-full px-5 py-3 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold text-sm transition-all shadow-lg shadow-[#A033ED]/30 cursor-pointer"
        >
          Back to Home 🚪
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const isNotFound = computed(() => props.error?.statusCode === 404)

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>