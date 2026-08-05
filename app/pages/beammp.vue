<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'minimal'
})

useSeoMeta({
  title: 'ProGaming Server - BeamMP | Lyra Cuck HQ',
  description: 'Welcome to the ultimate BeamMP community server! Built for high-speed thrills, custom vehicle setups, physics destruction, and clean multiplayer cruising with friends.',
  ogTitle: 'ProGaming Server - BeamMP | Lyra Cuck HQ',
  ogDescription: 'Welcome to the ultimate BeamMP community server! Built for high-speed thrills, custom vehicle setups, physics destruction, and clean multiplayer cruising with friends.',
  ogImage: 'https://raw.githubusercontent.com/Lyra-Social-Group/lyra-Social-Group-Pictures/refs/heads/main/logos/ProGaming/progaming%20logo.png',
  twitterCard: 'summary_large_image',
})

const openFaq = ref(null)

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<template>
  <div class="space-y-20 py-6 flex flex-col min-h-screen justify-between">
    <div class="space-y-20">
      <!-- Top Navigation / Return Link & TOS -->
      <div class="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black border border-gray-800 text-gray-200 hover:text-white hover:bg-gray-900 transition-all text-sm font-semibold shadow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#A033ED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Lyra Social Group
        </NuxtLink>

        <a 
          href="https://legal.lyrasocialgroup.tech/hosted-services/beammp" 
          target="_blank"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black border border-gray-800 text-gray-200 hover:text-white hover:bg-gray-900 transition-all text-sm font-semibold shadow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#A033ED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Server Terms of Service
        </a>
      </div>

      <!-- Hero Section -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4">
        <!-- Left: Logo / Graphic Card -->
        <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col items-center justify-center relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-tr from-[#A033ED]/20 to-transparent pointer-events-none"></div>
          <div class="w-44 h-44 rounded-2xl overflow-hidden border-2 border-[#A033ED] shadow-lg shadow-[#A033ED]/20 flex items-center justify-center bg-[#521369]/40 p-3">
            <img 
              src="https://raw.githubusercontent.com/Lyra-Social-Group/lyra-Social-Group-Pictures/refs/heads/main/logos/ProGaming/progaming%20logo.png" 
              alt="ProGaming Logo" 
              class="w-full h-full object-contain"
            />
          </div>
        </div>

        <!-- Right: Value Proposition -->
        <div class="space-y-6">
          <h1 class="text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            ProGaming Server, <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A033ED] to-purple-400">BeamMP Multiplayer</span>
          </h1>
          <p class="text-gray-300 text-lg leading-relaxed">
            Welcome to the ultimate BeamMP community server! Built for high-speed thrills, custom vehicle setups, physics destruction, and clean multiplayer cruising with friends. Jump behind the wheel and join the convoy today.
          </p>
          <div class="flex flex-wrap gap-4">
            <a 
              href="beammp://connect" 
              class="inline-block px-8 py-3 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold shadow-lg shadow-[#A033ED]/30 transition-all transform hover:-translate-y-0.5"
            >
              Connect to Server
            </a>
            <a 
              href="https://discord.gg/MPM6TW5Py3" 
              target="_blank"
              class="inline-block px-8 py-3 rounded-xl bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white font-semibold transition-all"
            >
              Server Discord
            </a>
          </div>
        </div>
      </section>

      <!-- Mission Banner Section -->
      <section class="py-12 px-6 rounded-2xl bg-[#13131a] lsg-glow-border text-center max-w-7xl mx-auto space-y-4">
        <h2 class="text-2xl md:text-3xl font-bold text-white tracking-wide">
          Proudly hosted by Lyra's Cuck HQ—bringing you maximum chaos, custom physics, and zero regrets on the asphalt.
        </h2>
        <p class="text-[#A033ED] font-medium tracking-wide uppercase text-sm">Engineered for clean multiplayer fun!</p>
      </section>

      <!-- Server Info / Features Section -->
      <section id="features" class="max-w-7xl mx-auto px-4 space-y-12">
        <h2 class="text-3xl font-extrabold text-center text-white">Server Highlights</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col items-center text-center space-y-4">
            <div class="w-14 h-14 rounded-xl bg-[#A033ED]/10 flex items-center justify-center text-[#A033ED]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white">24/7 Uptime</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Hosted on reliable infrastructure ensuring low latency, smooth synchronization, and stable physics handling around the clock.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col items-center text-center space-y-4">
            <div class="w-14 h-14 rounded-xl bg-[#A033ED]/10 flex items-center justify-center text-[#A033ED]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white">Custom Configs</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Curated maps and vehicle selection tailored to test out your favorite builds, racing lines, and stunt setups.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col items-center text-center space-y-4">
            <div class="w-14 h-14 rounded-xl bg-[#A033ED]/10 flex items-center justify-center text-[#A033ED]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white">Active Community</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              A friendly, welcoming space for casual cruisers and hardcore vehicle physics simulation enthusiasts alike.
            </p>
          </div>
        </div>
      </section>

      <!-- Rules Section -->
      <section id="rules" class="max-w-4xl mx-auto px-4 space-y-8">
        <h2 class="text-3xl font-extrabold text-center text-white">Server Rules</h2>

        <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border space-y-6 text-gray-300 text-sm leading-relaxed">
          <ol class="list-decimal list-inside space-y-4">
            <li><strong class="text-white">NO NSFW:</strong> We will not allow NSFW nor NSFL.</li>
            <li><strong class="text-white">Channel Purpose:</strong> Please use chats for their intended purpose.</li>
            <li><strong class="text-white">Be Cool:</strong> Please refrain from being an annoying shithead.</li>
            <li><strong class="text-white">Spam Control:</strong> Please refrain from spam unless its in the intended channel, spam pinging IS NOT ALLOWED. <span class="text-gray-400 italic">(Side note: I recommend you mute the spam channel)</span></li>
            <li><strong class="text-white">Respect:</strong> Please be respectful and mindful of others, theres a difference between light teasing and being a dick so find it.</li>
            <li><strong class="text-white">Floor Etiquette:</strong> No shitting on the floor between 3:46 PM-7:48AM EST.</li>
            <li><strong class="text-white">Language:</strong> Please refrain from usage of racial and derogatory terms (this does not include curse words, this is purely for any racial or derogatory term).</li>
            <li><strong class="text-white">Staff Conduct:</strong> No abuse of power.</li>
            <li><strong class="text-white">Toxicity:</strong> No toxicity.</li>
            <li><strong class="text-white">NO DOXXING:</strong> This includes phone numbers of anyone, home addresses of anyone, pictures of anyone. You can only post pictures if the person is ok with it, but no sensitive information. It doesnt matter if its a normal person, dealership mechanic or a scammer, it WILL BE an immediate blacklist.</li>
            <li><strong class="text-white">Discrimination:</strong> No discrimination.</li>
            <li><strong class="text-white">Physics:</strong> NO LOOPHOLES, NO WORMHOLES, NO BLACKHOLES, NO WHITEHOLES.</li>
            <li><strong class="text-white">Sensitive Topics:</strong> Please refrain from overly using jokes about rape, pedophilia, racism, sexism, and other possibly sensitive topics in an excessive manner, a good example would be everything @Walter does.</li>
            <li><strong class="text-white">Promotions:</strong> No self-promotion unless you are partnered.</li>
            <li><strong class="text-white">Zero Tolerance:</strong> No pedophiles.</li>
          </ol>

          <div class="border-t border-gray-800 pt-6 space-y-3">
            <h3 class="text-base font-bold text-white">Strike & Enforcement Policy</h3>
            <p>
              There will be 3 warnings until the offending user will be banned. The warnings go away after a decent amount of time. 
              <strong class="text-white">1st offense:</strong> Verbal warning. 
              <strong class="text-white">2nd offense:</strong> Timed out for however long the acting staff member deems necessary. 
              <strong class="text-white">3rd offense:</strong> Banned. 
            </p>
            <p class="text-xs text-[#A033ED] font-medium">
              Bans can be appealed by going to either one of the Owners.
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- Footer Copyright -->
    <footer class="max-w-7xl mx-auto px-4 py-8 text-center text-gray-500 text-sm border-t border-gray-900 w-full space-y-2">
      <p>&copy; 2026 Lyra Cuck HQ. All rights reserved.</p>
      <p class="text-xs text-gray-600">Lyra Cuck HQ is a registered trademark of Lyra Social Group.</p>
    </footer>
  </div>
</template>