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

      <!-- Social & Enterprise SSO Grid -->
      <div class="grid grid-cols-2 gap-3">
        <!-- Discord -->
        <button 
          @click="handleSocialLogin('discord')"
          type="button"
          class="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1A102F] border border-[#A033ED]/30 text-sm font-medium text-gray-200 transition-all cursor-pointer"
        >
          <svg class="w-4 h-4 fill-current text-indigo-400" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
          <span>Discord</span>
        </button>

        <!-- Google -->
        <button 
          @click="handleSocialLogin('google')"
          type="button"
          class="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1A102F] border border-[#A033ED]/30 text-sm font-medium text-gray-200 transition-all cursor-pointer"
        >
          <svg class="w-4 h-4 fill-current text-red-400" viewBox="0 0 24 24">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
          </svg>
          <span>Google</span>
        </button>

        <!-- Twitter / X -->
        <button 
          @click="handleSocialLogin('x')"
          type="button"
          class="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1A102F] border border-[#A033ED]/30 text-sm font-medium text-gray-200 transition-all cursor-pointer"
        >
          <svg class="w-4 h-4 fill-current text-gray-300" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span>Twitter / X</span>
        </button>

        <!-- Twitch -->
        <button 
          @click="handleSocialLogin('twitch')"
          type="button"
          class="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1A102F] border border-[#A033ED]/30 text-sm font-medium text-gray-200 transition-all cursor-pointer"
        >
          <svg class="w-4 h-4 fill-current text-purple-400" viewBox="0 0 24 24">
            <path d="M11.571 4.714h1.715v5.143H11.57zm4.714 0H18v5.143h-1.715zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
          </svg>
          <span>Twitch</span>
        </button>

        <!-- GitHub -->
        <button 
          @click="handleSocialLogin('github')"
          type="button"
          class="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1A102F] border border-[#A033ED]/30 text-sm font-medium text-gray-200 transition-all cursor-pointer"
        >
          <svg class="w-4 h-4 fill-current text-gray-100" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </button>

        <!-- Zoom -->
        <button 
          @click="handleSocialLogin('zoom')"
          type="button"
          class="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1A102F] border border-[#A033ED]/30 text-sm font-medium text-gray-200 transition-all cursor-pointer"
        >
          <svg class="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
            <path d="M4.8 5.4h9.6a2.4 2.4 0 012.4 2.4v8.4a2.4 2.4 0 01-2.4 2.4H4.8A2.4 2.4 0 012.4 16.2V7.8a2.4 2.4 0 012.4-2.4zm13.2 2.8l3.6-2.4v12.4l-3.6-2.4V8.2z"/>
          </svg>
          <span>Zoom</span>
        </button>
      </div>

      <!-- Full Width Stack for WorkOS, Spotify & Web3 -->
      <div class="space-y-3 pt-1">
        <!-- WorkOS (Enterprise SSO) -->
        <button 
          @click="handleSocialLogin('workos')"
          type="button"
          class="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1A102F] border border-[#A033ED]/30 text-sm font-medium text-gray-200 transition-all cursor-pointer"
        >
          <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span>WorkOS Enterprise SSO</span>
        </button>

        <!-- Spotify -->
        <button 
          @click="handleSocialLogin('spotify')"
          type="button"
          class="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-[#0d0d12] hover:bg-[#1A102F] border border-[#A033ED]/30 text-sm font-medium text-gray-200 transition-all cursor-pointer"
        >
          <svg class="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.72.48-1.079.24-2.999-1.8-6.719-2.219-11.12-1.2-.419.12-.84-.12-.96-.539-.12-.42.12-.84.54-.96 4.8-1.14 8.94-.66 12.36 1.56.36.24.48.72.26 1.08zm1.44-3.84c-.36.54-1.08.72-1.62.36-3.42-2.1-8.64-2.7-12.66-1.44-.6.18-1.2-.18-1.38-.78-.18-.6.18-1.2.78-1.38 4.62-1.44 10.38-.78 14.46 1.62.54.36.72 1.08.36 1.62zm.12-4.02C13.56 7.2 7.86 7.02 4.26 8.1c-.72.24-1.5-.18-1.74-.9-.24-.72.18-1.5.9-1.74 4.32-1.32 10.62-1.14 15.36 1.68.66.36.9 1.2.54 1.86-.36.66-1.2.9-1.86.54z"/>
          </svg>
          <span>Spotify</span>
        </button>

        <!-- Web3 Wallet -->
        <button 
          @click="handleWeb3Register"
          type="button"
          class="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-[#1d1535] hover:bg-[#2A1B4E] border border-[#A033ED]/50 text-purple-200 font-semibold text-sm transition-all cursor-pointer"
        >
          <svg class="w-4 h-4 text-[#A033ED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <span>Sign Up with Web3 Wallet</span>
        </button>
      </div>

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
      captchaToken: turnstileToken,
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

const handleWeb3Register = async () => {
  errorMessage.value = ''
  try {
    if (!window.ethereum) {
      throw new Error('No Web3 wallet detected. Please install MetaMask or a compatible provider.')
    }
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    if (!accounts || accounts.length === 0) return

    navigateTo('/accounts')
  } catch (err) {
    errorMessage.value = err.message || 'Web3 registration failed.'
  }
}
</script>