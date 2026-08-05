<template>
  <div class="max-w-4xl mx-auto py-16 px-6">
    <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border space-y-6">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-800 pb-6 gap-4">
        <div class="flex items-center space-x-4">
          <div class="w-16 h-16 rounded-full bg-[#A033ED]/30 border-2 border-[#A033ED] flex items-center justify-center text-white font-bold text-2xl">
            {{ userInitial }}
          </div>
          <div>
            <h1 class="text-2xl font-bold text-white">{{ profile?.display_name || 'Community Member' }}</h1>
            <p class="text-gray-400 text-sm">{{ user?.email }}</p>
          </div>
        </div>
        
        <NuxtLink 
          to="/accounts/settings" 
          class="px-5 py-2.5 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#A033ED]/30"
        >
          Account Settings
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <!-- Bio Card -->
        <div class="p-6 rounded-xl bg-[#0d0d12] border border-[#A033ED]/20 space-y-2">
          <h2 class="text-xs font-semibold uppercase tracking-wider text-purple-400">Bio</h2>
          <p class="text-gray-300 text-sm italic">
            {{ profile?.bio || 'No bio provided yet. Head over to settings to tell the community about yourself!' }}
          </p>
        </div>

        <!-- Quick Links Card -->
        <div class="p-6 rounded-xl bg-[#0d0d12] border border-[#A033ED]/20 space-y-3">
          <h2 class="text-xs font-semibold uppercase tracking-wider text-purple-400">Quick Actions</h2>
          <div class="flex flex-col space-y-2 text-sm">
            <NuxtLink to="/accounts/settings" class="text-gray-300 hover:text-[#A033ED] transition-colors flex items-center justify-between">
              <span>Edit Display Name & Bio</span>
              <span class="text-purple-400">→</span>
            </NuxtLink>
            <NuxtLink to="/accounts/settings" class="text-gray-300 hover:text-[#A033ED] transition-colors flex items-center justify-between">
              <span>Change Password</span>
              <span class="text-purple-400">→</span>
            </NuxtLink>
            <NuxtLink to="/accounts/settings" class="text-gray-300 hover:text-[#A033ED] transition-colors flex items-center justify-between">
              <span>Manage Connected Accounts</span>
              <span class="text-purple-400">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const client = useSupabaseClient()
const user = useSupabaseUser()
const profile = ref(null)

const fetchProfile = async () => {
  if (!user.value) return
  const { data } = await client
    .from('profiles')
    .select('display_name, bio')
    .eq('id', user.value.id)
    .single()
    
  if (data) {
    profile.value = data
  }
}

onMounted(() => {
  fetchProfile()
})

const userInitial = computed(() => {
  const name = profile.value?.display_name || user.value?.email || 'U'
  return name.charAt(0).toUpperCase()
})
</script>