<template>
  <div class="min-h-screen flex flex-col justify-between text-gray-100 bg-[#0d0d12]">
    <!-- Header -->
    <header class="border-b border-[#A033ED]/40 bg-[#521369]/90 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Logo / Brand Name -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <img src="/logo.png" alt="LSG Logo" class="w-9 h-9 object-contain group-hover:scale-105 transition-transform" />
          <span class="font-bold tracking-wide text-xl text-white">Lyra Social Group</span>
        </NuxtLink>

        <!-- Navigation Links -->
        <div class="flex items-center space-x-8">
          <nav class="hidden md:flex items-center space-x-8 text-sm md:text-base font-medium">
            <NuxtLink to="/our-team" class="text-gray-200 hover:text-white transition-colors">Team</NuxtLink>
            <NuxtLink to="/jobs" class="text-gray-200 hover:text-white transition-colors">Jobs at Lyra Social Group</NuxtLink>
            
            <!-- Lyra's Cuck HQ Dropdown -->
            <div class="relative group">
              <button class="flex items-center gap-1 text-gray-200 hover:text-white transition-colors py-2 cursor-pointer">
                Lyra Cuck HQ
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <!-- Dropdown Menu -->
              <div class="absolute left-0 mt-0 w-64 rounded-xl bg-[#13131a] border border-[#A033ED]/40 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                <NuxtLink to="/lyrascuckhq" class="block px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-[#A033ED]/20 transition-colors">
                  Home
                </NuxtLink>
                
                <div class="border-t border-[#A033ED]/20 my-1"></div>
                
                <NuxtLink to="/lyrascuckhq/hosting" class="block px-4 py-2.5 text-sm font-semibold text-purple-400 hover:text-white hover:bg-[#A033ED]/20 transition-colors">
                  Lyra's Cuck HQ Hosting Services
                </NuxtLink>

                <!-- Pro Gaming Server Dropdown (Nested Submenu) -->
                <div class="relative group/sub">
                  <div class="flex items-center justify-between px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-[#A033ED]/20 transition-colors cursor-pointer">
                    <span>Pro Gaming Server</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <!-- Submenu for Pro Gaming Server -->
                  <div class="absolute left-full top-0 ml-1 w-56 rounded-xl bg-[#13131a] border border-[#A033ED]/40 shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 py-2 z-50">
                    <NuxtLink to="/lyrascuckhq/hosting/beammp" class="block px-4 py-2 text-sm text-gray-200 hover:text-white hover:bg-[#A033ED]/20 transition-colors">
                      Overview (BeamMP)
                    </NuxtLink>

                    <!-- Races Dropdown (Nested Further) -->
                    <div class="relative group/races">
                      <div class="flex items-center justify-between px-4 py-2 text-sm text-gray-200 hover:text-white hover:bg-[#A033ED]/20 transition-colors cursor-pointer">
                        <span>Races</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      <!-- Submenu for Races -->
                      <div class="absolute left-full top-0 ml-1 w-48 rounded-xl bg-[#13131a] border border-[#A033ED]/40 shadow-xl opacity-0 invisible group-hover/races:opacity-100 group-hover/races:visible transition-all duration-200 py-2 z-50">
                        <NuxtLink to="/lyrascuckhq/hosting/ProGamingServer/races/2026" class="block px-4 py-2 text-sm text-gray-200 hover:text-white hover:bg-[#A033ED]/20 transition-colors">
                          2026
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <a href="https://legal.lyrasocialgroup.tech" target="_blank" class="text-gray-200 hover:text-white transition-colors">TOS</a>
          </nav>

          <!-- Authentication Profile / Login Action -->
          <div class="flex items-center">
            <template v-if="user">
              <!-- Logged In Avatar Dropdown -->
              <div class="relative group">
                <button class="flex items-center gap-2 py-1 px-2 rounded-xl hover:bg-[#A033ED]/20 transition-all cursor-pointer">
                  <!-- Conditional Image vs Letter Initial Avatar -->
                  <img 
                    v-if="userAvatar" 
                    :src="userAvatar" 
                    alt="Profile Avatar" 
                    class="w-10 h-10 rounded-full object-cover border-2 border-[#A033ED]" 
                  />
                  <div 
                    v-else 
                    class="w-10 h-10 rounded-full bg-[#A033ED]/30 border-2 border-[#A033ED] flex items-center justify-center text-white font-bold text-base"
                  >
                    {{ userInitial }}
                  </div>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-300 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <!-- Profile Dropdown Menu -->
                <div class="absolute right-0 mt-0 w-48 rounded-xl bg-[#13131a] border border-[#A033ED]/40 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                  <NuxtLink to="/accounts" class="block px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-[#A033ED]/20 transition-colors">
                    Dashboard
                  </NuxtLink>
                  <NuxtLink to="/accounts/settings" class="block px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-[#A033ED]/20 transition-colors">
                    Account Settings
                  </NuxtLink>
                  <div class="border-t border-[#A033ED]/20 my-1"></div>
                  <button @click="handleLogout" class="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors cursor-pointer">
                    Logout
                  </button>
                </div>
              </div>
            </template>
            <template v-else>
              <!-- Logged Out Login Button -->
              <NuxtLink 
                to="/accounts/login" 
                class="px-5 py-2.5 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold text-sm transition-all shadow-lg shadow-[#A033ED]/30"
              >
                Login
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Page Content -->
    <main class="flex-grow w-full">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-[#A033ED]/20 bg-[#13131a] py-10 px-6 md:px-12">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-start gap-10">
        
        <!-- Left Side: Quick Nav & Socials -->
        <div class="flex flex-col md:flex-row gap-12">
          <!-- Quick Navigation Column -->
          <div class="flex flex-col space-y-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-purple-400">Quick Navigation</span>
            <div class="flex flex-col space-y-2 text-sm">
              <NuxtLink to="/" class="text-gray-300 hover:text-[#A033ED] transition-colors">Home</NuxtLink>
              <NuxtLink to="/community" class="text-gray-300 hover:text-[#A033ED] transition-colors">Community</NuxtLink>
              <NuxtLink to="/our-team" class="text-gray-300 hover:text-[#A033ED] transition-colors">Team</NuxtLink>
              <NuxtLink to="/jobs" class="text-gray-300 hover:text-[#A033ED] transition-colors">Jobs at Lyra Social Group</NuxtLink>
              <NuxtLink to="/lyrascuckhq" class="text-gray-300 hover:text-[#A033ED] transition-colors">Lyra's Cuck HQ</NuxtLink>
            </div>
          </div>

          <!-- Social Media Column -->
          <div class="flex flex-col space-y-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-purple-400">Connect With Us</span>
            <div class="flex flex-col space-y-2 text-sm">
              <a href="https://www.youtube.com/@LyraSocialGroup" target="_blank" class="text-gray-300 hover:text-[#A033ED] transition-colors">YouTube</a>
              <a href="https://www.instagram.com/lyrasocialgroup" target="_blank" class="text-gray-300 hover:text-[#A033ED] transition-colors">Instagram</a>
              <a href="https://x.com/lyrasocialgroup" target="_blank" class="text-gray-300 hover:text-[#A033ED] transition-colors">X (Twitter)</a>
              <a href="https://www.twitch.tv/lyrasocialgroup" target="_blank" class="text-gray-300 hover:text-[#A033ED] transition-colors">Twitch</a>
            </div>
          </div>
        </div>

        <!-- Right Side: Status Badge, Back to Top, TOS Button & Copyright -->
        <div class="flex flex-col items-start md:items-end space-y-4 text-xs md:text-sm text-gray-400 w-full md:w-auto">
          <div class="flex flex-wrap items-center gap-3">
            <!-- Back to Top Button -->
            <button 
              @click="scrollToTop" 
              class="px-4 py-2 rounded-xl bg-[#13131a] border border-[#A033ED]/40 text-gray-300 hover:bg-[#A033ED]/20 hover:text-white transition-all font-semibold uppercase tracking-wider text-xs flex items-center gap-2 cursor-pointer"
            >
              <span>Back to Top</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
              </svg>
            </button>

            <!-- TOS Button -->
            <a 
              href="https://legal.lyrasocialgroup.tech" 
              target="_blank" 
              class="px-4 py-2 rounded-xl bg-[#A033ED]/10 border border-[#A033ED]/40 text-purple-300 hover:bg-[#A033ED] hover:text-white transition-all font-semibold uppercase tracking-wider text-xs"
            >
              Terms of Service (TOS)
            </a>
          </div>

          <!-- Status Badge Embed -->
          <div class="overflow-hidden rounded-lg border border-[#A033ED]/20">
            <iframe 
              src="https://status.lyrasocialgroup.tech/badge" 
              width="250" 
              height="30" 
              frameborder="0" 
              scrolling="no" 
              style="color-scheme: normal; background: transparent;"
            ></iframe>
          </div>

          <div class="space-y-1 text-left md:text-right pt-2">
            <p class="font-medium text-white">Lyra Social Group</p>
            <p>© {{ new Date().getFullYear() }} Lyra Social Group and Lyra's Cuck HQ All rights reserved.</p>
            <p>Lyra's Cuck HQ is a registered trademark of Lyra Social Group</p>
          </div>
        </div>

      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Inject the official Cloudflare Turnstile script globally
useHead({
  script: [
    {
      src: 'https://challenges.cloudflare.com/turnstile/v0/api.js',
      async: true,
      defer: true
    }
  ]
})

const client = useSupabaseClient()
const user = useSupabaseUser()
const profile = ref(null)

const fetchProfile = async () => {
  if (!user.value?.id) {
    profile.value = null
    return
  }
  
  const { data, error } = await client
    .from('profiles')
    .select('display_name, avatar_url')
    .eq('id', user.value.id)
    .maybeSingle()
    
  if (data) {
    profile.value = data
  } else if (error) {
    console.error("Error fetching profile:", error.message)
  }
}

onMounted(() => {
  fetchProfile()
})

const userAvatar = computed(() => {
  return profile.value?.avatar_url || 
         user.value?.user_metadata?.avatar_url || 
         user.value?.user_metadata?.picture || 
         null
})

const userInitial = computed(() => {
  const name = profile.value?.display_name || 
               user.value?.user_metadata?.full_name || 
               user.value?.email || 
               'U'
  return name.charAt(0).toUpperCase()
})

const handleLogout = async () => {
  await client.auth.signOut()
  profile.value = null
  navigateTo('/')
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>