<script setup>
const { user, loggedIn } = useAuth()
</script>

<template>
  <div class="flex items-center space-x-4 border-l border-[#A033ED]/40 pl-6">
    <template v-if="loggedIn && user">
      <div class="flex flex-col text-right hidden sm:block">
        <span class="text-xs text-gray-300">Logged in as</span>
        <span class="text-xs font-semibold text-white">{{ user.email }}</span>
      </div>
      <a 
        href="/api/logout" 
        class="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-semibold transition-colors inline-block"
      >
        Sign Out
      </a>
    </template>
    <template v-else>
      <a 
        href="/api/login" 
        class="px-4 py-2 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white text-xs font-semibold shadow-md shadow-[#A033ED]/30 transition-all inline-block"
      >
        Sign In
      </a>
    </template>
  </div>
</template>