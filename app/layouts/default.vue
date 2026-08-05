<template>
  <div class="min-h-screen flex flex-col justify-between text-gray-100">
    <!-- Header -->
    <header class="border-b border-[#A033ED]/40 bg-[#521369]/90 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Logo / Brand Name -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <img src="/logo.png" alt="LSG Logo" class="w-9 h-9 object-contain group-hover:scale-105 transition-transform" />
          <span class="font-bold tracking-wide text-xl text-white">Lyra Social Group</span>
        </NuxtLink>

        <!-- Navigation Links & Auth -->
        <div class="flex items-center space-x-8">
          <nav class="hidden md:flex items-center space-x-8 text-sm md:text-base font-medium">
            <NuxtLink to="/#team" class="text-gray-200 hover:text-white transition-colors">Team</NuxtLink>
            <NuxtLink to="/hiring" class="text-gray-200 hover:text-white transition-colors">We are Hiring</NuxtLink>
            <a href="https://legal.lyrasocialgroup.tech" target="_blank" class="text-gray-200 hover:text-white transition-colors">TOS</a>
          </nav>

          <!-- Auth Status Widget -->
          <ClientOnly>
            <UserAuthWidget />
          </ClientOnly>
        </div>
      </div>
    </header>

    <!-- Main Page Content -->
    <main class="flex-grow w-full mx-auto">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="border-t border-[#A033ED]/20 bg-[#13131a] py-8 text-center text-xs md:text-sm text-gray-400 space-y-2">
      <p class="font-medium text-white">Lyra Social Group</p>
      <p>© {{ new Date().getFullYear() }} Lyra Social Group. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// All layout-level routing and Kinde wrapper handles session states via components now.
</script>