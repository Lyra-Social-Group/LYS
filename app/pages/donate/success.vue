<script setup lang="ts">
useSeoMeta({
  title: 'Thank You — Lyra Social Group',

  description:
    'Thank you for supporting Lyra Social Group.'
})
</script>

<template>
  <main class="flex min-h-screen items-center justify-center px-6 py-16">

    <section
      class="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl"
    >

      <div
        class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20"
      >
        <span class="text-4xl">✓</span>
      </div>

      <h1 class="text-4xl font-bold">
        Thank you!
      </h1>

      <p class="mt-5 text-gray-400">
        Your support means a lot to Lyra Social Group.
        Thank you for helping us continue building our community.
      </p>

      <NuxtLink
        to="/"
        class="mt-8 inline-block rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500"
      >
        Return Home
      </NuxtLink>

    </section>

  </main>
</template>