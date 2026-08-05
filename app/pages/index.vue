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

        <!-- FAQ Item 4 -->
        <div 
          @click="toggleFaq(3)" 
          class="p-6 rounded-xl bg-[#13131a] lsg-glow-border space-y-2 cursor-pointer transition-all"
        >
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-white">What kind of virtual events and activities do you host?</h3>
            <span class="text-[#A033ED] transform transition-transform" :class="{ 'rotate-180': openFaq === 3 }">▲</span>
          </div>
          <p v-show="openFaq === 3" class="text-gray-300 text-sm pt-2">
            We host a variety of community gatherings, social hangouts, and interactive events primarily centered around VRChat environments, creative streams, and digital media sharing.
          </p>
        </div>

        <!-- FAQ Item 5 -->
        <div 
          @click="toggleFaq(4)" 
          class="p-6 rounded-xl bg-[#13131a] lsg-glow-border space-y-2 cursor-pointer transition-all"
        >
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-white">How can content creators or developers collaborate with LSG?</h3>
            <span class="text-[#A033ED] transform transition-transform" :class="{ 'rotate-180': openFaq === 4 }">▲</span>
          </div>
          <p v-show="openFaq === 4" class="text-gray-300 text-sm pt-2">
            We are always open to collaborating with fellow creators, developers, and artists! You can reach out directly via our contact form or chat with us in our community Discord to pitch ideas or partnership opportunities.
          </p>
        </div>

        <!-- FAQ Item 6 -->
        <div 
          @click="toggleFaq(5)" 
          class="p-6 rounded-xl bg-[#13131a] lsg-glow-border space-y-2 cursor-pointer transition-all"
        >
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-white">Do I need a VR headset to participate in the community?</h3>
            <span class="text-[#A033ED] transform transition-transform" :class="{ 'rotate-180': openFaq === 5 }">▲</span>
          </div>
          <p v-show="openFaq === 5" class="text-gray-300 text-sm pt-2">
            Not at all! While many of our members enjoy exploring virtual spaces via VR, a large portion of our community also participates through desktop mode, community text channels, streams, and our social platforms.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>