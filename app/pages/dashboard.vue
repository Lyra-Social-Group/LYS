<script setup>
import { ref, onMounted } from 'vue'

const { user, loggedIn } = useAuth()
const router = useRouter()

const loading = ref(true)
const saving = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// Form states for profile and custom community platforms
const displayName = ref('')
const avatarUrl = ref('')
const socialLinks = ref({
  vrcName: '',
  discordTag: '',
  twitch: '',
  twitter: '',
  bluesky: ''
})

onMounted(async () => {
  // Manual client-side guard replacing router middleware string
  if (!loggedIn.value) {
    router.push('/api/login')
    return
  }

  if (user.value) {
    displayName.value = user.value.given_name || user.value.family_name ? `${user.value.given_name || ''} ${user.value.family_name || ''}`.trim() : (user.value.email || '')
    avatarUrl.value = user.value.picture || ''

    try {
      const response = await $fetch('/api/user/profile', { method: 'GET' }).catch(() => null)
      if (response?.socialLinks) {
        socialLinks.value = { ...response.socialLinks }
      }
    } catch (err) {
      console.error('Error fetching extended profile metadata:', err)
    } finally {
      loading.value = false
    }
  } else {
    loading.value = false
  }
})

// Handle saving profile and social links to your backend/database
const handleUpdateProfile = async () => {
  try {
    errorMessage.value = ''
    successMessage.value = ''
    saving.value = true

    await $fetch('/api/user/profile', {
      method: 'POST',
      body: {
        displayName: displayName.value,
        avatarUrl: avatarUrl.value,
        socialLinks: socialLinks.value
      }
    })

    successMessage.value = 'All changes saved successfully!'
  } catch (error) {
    errorMessage.value = error.data?.message || error.message || 'Failed to update profile.'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div class="max-w-3xl mx-auto my-16 p-8 bg-[#13131a] border border-[#A033ED]/30 rounded-2xl shadow-xl space-y-8 text-gray-100">
    <div v-if="loading" class="text-center py-12 text-gray-400">
      Loading account hub...
    </div>

    <div v-else-if="loggedIn && user" class="space-y-8">
      <!-- Header -->
      <div class="flex items-center space-x-6 pb-6 border-b border-gray-800">
        <div class="relative group">
          <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-[#A033ED] bg-[#A033ED]/20 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-[#A033ED]/20">
            <img v-if="avatarUrl || user.picture" :src="avatarUrl || user.picture" alt="Avatar" class="w-full h-full object-cover" />
            <span v-else>{{ (user.email || 'U').charAt(0).toUpperCase() }}</span>
          </div>
        </div>

        <div>
          <h1 class="text-2xl font-bold text-white">{{ displayName || user.email }}</h1>
          <p class="text-xs text-gray-400">{{ user.email }}</p>
          <span class="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-[#A033ED]/10 border border-[#A033ED]/30 text-[#A033ED] text-[10px] font-medium">
            Community Member Hub
          </span>
        </div>
      </div>

      <div v-if="errorMessage" class="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg">
        {{ errorMessage }}
      </div>

      <div v-if="successMessage" class="p-3 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-lg">
        {{ successMessage }}
      </div>

      <!-- Main Config Form -->
      <form @submit.prevent="handleUpdateProfile" class="space-y-6">
        <!-- Profile Section -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Profile & Identity</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-medium text-gray-300 mb-1">Display Name</label>
              <input v-model="displayName" type="text" class="w-full px-3 py-2 bg-black/40 border border-[#A033ED]/30 rounded-lg text-white text-sm focus:outline-none focus:border-[#A033ED]" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-300 mb-1">Profile Picture URL</label>
              <input v-model="avatarUrl" type="url" placeholder="https://..." class="w-full px-3 py-2 bg-black/40 border border-[#A033ED]/30 rounded-lg text-white text-sm focus:outline-none focus:border-[#A033ED]" />
            </div>
          </div>
        </div>

        <!-- Social Links Hub -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Social Media & Platform Links</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-medium text-gray-300 mb-1">VRChat Username</label>
              <input v-model="socialLinks.vrcName" type="text" placeholder="e.g. LyraFox" class="w-full px-3 py-2 bg-black/40 border border-[#A033ED]/30 rounded-lg text-white text-sm focus:outline-none focus:border-[#A033ED]" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-300 mb-1">Discord Handle</label>
              <input v-model="socialLinks.discordTag" type="text" placeholder="e.g. lyrafox" class="w-full px-3 py-2 bg-black/40 border border-[#A033ED]/30 rounded-lg text-white text-sm focus:outline-none focus:border-[#A033ED]" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-300 mb-1">Twitch Channel URL</label>
              <div class="flex rounded-lg bg-black/40 border border-[#A033ED]/30 overflow-hidden focus-within:border-[#A033ED]">
                <span class="bg-black/60 px-3 py-2 text-gray-500 text-xs flex items-center border-r border-gray-800">twitch.tv/</span>
                <input v-model="socialLinks.twitch" type="text" placeholder="username" class="w-full bg-transparent px-3 py-2 text-white text-sm focus:outline-none" />
              </div>
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-300 mb-1">X (Twitter) Profile</label>
              <div class="flex rounded-lg bg-black/40 border border-[#A033ED]/30 overflow-hidden focus-within:border-[#A033ED]">
                <span class="bg-black/60 px-3 py-2 text-gray-500 text-xs flex items-center border-r border-gray-800">x.com/</span>
                <input v-model="socialLinks.twitter" type="text" placeholder="username" class="w-full bg-transparent px-3 py-2 text-white text-sm focus:outline-none" />
              </div>
            </div>
          </div>
        </div>

        <!-- Connected Providers & Security Hub (Managed via Kinde) -->
        <div class="space-y-4 pt-2">
          <h2 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Connected Providers & Security</h2>
          <div class="flex items-center justify-between p-4 bg-black/20 border border-gray-800 rounded-xl">
            <div>
              <p class="text-white text-sm font-medium">Identity Providers & Password Settings</p>
              <p class="text-xs text-gray-400">Link/unlink Google, Apple, Discord, Twitch, X, or update your password securely.</p>
            </div>
            <a 
              href="/api/login" 
              class="px-4 py-2 rounded-lg bg-[#A033ED] hover:bg-[#8e2cd4] text-white text-xs font-semibold transition-all shadow-md shadow-[#A033ED]/30 whitespace-nowrap ml-4 inline-block"
            >
              Manage Security
            </a>
          </div>
        </div>

        <button 
          type="submit" 
          :disabled="saving"
          class="w-full py-3 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold text-sm transition-all shadow-lg shadow-[#A033ED]/30 disabled:opacity-50"
        >
          {{ saving ? 'Saving All Changes...' : 'Save All Changes' }}
        </button>
      </form>

      <!-- Footer Actions -->
      <div class="pt-6 border-t border-gray-800 flex justify-between items-center">
        <NuxtLink to="/" class="text-xs text-[#A033ED] hover:underline">← Back to Home</NuxtLink>
        <a 
          href="/api/logout" 
          class="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-semibold border border-red-500/30 transition-all inline-block"
        >
          Sign Out
        </a>
      </div>
    </div>
  </div>
</template>