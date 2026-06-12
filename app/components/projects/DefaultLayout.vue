<script setup lang="ts">
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

useRevealOnScroll()
</script>

<template>
  <main class="min-h-screen bg-[#F9FAFB] font-sans text-[#0B0B0F] antialiased">
    <header
      class="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md"
    >
      <div
        class="mx-auto flex max-w-[90rem] items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <NuxtLink
          to="/"
          class="group inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500"
        >
          <span class="transition-transform duration-300 group-hover:-translate-x-0.5">
            ←
          </span>
          Back to Portfolio
        </NuxtLink>
        <span class="text-xs font-bold uppercase tracking-wider text-gray-400">
          Archive Case Study
        </span>
      </div>
    </header>

    <section class="mx-auto max-w-[90rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div
        class="reveal overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white p-8 shadow-soft sm:p-10"
      >
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">
          Case Study
        </p>
        <h1 class="mt-3 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          {{ project.title }}
        </h1>
        <p class="mt-2 text-lg font-medium text-[#4F46E5]">
          {{ project.subtitle }}
        </p>
        <p v-if="project.duration" class="mt-2 text-xs font-mono text-gray-400">
          {{ project.duration }}
        </p>
        <div class="mt-8 border-t border-gray-100 pt-8">
          <p class="text-base leading-relaxed text-gray-600">
            {{ project.description }}
          </p>
        </div>
      </div>
    </section>

    <ProjectFooter :dark="false" />
  </main>
</template>
