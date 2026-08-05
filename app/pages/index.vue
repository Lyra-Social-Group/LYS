<script setup>
import { ref } from 'vue'

const openFaq = ref(null)

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<template>
  <div class="space-y-20 py-6">
    <!-- Hero Section -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4">
      <!-- Left: Logo / Graphic Card -->
      <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-tr from-[#A033ED]/20 to-transparent pointer-events-none"></div>
        <img src="/logo.png" alt="Lyra Social Group Logo" class="w-full max-w-sm object-contain drop-shadow-[0_0_25px_rgba(160,51,237,0.4)]" />
      </div>

      <!-- Right: Value Proposition -->
      <div class="space-y-6">
        <h1 class="text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Connecting Worlds, <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A033ED] to-purple-400">Inspiring Creativity</span>
        </h1>
        <p class="text-gray-300 text-lg leading-relaxed">
          Join Lyra Social Group, where global connections and immersive digital experiences come to life. Participate in virtual events, share your ideas, and be part of a vibrant online community. Experience the future of social interaction through technology.
        </p>
        <div>
          <a 
            href="mailto:contactme@lyrafoxwood.app" 
            class="inline-block px-8 py-3 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold shadow-lg shadow-[#A033ED]/30 transition-all transform hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>

    <!-- Mission Banner Section -->
    <section class="py-12 px-6 rounded-2xl bg-[#13131a] lsg-glow-border text-center max-w-7xl mx-auto space-y-4">
      <h2 class="text-2xl md:text-3xl font-bold text-white tracking-wide">
        Connecting worlds, inspiring creativity, and building tomorrow's community today.
      </h2>
      <p class="text-[#A033ED] font-medium tracking-wide uppercase text-sm">Join the movement now!</p>
    </section>

    <!-- Team Section -->
    <section id="team" class="max-w-7xl mx-auto px-4 space-y-12">
      <h2 class="text-3xl font-extrabold text-center text-white">Team</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Team Member 1: Lyra Foxwood -->
        <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col items-center text-center space-y-6">
          <div class="w-36 h-36 rounded-full overflow-hidden border-2 border-[#A033ED] shadow-lg shadow-[#A033ED]/20">
            <img src="https://cdn.discordapp.com/avatars/1068754603933442048/6fae810e6afed0bc956d61e6e814d8e0.webp?size=1024" alt="Lyra Foxwood" class="w-full h-full object-cover" />
          </div>
          <div class="space-y-2">
            <h3 class="text-2xl font-bold text-white">Lyra Foxwood</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Lyra is a fox on a mission, exploring the internet through VR, music, and beautiful creative chaos. She is a multi-talented furry streamer, content creator, photographer, and musician who spends most of her time in VRChat. Simply put, Lyra is the ultimate driving force behind Lyra Social Group. Without her energy and dedication, the group wouldn't be what it is today.
            </p>
          </div>
          <div class="pt-2">
            <a href="https://lyrafoxwood.social" target="_blank" class="p-2 rounded-lg bg-[#A033ED]/10 text-[#A033ED] hover:bg-[#A033ED]/20 transition-colors inline-flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Team Member 2: Open Slot / This could be you -->
        <div class="p-8 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col items-center text-center space-y-6">
          <div class="w-36 h-36 rounded-full overflow-hidden border-2 border-dashed border-gray-600 bg-gray-800/50 flex items-center justify-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div class="space-y-2">
            <h3 class="text-2xl font-bold text-white">This could be you</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              We are expanding our team and looking for passionate creators, builders, and innovators to join our community. Lyra Social Group thrives on creativity, connection, and digital innovation. If you want to help shape the future of virtual spaces, content, and entertainment, we want you!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="max-w-4xl mx-auto px-4 space-y-8">
      <h2 class="text-3xl font-extrabold text-center text-white">Frequently Asked Questions</h2>

      <div class="space-y-4">
        <!-- FAQ Item 1 -->
        <div 
          @click="toggleFaq(0)" 
          class="p-6 rounded-xl bg-[#13131a] lsg-glow-border space-y-2 cursor-pointer transition-all"
        >
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-white">Is prior experience with VR or digital platforms required to join?</h3>
            <span class="text-[#A033ED] transform transition-transform" :class="{ 'rotate-180': openFaq === 0 }">▲</span>
          </div>
          <p v-show="openFaq === 0" class="text-gray-300 text-sm pt-2">
            No prior experience is necessary. We welcome beginners and provide guidance to help new members navigate our platforms.
          </p>
        </div>

        <!-- FAQ Item 2 -->
        <div 
          @click="toggleFaq(1)" 
          class="p-6 rounded-xl bg-[#13131a] lsg-glow-border space-y-3 cursor-pointer transition-all"
        >
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-white">How can I join Lyra Social Group?</h3>
            <span class="text-[#A033ED] transform transition-transform" :class="{ 'rotate-180': openFaq === 1 }">▲</span>
          </div>
          <div v-show="openFaq === 1" class="space-y-3 pt-2" @click.stop>
            <p class="text-gray-300 text-sm">
              You can join Lyra Social Group by signing up on our website and participating in our digital spaces such as Discord and VRChat. Join the Discord Today!!
            </p>
            <div>
              <a 
                href="https://discord.gg/qG5Fz2PaVb" 
                target="_blank" 
                class="inline-block px-4 py-2 rounded-lg bg-[#A033ED] hover:bg-[#8e2cd4] text-white text-xs font-semibold shadow transition-all"
              >
                discord
              </a>
            </div>
          </div>
        </div>

        <!-- FAQ Item 3 -->
        <div 
          @click="toggleFaq(2)" 
          class="p-6 rounded-xl bg-[#13131a] lsg-glow-border space-y-2 cursor-pointer transition-all"
        >
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-white">What age groups is Lyra Social Group suitable for?</h3>
            <span class="text-[#A033ED] transform transition-transform" :class="{ 'rotate-180': openFaq === 2 }">▲</span>
          </div>
          <p v-show="openFaq === 2" class="text-gray-300 text-sm pt-2">
            Our community is designed for adults and young adults interested in digital culture, technology, and virtual events. Specific events may have age restrictions.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>