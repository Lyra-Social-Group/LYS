<script setup>
const INVITE_CODE = '3dSeCq47nc'
const INVITE_URL = `https://discord.gg/${INVITE_CODE}`
const INVITE_API = `https://discord.com/api/v10/invites/${INVITE_CODE}?with_counts=true`

const serverName = ref('Lyra Social Group')
const iconUrl = ref(null)
const memberCount = ref(null)
const onlineCount = ref(null)
const status = ref('loading') // loading | ready | fallback

const formatCount = (value) => {
  if (value == null || Number.isNaN(Number(value))) return null
  return Number(value).toLocaleString('en-US')
}

const onlineLabel = computed(() => formatCount(onlineCount.value))
const memberLabel = computed(() => formatCount(memberCount.value))
const hasActivity = computed(() => onlineLabel.value != null || memberLabel.value != null)
const joinLabel = 'Join the Lyra Social Group Discord community (opens in a new tab)'

onMounted(async () => {
  try {
    const response = await fetch(INVITE_API, { credentials: 'omit' })
    if (!response.ok) throw new Error(`Invite request failed (${response.status})`)

    const data = await response.json()
    const guild = data.guild || {}

    if (guild.name) {
      serverName.value = guild.name
    }

    if (guild.id && guild.icon) {
      const animated = String(guild.icon).startsWith('a_')
      const ext = animated ? 'gif' : 'webp'
      iconUrl.value = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.${ext}?size=128`
    }

    const members = data.approximate_member_count ?? data.profile?.member_count
    const online = data.approximate_presence_count ?? data.profile?.online_count
    if (members != null) memberCount.value = members
    if (online != null) onlineCount.value = online

    status.value = 'ready'
  } catch {
    status.value = 'fallback'
  }
})

const onIconError = () => {
  iconUrl.value = null
}
</script>

<template>
  <article
    class="w-full max-w-md mx-auto p-6 rounded-2xl bg-[#13131a] lsg-glow-border flex flex-col gap-5"
    aria-label="Lyra Social Group Discord community"
  >
    <div class="flex items-center gap-4">
      <div class="shrink-0 w-16 h-16 rounded-2xl overflow-hidden bg-[#A033ED]/15 border border-[#A033ED]/40 flex items-center justify-center">
        <img
          v-if="iconUrl"
          :src="iconUrl"
          :alt="`${serverName} server icon`"
          width="64"
          height="64"
          class="w-full h-full object-cover"
          @error="onIconError"
        />
        <img
          v-else
          src="/logo.png"
          alt=""
          width="48"
          height="48"
          class="w-12 h-12 object-contain"
        />
      </div>

      <div class="min-w-0 text-left">
        <h3 class="text-lg font-bold text-white truncate">{{ serverName }}</h3>
        <p class="text-sm text-gray-400">Community Discord</p>
      </div>
    </div>

    <div
      class="min-h-[1.5rem]"
      aria-live="polite"
      aria-atomic="true"
    >
      <p
        v-if="hasActivity"
        class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-300"
      >
        <span v-if="onlineLabel != null" class="inline-flex items-center gap-2">
          <span class="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
          </span>
          <span>{{ onlineLabel }} online</span>
        </span>
        <span v-if="onlineLabel != null && memberLabel != null" class="text-gray-500" aria-hidden="true">·</span>
        <span v-if="memberLabel != null">{{ memberLabel }} members</span>
      </p>
      <p v-else-if="status === 'loading'" class="text-sm text-gray-400">
        Checking live activity...
      </p>
    </div>

    <a
      :href="INVITE_URL"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="joinLabel"
      class="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-[#A033ED] hover:bg-[#8e2cd4] text-white font-semibold shadow-lg shadow-[#A033ED]/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#13131a]"
    >
      Join Discord
    </a>
  </article>
</template>
