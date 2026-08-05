<template>
  <div class="min-h-screen flex items-center justify-center bg-[#0d0d12] px-4 py-12">
    <div class="max-w-md w-full space-y-8 bg-[#13131a] p-8 rounded-2xl border border-[#A033ED]/40 shadow-2xl">
      <!-- Header -->
      <div class="text-center space-y-2">
        <NuxtLink to="/" class="inline-block">
          <img src="/logo.png" alt="LSG Logo" class="w-12 h-12 mx-auto object-contain hover:scale-105 transition-transform" />
        </NuxtLink>
        <h2 class="text-2xl font-bold tracking-tight text-white">Create an Account</h2>
        <p class="text-sm text-gray-400">Join Lyra Social Group today</p>
      </div>

      <!-- Error Message Banner -->
      <div v-if="errorMessage" class="p-3 bg-red-500/10 border border-red-500/40 text-red-400 rounded-xl text-sm text-center">
        {{ errorMessage }}
      </div>

      <!-- Success Message Banner -->
      <div v-if="successMessage" class="p-3 bg-green-500/10 border border-green-500/40 text-green-400 rounded-xl text-sm text-center">
        {{ successMessage }}
      </div>

      <!-- Email / Password Registration Form -->
      <form class="space-y-4" @submit.prevent="handleEmailRegister" id="register-form">
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Display Name</label>
          <input 
            v-model="displayName" 
            type="text" 
            required 
            placeholder="Lyra Foxwood"
            class="w-full bg-[#0d0d12] border border-[#A033ED]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#A033ED] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Email Address</label>
          <input 
            v-model="email" 
            type="email" 
            required 
            placeholder="you@example.com"
            class="w-full bg-[#0d0d12] border border-[#A033ED]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#A033ED] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Password</label>
          <input 
            v-model="password" 
            type="password" 
            required 
            placeholder="••••••••"
            class="w-full bg-[#0d0d12] border border-[#A033ED]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#A033ED] focus:outline-none transition-colors"
          />
        </div>

        <!-- Cloudflare Turnstile Widget -->
        <div class="flex justify-center py-2">
          <div class="cf-turnstile" data-sitekey="0x4AAAAAAEHYaFpO29_u7fAt" data-action="turnstile-spin-v2"></div>
        </div>

        <button 
          type="submit" 
          :disabled="loading"
          class="w-full py-3 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold text-sm transition-all shadow-lg shadow-[#A033ED]/30 cursor-pointer disabled:opacity-50"
        >
          {{ loading ? 'Creating account...' : 'Sign Up with Email' }}
        </button>
      </form>

      <div class="relative flex py-2 items-center">
        <div class="flex-grow border-t border-[#A033ED]/20"></div>
        <span class="flex-shrink mx-4 text-xs uppercase text-gray-500 tracking-wider">Or register with</span>
        <div class="flex-grow border-t border-[#A033ED]/20"></div>
      </div>

      <!-- Social SSO Grid -->
      <div class="grid grid-cols-2 gap-3">
        <!-- Discord -->
        <button 
          @click="handleSocialLogin('discord')"
          type="button"
          class="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1A102F] border border-[#A033ED]/30 text-sm font-medium text-gray-200 transition-all cursor-pointer"
        >
          <span>Discord</span>
        </button>

        <!-- Google -->
        <button 
          @click="handleSocialLogin('google')"
          type="button"
          class="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1A102F] border border-[#A033ED]/30 text-sm font-medium text-gray-200 transition-all cursor-pointer"
        >
          <span>Google</span>
        </button>

        <!-- Twitter / X -->
        <button 
          @click="handleSocialLogin('twitter')"
          type="button"
          class="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1A102F] border border-[#A033ED]/30 text-sm font-medium text-gray-200 transition-all cursor-pointer"
        >
          <span>Twitter / X</span>
        </button>

        <!-- Twitch -->
        <button 
          @click="handleSocialLogin('twitch')"
          type="button"
          class="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1A102F] border border-[#A033ED]/30 text-sm font-medium text-gray-200 transition-all cursor-pointer"
        >
          <span>Twitch</span>
        </button>
      </div>

      <!-- Spotify (Full Width) -->
      <button 
        @click="handleSocialLogin('spotify')"
        type="button"
        class="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1A102F] border border-[#A033ED]/30 text-sm font-medium text-gray-200 transition-all cursor-pointer"
      >
        <span>Spotify</span>
      </button>

      <!-- Footer Help -->
      <div class="text-center text-xs text-gray-500 pt-2">
        Already have an account? 
        <NuxtLink to="/accounts/login" class="text-purple-400 hover:underline">Sign in</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

definePageMeta({
  layout: 'default'
})

const client = useSupabaseClient()
const displayName = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

onMounted(() => {
  // Ensure single-use Turnstile tokens reset properly on form submissions/retries
  const form = document.getElementById('register-form')
  if (form) {
    form.addEventListener('submit', () => {
      setTimeout(() => window.turnstile?.reset(), 0)
    })
  }
})

const handleEmailRegister = async () => {
  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  const turnstileResponseInput = document.querySelector('[name="cf-turnstile-response"]')
  const turnstileToken = turnstileResponseInput ? turnstileResponseInput.value : ''

  if (!turnstileToken) {
    errorMessage.value = 'Please complete the Turnstile bot verification.'
    loading.value = false
    return
  }

  const { data, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        display_name: displayName.value,
      },
      emailRedirectTo: `${window.location.origin}/accounts`
    }
  })

  if (error) {
    errorMessage.value = error.message
    loading.value = false
    window.turnstile?.reset()
  } else {
    // If email confirmation is required by Supabase settings, data.user might exist but session is null
    if (data?.session) {
      navigateTo('/accounts')
    } else {
      successMessage.value = 'Registration successful! Please check your email to confirm your account.'
      loading.value = false
    }
  }
}

const handleSocialLogin = async (provider) => {
  const { error } = await client.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: `${window.location.origin}/accounts`
    }
  })

  if (error) {
    errorMessage.value = error.message
  }
}
</script>