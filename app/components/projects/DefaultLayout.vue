<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <main class="min-h-screen bg-gray-50 text-[#0B0B0F] font-sans antialiased">
    <header class="border-b border-gray-200 bg-white py-4">
      <div
        class="mx-auto flex max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <NuxtLink
          to="/"
          class="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >← Back to Portfolio</NuxtLink
        >
        <span class="text-xs font-bold text-gray-400 uppercase tracking-wider"
          >Archive Case Study</span
        >
      </div>
    </header>

    <section class="mx-auto max-w-3xl px-4 py-16">
      <div
        class="bg-white rounded-2xl border border-gray-200 p-8 shadow-xs space-y-6"
      >
        <div>
          <h1 class="text-3xl font-bold uppercase text-gray-900 tracking-tight">
            {{ project.title }}
          </h1>
          <p class="text-lg text-indigo-600 font-medium mt-1">
            {{ project.subtitle }}
          </p>
          <p class="text-xs text-gray-400 mt-2 font-mono">
            {{ project.duration }}
          </p>
        </div>

        <div class="border-t border-gray-100 pt-6">
          <p class="text-gray-600 leading-relaxed text-base">
            {{ project.description }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
