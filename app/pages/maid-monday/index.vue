<script setup>
useHead({
  title: 'Maid Monday - Lyra Social Group',
  meta: [
    { name: 'description', content: 'Join us every Monday for Maid Monday! Check event rules, community guidelines, and access our VRChat group.' }
  ]
})

const { data: groupData, pending } = await useFetch('/api/group-status')
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-slate-100 px-6 py-12">
    <div class="max-w-3xl mx-auto space-y-8">
      
      <!-- Header -->
      <div class="border-b border-slate-800 pb-6">
        <h1 class="text-4xl font-extrabold tracking-tight text-pink-400 mb-2">
          Maid Monday 🌸
        </h1>
        <p class="text-slate-400 text-lg">
          A weekly VRChat event hosted every Monday. 
        </p>
      </div>

      <!-- Live Instance Widget Component -->
      <div class="bg-slate-900 border border-pink-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
              <span class="text-xs font-semibold uppercase tracking-wider text-pink-400">Live VRChat Hub</span>
            </div>
            <h2 class="text-2xl font-bold text-white">Maid Monday Lobbies</h2>
          </div>
          
          <a 
            href="https://vrchat.com/home/group/grp_e8333552-33fd-47be-846b-97648545eb3c" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-5 py-2.5 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm whitespace-nowrap"
          >
            Open VRChat Group 🚪
          </a>
        </div>

        <!-- Dynamic Instance Data Feed -->
        <div class="space-y-3">
          <div v-if="pending" class="text-sm text-slate-400 p-4 bg-slate-950/50 rounded-xl border border-slate-800">
            Checking for active lobbies...
          </div>
          
          <template v-else-if="Array.isArray(groupData) && groupData.length > 0">
            <div 
              v-for="instance in groupData" 
              :key="instance.instanceId"
              class="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-950/60 rounded-xl border border-slate-800 gap-4 text-sm"
            >
              <div>
                <p class="font-bold text-white text-base">{{ instance.world?.name || 'Maid Monday Lobby' }}</p>
                <p class="text-xs text-slate-400 mt-0.5">Region: US East | Author: {{ instance.world?.authorName }}</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="px-3 py-1.5 bg-pink-500/20 text-pink-300 rounded-full font-medium text-xs whitespace-nowrap">
                  👥 {{ instance.memberCount }} / {{ instance.world?.capacity }} players
                </span>
              </div>
            </div>
          </template>

          <div v-else class="text-sm text-slate-400 p-4 bg-slate-950/50 rounded-xl border border-slate-800">
            No active public instances found right now, or lobbies are currently closed. Check back during event hours!
          </div>
        </div>
      </div>

      <!-- Event Details & Guidelines -->
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <h2 class="text-xl font-semibold text-white">How It Works</h2>
        <p class="text-slate-300 leading-relaxed">
          A maid can be given a request as long as it's <strong class="text-pink-400">PG-14</strong>. 
          Maids are fully allowed to deny any request if they are not comfortable with it or simply don't want to do it. Respect boundaries!
        </p>
      </div>

      <!-- Rules Section -->
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <h2 class="text-xl font-semibold text-white">Community Rules</h2>
        <ul class="space-y-3 text-slate-300">
          <li class="flex items-start gap-3">
            <span class="text-pink-400 font-bold">•</span>
            <span>No being rude to others; respect everyone in the community.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-pink-400 font-bold">•</span>
            <span>No gossip or toxic behavior. Anyone caught will receive a warning.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-pink-400 font-bold">•</span>
            <span>Do not bring outside problems into the group.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-pink-400 font-bold">•</span>
            <span><strong>3 warnings</strong> will result in a permanent kick from the group.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-pink-400 font-bold">•</span>
            <span>Always listen to what an admin tells you; failure to do so results in a warning.</span>
          </li>
        </ul>
      </div>

      <!-- Discord Call to Action -->
      <div class="text-center pt-2">
        <a 
          href="https://discord.gg/tpFPhnJhhf" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-block w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
        >
          Join Our Discord Server 🚀
        </a>
      </div>

    </div>
  </main>
</template>