<script setup>
// Using the default layout to utilize the global header and footer
useSeoMeta({
  title: 'Lyra\'s Cuck HQ | Lyra Social Group',
  description: 'The official home base and flagship hub for Lyra\'s Cuck HQ hosting services, community projects, and high-octane operations.',
  ogTitle: 'Lyra\'s Cuck HQ | Lyra Social Group',
  ogDescription: 'The official home base and flagship hub for Lyra\'s Cuck HQ hosting services, community projects, and high-octane operations.',
  ogImage: 'https://raw.githubusercontent.com/Lyra-Social-Group/lyra-Social-Group-Pictures/refs/heads/main/logos/ProGaming/progaming%20logo.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="space-y-20 py-12 flex flex-col justify-between">
    <div class="space-y-20">
      <!-- Hero Section -->
      <section class="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 class="text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Lyra's <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A033ED] to-purple-400">Cuck HQ</span>
        </h1>
        <p class="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
          The central command hub for all Lyra's Cuck HQ hosting services, gaming server operations, custom infrastructure projects, and absolute unbridled asphalt chaos under the Lyra Social Group umbrella.
        </p>
        <div class="flex justify-center pt-2">
          <a 
            href="https://discord.com/invite/S5NGNKajeP" 
            target="_blank"
            class="inline-block px-8 py-3 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold shadow-lg shadow-[#A033ED]/30 transition-all transform hover:-translate-y-0.5"
          >
            Join The Lyra's Cuck HQ Community Discord
          </a>
        </div>
      </section>

      <!-- Operations / Hub Grid -->
      <section class="max-w-7xl mx-auto px-4 space-y-12">
        <h2 class="text-3xl font-extrabold text-center text-white">Active Operations</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Hub Card 1: BeamMP -->
          <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-xl bg-[#A033ED]/10 flex items-center justify-center text-[#A033ED]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white">ProGaming BeamMP Server</h3>
              <p class="text-gray-300 text-sm leading-relaxed">
                High-performance vehicle physics simulation multiplayer server featuring 24/7 uptime, curated maps, custom car configurations, and clean community racing.
              </p>
            </div>
            <div>
              <NuxtLink 
                to="/lyrascuckhq/hosting/beammp" 
                class="inline-flex items-center gap-2 text-sm font-semibold text-[#A033ED] hover:text-purple-300 transition-colors"
              >
                Explore Server & Rules &rarr;
              </NuxtLink>
            </div>
          </div>

          <!-- Hub Card 2: Hosting Infrastructure -->
          <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-xl bg-[#A033ED]/10 flex items-center justify-center text-[#A033ED]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white">Lyra's Cuck HQ Hosting Services</h3>
              <p class="text-gray-300 text-sm leading-relaxed">
                Robust digital infrastructure, network routing safeguards, and managed community environments engineered under the Lyra Social Group framework.
              </p>
            </div>
            <div>
              <a 
                href="https://legal.lyrasocialgroup.tech" 
                target="_blank"
                class="inline-flex items-center gap-2 text-sm font-semibold text-[#A033ED] hover:text-purple-300 transition-colors"
              >
                Review Legal & Compliance &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Check Out The Community Section (Discord Widget) -->
      <section class="max-w-4xl mx-auto px-4">
        <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col items-center justify-center space-y-6 relative overflow-hidden text-center">
          <div class="absolute inset-0 bg-gradient-to-tr from-[#A033ED]/20 to-transparent pointer-events-none"></div>
          <div class="space-y-2 z-10">
            <h3 class="text-3xl font-extrabold text-white">Check out the community</h3>
            <p class="text-gray-300 text-sm max-w-xl mx-auto">Join our live Discord widget feed below and jump right into the action.</p>
          </div>
          <div class="w-full flex justify-center z-10 overflow-hidden rounded-xl border border-[#A033ED]/40 shadow-lg shadow-[#A033ED]/10">
            <iframe 
              src="https://discord.com/widget?id=1362587853409878076&theme=dark" 
              width="350" 
              height="400" 
              allowtransparency="true" 
              frameborder="0" 
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>