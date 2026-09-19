<script setup lang="ts">
const presetAmounts = [5, 10, 25, 50, 100]

const selectedAmount = ref<number | null>(25)
const customAmount = ref('')
const loading = ref(false)
const error = ref('')

const amount = computed(() => {
  if (selectedAmount.value === null) {
    return Number(customAmount.value)
  }

  return selectedAmount.value
})

function selectAmount(value: number) {
  selectedAmount.value = value
  customAmount.value = ''
  error.value = ''
}

function selectCustom() {
  selectedAmount.value = null
  error.value = ''
}

async function donate() {
  error.value = ''

  const donationAmount = Number(amount.value)

  if (!Number.isFinite(donationAmount)) {
    error.value = 'Please enter a valid donation amount.'
    return
  }

  if (donationAmount < 1) {
    error.value = 'The minimum donation is $1.'
    return
  }

  if (donationAmount > 10000) {
    error.value = 'The maximum donation is $10,000.'
    return
  }

  loading.value = true

  try {
    const response = await $fetch<{
      url: string
    }>('/api/stripe/create-donation-checkout', {
      method: 'POST',

      body: {
        amount: donationAmount
      }
    })

    if (!response.url) {
      throw new Error('Stripe did not provide a checkout URL.')
    }

    window.location.href = response.url
  } catch (err: any) {
    console.error(err)

    error.value =
      err?.data?.statusMessage ||
      err?.message ||
      'Something went wrong while starting checkout.'

    loading.value = false
  }
}

useSeoMeta({
  title: 'Donate — Lyra Social Group',

  description:
    'Support Lyra Social Group and help us continue building community-driven projects and events.',

  ogTitle: 'Donate — Lyra Social Group',

  ogDescription:
    'Support Lyra Social Group and help us continue building community-driven projects and events.'
})
</script>

<template>
  <main class="min-h-screen px-6 py-16">
    <div class="mx-auto max-w-5xl">

      <!-- Header -->
      <section class="mb-12 text-center">

        <div
          class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-600/20"
        >
          <span class="text-4xl">💜</span>
        </div>

        <h1
          class="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Support Lyra Social Group
        </h1>

        <p
          class="mx-auto mt-5 max-w-2xl text-lg text-gray-400"
        >
          Your support helps us continue building community-driven
          projects, events, and spaces for our community.
        </p>

      </section>

      <!-- Donation Card -->
      <section
        class="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-10"
      >

        <h2 class="mb-6 text-2xl font-semibold">
          Choose an amount
        </h2>

        <!-- Preset amounts -->
        <div
          class="grid grid-cols-2 gap-3 sm:grid-cols-5"
        >

          <button
            v-for="preset in presetAmounts"
            :key="preset"
            type="button"
            class="rounded-xl border px-4 py-4 text-lg font-semibold transition"
            :class="
              selectedAmount === preset
                ? 'border-purple-500 bg-purple-600 text-white'
                : 'border-white/10 bg-white/5 hover:border-purple-400 hover:bg-white/10'
            "
            @click="selectAmount(preset)"
          >
            ${{ preset }}
          </button>

        </div>

        <!-- Custom amount -->
        <div class="mt-6">

          <button
            type="button"
            class="mb-3 text-sm font-medium text-purple-400 hover:text-purple-300"
            @click="selectCustom"
          >
            Enter a custom amount
          </button>

          <div class="relative">

            <span
              class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              $
            </span>

            <input
              v-model="customAmount"
              type="number"
              min="1"
              max="10000"
              step="0.01"
              inputmode="decimal"
              placeholder="Custom amount"
              class="w-full rounded-xl border border-white/10 bg-black/20 px-10 py-4 text-lg outline-none transition focus:border-purple-500"
              :class="
                selectedAmount === null
                  ? 'border-purple-500'
                  : ''
              "
              @focus="selectCustom"
            />

          </div>

        </div>

        <!-- Error -->
        <div
          v-if="error"
          class="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
        >
          {{ error }}
        </div>

        <!-- Donate button -->
        <button
          type="button"
          :disabled="loading"
          class="mt-8 w-full rounded-xl bg-purple-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
          @click="donate"
        >

          <span v-if="!loading">
            Donate ${{ Number(amount || 0).toFixed(2) }}
          </span>

          <span v-else>
            Redirecting to Stripe…
          </span>

        </button>

        <p class="mt-5 text-center text-xs text-gray-500">
          Payments are securely processed by Stripe.
          Lyra Social Group does not directly handle your card information.
        </p>

      </section>

      <!-- Information -->
      <section
        class="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3"
      >

        <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div class="mb-3 text-2xl">🌐</div>

          <h3 class="font-semibold">
            Community
          </h3>

          <p class="mt-2 text-sm text-gray-400">
            Help us maintain and expand our online community.
          </p>
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div class="mb-3 text-2xl">🎮</div>

          <h3 class="font-semibold">
            Events
          </h3>

          <p class="mt-2 text-sm text-gray-400">
            Support community events, gaming nights, and activities.
          </p>
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div class="mb-3 text-2xl">🛠️</div>

          <h3 class="font-semibold">
            Projects
          </h3>

          <p class="mt-2 text-sm text-gray-400">
            Help fund the technology and infrastructure behind our projects.
          </p>
        </div>

      </section>

    </div>
  </main>
</template>