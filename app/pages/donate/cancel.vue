<script setup lang="ts">
useSeoMeta({
  title: 'Donation Cancelled — Lyra Social Group'
})
</script>

<template>
  <main class="flex min-h-screen items-center justify-center px-6 py-16">

    <section
      class="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl"
    >

      <div
        class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10"
      >
        <span class="text-4xl">↩</span>
      </div>

      <h1 class="text-4xl font-bold">
        Donation cancelled
      </h1>

      <p class="mt-5 text-gray-400">
        No payment was completed. You can return to the donation
        page whenever you're ready.
      </p>

      <NuxtLink
        to="/donate"
        class="mt-8 inline-block rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500"
      >
        Back to Donations
      </NuxtLink>

    </section>

  </main>
</template>