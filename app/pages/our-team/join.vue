<template>
  <div class="max-w-xl mx-auto py-12 px-6">
    <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border space-y-6">
      <div class="space-y-2 text-center">
        <h1 class="text-2xl md:text-3xl font-bold text-white">Join the Team Roster</h1>
        <p class="text-gray-300 text-sm">
          Fill out your details below to add your profile to the Lyra Social Group team directory.
        </p>
      </div>

      <form @.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Display Name</label>
          <input 
            v-model="form.name" 
            type="text" 
            required 
            placeholder="e.g. Lyra" 
            class="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Role / Title</label>
          <input 
            v-model="form.role" 
            type="text" 
            required 
            placeholder="e.g. Creator & Streamer" 
            class="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Bio / Description</label>
          <textarea 
            v-model="form.bio" 
            rows="3" 
            required 
            placeholder="Tell everyone a bit about what you do..." 
            class="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm"
          ></textarea>
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Avatar Image URL</label>
          <input 
            v-model="form.avatarUrl" 
            type="url" 
            placeholder="https://example.com/avatar.png" 
            class="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Social Link (Website, Twitch, X, etc.)</label>
          <input 
            v-model="form.socialUrl" 
            type="url" 
            placeholder="https://twitch.tv/yourusername" 
            class="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm"
          />
        </div>

        <button 
          type="submit" 
          class="w-full py-3 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold text-sm transition-all shadow-lg shadow-[#A033ED]/30 cursor-pointer"
        >
          Submit Profile
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  role: '',
  bio: '',
  avatarUrl: '',
  socialUrl: ''
})

const handleSubmit = async () => {
  // Here you would post the form data to your backend API endpoint (e.g., /api/team-members)
  try {
    await $fetch('/api/team-members', {
      method: 'POST',
      body: form
    })
    alert('Profile submitted successfully!')
    navigateTo('/our-team')
  } catch (error) {
    console.error('Submission failed', error)
  }
}
</script>