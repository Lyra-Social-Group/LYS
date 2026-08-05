<script setup>
// Using the default layout to utilize the global header and footer
useSeoMeta({
  title: 'Hosting Services | Lyra\'s Cuck HQ',
  description: 'Explore high-performance game servers, custom network hosting, and dedicated digital infrastructure powered by Lyra\'s Cuck HQ and Lyra Social Group.',
  ogTitle: 'Hosting Services | Lyra\'s Cuck HQ',
  ogDescription: 'Explore high-performance game servers, custom network hosting, and dedicated digital infrastructure powered by Lyra\'s Cuck HQ and Lyra Social Group.',
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
          Lyra's Cuck HQ <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A033ED] to-purple-400">Hosting Services</span>
        </h1>
        <p class="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
          Robust digital infrastructure, dedicated gaming server operations, and high-performance network routing engineered for absolute reliability under the Lyra Social Group framework.
        </p>
        <div class="flex flex-wrap justify-center gap-4 pt-2">
          <NuxtLink 
            to="/lyrascuckhq/hosting/beammp" 
            class="inline-block px-8 py-3 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold shadow-lg shadow-[#A033ED]/30 transition-all transform hover:-translate-y-0.5"
          >
            View ProGaming BeamMP Server
          </NuxtLink>
        </div>
      </section>

      <!-- Active Hosting Operations Grid -->
      <section class="max-w-7xl mx-auto px-4 space-y-12">
        <h2 class="text-3xl font-extrabold text-center text-white">Active Hosting Operations</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Hosting Card 1: BeamMP -->
          <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-xl bg-[#A033ED]/10 flex items-center justify-center text-[#A033ED]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white">ProGaming BeamMP Server</h3>
              <p class="text-gray-300 text-sm leading-relaxed">
                Our flagship vehicle simulation multiplayer environment featuring 24/7 dedicated uptime, custom mod support, and seamless multiplayer sync.
              </p>
            </div>
            <div>
              <NuxtLink 
                to="/lyrascuckhq/hosting/beammp" 
                class="inline-flex items-center gap-2 text-sm font-semibold text-[#A033ED] hover:text-purple-300 transition-colors"
              >
                Access Server Details & Rules &rarr;
              </NuxtLink>
            </div>
          </div>

          <!-- Hosting Card 2: Infrastructure & Compliance -->
          <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-xl bg-[#A033ED]/10 flex items-center justify-center text-[#A033ED]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white">Network Security & Compliance</h3>
              <p class="text-gray-300 text-sm leading-relaxed">
                All managed hosting operations comply fully with Lyra Social Group standards, terms of service, and dedicated network routing frameworks.
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
    </div>
  </div>
</template>