<template>
  <div class="max-w-6xl mx-auto space-y-12 py-12 px-6">
    <!-- Header Section -->
    <section class="text-center space-y-4">
      <h1 class="text-3xl md:text-5xl font-extrabold text-white">
        LSG <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A033ED] to-purple-400">Community Hub</span>
      </h1>
      <p class="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Welcome to the central station for community discussions, member updates, and digital hangouts.
      </p>
    </section>

    <!-- Main Community Content Area -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left / Main Feed Column -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Create Post Card (For Logged-in Users) -->
        <div class="p-6 rounded-2xl bg-[#13131a] lsg-glow-border space-y-4">
          <h2 class="text-lg font-bold text-white">Share with the Community</h2>
          <textarea 
            rows="3" 
            placeholder="What's on your mind, traveler?" 
            class="w-full px-4 py-3 rounded-xl bg-[#0d0d12] border border-[#A033ED]/40 text-white focus:outline-none focus:border-[#A033ED] text-sm resize-none"
          ></textarea>
          <div class="flex justify-end">
            <button class="px-6 py-2 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#A033ED]/20 cursor-pointer">
              Post Update
            </button>
          </div>
        </div>

        <!-- Feed Stream -->
        <div class="space-y-4">
          <!-- Sample Post Item -->
          <div class="p-6 rounded-2xl bg-[#13131a] lsg-glow-border space-y-3">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-[#A033ED]/20 border border-[#A033ED]/40 flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Avatar" class="w-full h-full object-cover" />
              </div>
              <div>
                <h3 class="text-sm font-bold text-white">Lyra</h3>
                <span class="text-xs text-gray-400">Admin • Just now</span>
              </div>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed">
              Welcome everyone to the new community portal! Glad to see everyone getting settled in. Drop a line and say hello!
            </p>
          </div>
        </div>
      </div>

      <!-- Right Sidebar: Quick Links / Rules -->
      <div class="space-y-6">
        <div class="p-6 rounded-2xl bg-[#13131a] lsg-glow-border space-y-4">
          <h2 class="text-base font-bold text-white text-purple-400 uppercase tracking-wider text-xs">Community Guidelines</h2>
          <ul class="text-sm text-gray-300 space-y-2 list-disc list-inside">
            <li class="leading-relaxed">Be respectful to fellow members.</li>
            <li class="leading-relaxed">Keep discussions aligned with our safe space ethos.</li>
            <li class="leading-relaxed">Have fun and explore!</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Community logic and authentication hooks can go here
</script>