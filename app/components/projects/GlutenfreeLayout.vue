<script setup lang="ts">
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

defineProps({
  project: { type: Object, required: true },
})

useRevealOnScroll()

function asList(value: unknown): string[] {
  return Array.isArray(value) ? (value as string[]) : []
}

function asSteps(value: unknown): Array<{ num: string; title: string; text: string }> {
  return Array.isArray(value) ? (value as Array<{ num: string; title: string; text: string }>) : []
}
</script>

<template>
  <main class="min-h-screen bg-white font-sans text-[#0B0B0F] antialiased">
    <header class="sticky top-0 z-50 border-b border-gray-100/80 bg-white/90 backdrop-blur-md">
      <div class="mx-auto flex max-w-[90rem] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/"
          class="group inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:text-amber-600"
        >
          <span class="transition-transform group-hover:-translate-x-0.5">←</span>
          Back to Home
        </NuxtLink>
        <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Case Study</span>
      </div>
    </header>

    <!-- HERO -->
    <section class="mx-auto max-w-[90rem] px-4 py-10 sm:px-6 lg:px-8">
      <div class="reveal rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-soft sm:p-10">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="space-y-5 lg:col-span-7">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">{{ project.hero_label }}</p>
            <h1 class="font-serif text-4xl font-bold tracking-tight sm:text-5xl">{{ project.title }}</h1>
            <p class="text-base font-medium text-gray-500">{{ project.subtitle }}</p>
            <p class="text-sm leading-relaxed text-gray-600 sm:text-base">{{ project.hero_description }}</p>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-amber-400 px-4 py-1.5 text-xs font-semibold text-white">{{ project.role }}</span>
              <span class="rounded-full border border-gray-200 px-4 py-1.5 text-xs font-medium text-gray-600">{{ project.duration }}</span>
            </div>
          </div>
          <div class="flex items-center lg:col-span-5 lg:justify-end">
            <div class="w-full max-w-xs rounded-2xl bg-amber-50 p-8 text-center">
              <p class="text-5xl font-bold text-amber-600">{{ project.stat_copies_val }}</p>
              <p class="mt-2 text-sm font-semibold text-gray-800">{{ project.stat_copies_lbl }}</p>
              <p class="mt-3 text-xs text-gray-500">{{ project.stat_copies_text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WORK & OUTCOME -->
    <section class="mx-auto max-w-[90rem] border-t border-gray-100 px-4 py-14 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div class="reveal space-y-8 lg:col-span-3">
          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-amber-600">The Project</p>
            <p class="mt-1 text-lg font-bold">{{ project.work_title }}</p>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-amber-600">The Outcome</p>
          </div>
        </div>
        <div class="space-y-5 lg:col-span-9">
          <div class="reveal reveal-delay-1 rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6 sm:p-8">
            <p class="text-sm leading-relaxed text-gray-600">{{ project.work_text }}</p>
          </div>
          <div class="reveal reveal-delay-2 rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6 sm:p-8">
            <p class="text-sm leading-relaxed text-gray-600">{{ project.outcome_text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="mx-auto max-w-[90rem] border-t border-gray-100 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-10">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">{{ project.process_tag }}</p>
        <h2 class="mt-2 font-serif text-2xl font-bold sm:text-3xl">{{ project.process_title }}</h2>
      </div>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div
          v-for="(step, index) in asSteps(project.process_steps)"
          :key="step.num"
          class="reveal overflow-hidden rounded-2xl border border-gray-100 bg-white"
          :class="{ 'reveal-delay-1': index % 2 === 1 }"
        >
          <div class="p-6">
            <p class="text-xs font-bold text-amber-600">{{ step.num }}</p>
            <h3 class="mt-2 text-lg font-bold">{{ step.title }}</h3>
            <p class="mt-2 text-sm text-gray-600">{{ step.text }}</p>
          </div>
          <div
            class="h-36"
            :class="[
              index === 0 ? 'bg-amber-100' : '',
              index === 1 ? 'bg-gradient-to-r from-amber-100 to-emerald-100' : '',
              index === 2 ? 'bg-[#F3F4F6] flex items-center justify-center' : '',
              index === 3 ? 'bg-gray-900 flex items-center justify-center' : '',
            ]"
          >
            <p v-if="index === 2" class="text-sm font-serif font-bold text-gray-700">Fluffy Buckwheat Pancakes</p>
            <div v-if="index === 3" class="h-28 w-16 rounded-2xl border-4 border-gray-700 bg-gray-800" />
          </div>
        </div>
      </div>
    </section>

    <!-- PUBLICATION -->
    <section class="mx-auto max-w-[90rem] border-t border-gray-100 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">{{ project.publication_tag }}</p>
        <h2 class="mt-2 font-serif text-2xl font-bold sm:text-3xl">{{ project.publication_title }}</h2>
      </div>
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
        <div class="reveal reveal-delay-1 lg:col-span-5">
          <div class="mx-auto flex h-80 max-w-xs flex-col justify-end rounded-2xl bg-amber-100 p-8 shadow-soft">
            <p class="font-serif text-2xl font-bold leading-tight">Gluten Free<br />Cooking Easy</p>
          </div>
        </div>
        <div class="reveal reveal-delay-2 lg:col-span-7">
          <p class="text-sm leading-relaxed text-gray-600 sm:text-base">{{ project.publication_text }}</p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="tag in asList(project.publication_tags)"
              :key="tag"
              class="rounded-full border border-gray-200 bg-[#F3F4F6] px-3 py-1.5 text-xs font-medium text-gray-600"
            >{{ tag }}</span>
          </div>
          <button
            type="button"
            class="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#6366F1] px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#4F46E5]"
          >
            Preview Booklet →
          </button>
        </div>
      </div>
    </section>

    <ProjectFooter />
  </main>
</template>
