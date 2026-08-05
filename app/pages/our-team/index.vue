<template>
  <div class="max-w-6xl mx-auto space-y-12 py-12 px-6">
    <!-- Header Section -->
    <section class="text-center space-y-4">
      <h1 class="text-3xl md:text-5xl font-extrabold text-white">
        Meet the <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A033ED] to-purple-400">Team</span>
      </h1>
      <p class="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        The passionate creators, developers, streamers, and community builders behind Lyra Social Group and Lyra's Cuck HQ.
      </p>
      <div class="pt-2">
        <NuxtLink 
          to="/our-team/join" 
          class="inline-block px-6 py-2.5 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold text-sm transition-all shadow-lg shadow-[#A033ED]/20"
        >
          Join the Roster ↗
        </NuxtLink>
      </div>
    </section>

    <!-- Loading State -->
    <div v-if="pending" class="text-center text-gray-400 py-12">
      Loading team members...
    </div>

    <!-- Team Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="member in members" 
        :key="member.id"
        class="p-6 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col justify-between space-y-6 group hover:border-[#A033ED] transition-all"
      >
        <div class="space-y-4">
          <!-- Avatar & Badge -->
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 rounded-full bg-[#A033ED]/20 border border-[#A033ED]/40 flex items-center overflow-hidden flex-shrink-0">
              <img :src="member.avatarUrl || '/logo.png'" :alt="member.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h2 class="text-xl font-bold text-white">{{ member.name }}</h2>
              <span class="text-xs font-semibold uppercase tracking-wider text-purple-400">{{ member.role }}</span>
            </div>
          </div>
          <!-- Bio -->
          <p class="text-gray-300 text-sm leading-relaxed">
            {{ member.bio }}
          </p>
        </div>

        <!-- Social / Links -->
        <div class="pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
          <span>{{ member.tagline || 'Community Member' }}</span>
          <a v-if="member.socialUrl" :href="member.socialUrl" target="_blank" class="text-[#A033ED] hover:underline font-semibold">
            Connect ↗
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Fetch team members dynamically from your backend/API endpoint
const { data: members, pending } = await useFetch('/api/team-members')
</script>