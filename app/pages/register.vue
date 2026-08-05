<script setup>
const { loggedIn } = useAuth()
const router = useRouter()

onMounted(() => {
  if (loggedIn.value) {
    router.push('/account')
  }
})
</script>

<template>
  <div class="max-w-md mx-auto mt-16 p-8 bg-[#13131a] border border-[#A033ED]/30 rounded-2xl shadow-xl text-center space-y-6">
    <div>
      <h1 class="text-2xl font-bold text-white mb-2">Create an Account</h1>
      <p class="text-xs text-gray-400">Join Lyra Social Group securely via Kinde</p>
    </div>

    <div class="space-y-4 pt-4">
      <a 
        href="/api/register" 
        class="w-full flex items-center justify-center space-x-3 py-3 px-4 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold text-sm transition-all shadow-lg shadow-[#A033ED]/30 inline-block"
      >
        Continue to Registration
      </a>
    </div>

    <div class="pt-4 border-t border-gray-800 text-xs text-gray-400">
      Already have an account? 
      <NuxtLink to="/login" class="text-[#A033ED] font-semibold hover:underline ml-1">Sign in</NuxtLink>
    </div>
  </div>
</template>