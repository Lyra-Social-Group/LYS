<template>
  <div class="max-w-6xl mx-auto space-y-14 py-12 px-4 sm:px-6">
    <!-- Intro -->
    <section class="text-center space-y-4">
      <h1 class="text-3xl md:text-5xl font-extrabold text-white">
        Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A033ED] to-purple-400">Creators</span>
      </h1>
      <p class="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Meet the streamers, artists and makers in the Lyra Social Group creator network. Go say hi, follow them, and catch their next stream.
      </p>
    </section>

    <!-- Creator grid -->
    <section aria-labelledby="creator-list-heading">
      <h2 id="creator-list-heading" class="sr-only">Creators in the program</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <li v-for="creator in creators" :key="creator.id" class="flex">
          <article class="p-6 w-full rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col justify-between gap-6 hover:border-[#A033ED] transition-all">
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <img
                  :src="creator.avatar"
                  :alt="`${creator.name} avatar`"
                  width="64"
                  height="64"
                  loading="lazy"
                  class="w-16 h-16 rounded-full object-cover border border-[#A033ED]/40 bg-[#A033ED]/20 flex-shrink-0"
                />
                <div class="min-w-0">
                  <h3 class="text-xl font-bold text-white break-words">{{ creator.name }}</h3>
                  <p v-if="creator.tagline" class="text-xs font-semibold uppercase tracking-wider text-purple-400">{{ creator.tagline }}</p>
                </div>
              </div>

              <p class="text-gray-300 text-sm leading-relaxed">{{ creator.bio }}</p>

              <div v-if="creator.links.length">
                <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Find them here</h4>
                <ul class="flex flex-wrap gap-2">
                  <li v-for="link in creator.links" :key="link.url">
                    <a
                      :href="link.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      :aria-label="`${creator.name} on ${link.label} (opens in a new tab)`"
                      class="inline-flex items-center min-h-[44px] px-3 rounded-lg border border-[#A033ED]/40 text-sm text-gray-200 hover:bg-[#A033ED]/20 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A033ED]"
                    >
                      {{ link.label }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="pt-4 border-t border-gray-800">
              <a
                :href="creator.hubUrl"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${creator.hubLabel || 'All links'} for ${creator.name} (opens in a new tab)`"
                class="inline-flex items-center min-h-[44px] text-sm font-semibold text-[#c77dff] hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A033ED] rounded-sm"
              >
                {{ creator.hubLabel || 'All links' }} ↗
              </a>
            </div>
          </article>
        </li>
      </ul>
    </section>

    <!-- About the program -->
    <section aria-labelledby="program-heading" class="rounded-2xl bg-[#13131a] lsg-glow-border p-6 md:p-10 space-y-6">
      <div class="space-y-2 text-center">
        <h2 id="program-heading" class="text-2xl md:text-3xl font-bold text-white">The Lyra Social Group creator program</h2>
        <p class="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          We back creators without taking a cut of what makes them successful. Here is what members get.
        </p>
      </div>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <li v-for="perk in perks" :key="perk.title" class="rounded-xl border border-[#A033ED]/30 bg-[#0d0d12] p-4">
          <h3 class="font-semibold text-white">{{ perk.title }}</h3>
          <p class="text-sm text-gray-300 mt-1 leading-relaxed">{{ perk.text }}</p>
        </li>
      </ul>
    </section>

    <!-- CTA -->
    <section class="text-center space-y-4">
      <h2 class="text-2xl md:text-3xl font-bold text-white">Want to join the network?</h2>
      <p class="text-gray-300 max-w-xl mx-auto leading-relaxed">
        Hop into our Discord, say hello, and tell us about what you create.
      </p>
      <a
        href="https://discord.gg/3dSeCq47nc"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join the Lyra Social Group Discord community (opens in a new tab)"
        class="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold transition-all shadow-lg shadow-[#A033ED]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Join our Discord
      </a>
    </section>
  </div>
</template>

<script setup>
import { creators } from '~/data/creators'

const title = 'Creators | Lyra Social Group'
const description =
  'Meet the creators in the Lyra Social Group creator program: 100% sponsorship ownership, zero overhead, VOD archiving, DMCA-safe music and 24/7 syndication on Twitch, Kick and YouTube.'

useHead({ title })
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: 'https://lyrasocialgroup.tech/creators',
  twitterCard: 'summary'
})

const perks = [
  {
    title: '100% sponsorship ownership',
    text: 'Every sponsorship you land is yours. We never take a percentage.'
  },
  {
    title: 'Zero overhead',
    text: 'No fees to join and no costs to stay. You focus on creating.'
  },
  {
    title: 'VOD archiving',
    text: 'Your streams are archived so your best moments are never lost.'
  },
  {
    title: 'DMCA-safe music',
    text: 'Music you can stream and publish without worrying about takedowns.'
  },
  {
    title: '24/7 syndication',
    text: 'Round-the-clock syndication on Twitch, Kick and YouTube.'
  }
]
</script>
