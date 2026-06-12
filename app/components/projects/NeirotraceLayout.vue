<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <main
    class="min-h-screen bg-[#050508] text-white font-sans antialiased relative overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(99,102,241,0.15)_0%,transparent_60%)] pointer-events-none"
    ></div>

    <header
      class="sticky top-0 z-50 border-b border-white/5 bg-[#050508]/80 backdrop-blur-md"
    >
      <div
        class="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <NuxtLink
          to="/"
          class="group inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white shadow-xs transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/10"
        >
          ← Back to Home
        </NuxtLink>
        <img
          src="/assets/logo_example.png"
          alt="Olena Perepelychna"
          class="h-10 w-auto invert brightness-200"
        />
      </div>
    </header>

    <section class="mx-auto max-w-4xl px-4 py-20 text-center relative z-10">
      <p class="text-xs font-bold uppercase tracking-widest text-[#818CF8]">
        Project 02
      </p>
      <h1
        class="text-5xl font-bold tracking-tight mt-3 uppercase bg-gradient-to-r from-white via-gray-200 to-indigo-400 bg-clip-text text-transparent sm:text-6xl"
      >
        {{ project.title }}
      </h1>
      <p class="text-xl text-indigo-300 mt-4 font-medium">
        {{ project.subtitle }}
      </p>
      <p class="text-gray-400 mt-2 text-sm">{{ project.duration }}</p>

      <div
        class="mt-12 rounded-2xl border border-white/5 bg-black/40 p-8 text-left space-y-4"
      >
        <h2 class="text-2xl font-bold text-white">
          {{ project.challenge_title }}
        </h2>
        <p class="text-gray-300 leading-relaxed">
          {{ project.challenge_text }}
        </p>
      </div>
    </section>
  </main>
</template>
