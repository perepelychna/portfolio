<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

defineProps({
  project: { type: Object, required: true },
})

useRevealOnScroll()

const parallaxY = ref(0)
let scrollRaf = 0

function asList(value: unknown): string[] {
  return Array.isArray(value) ? (value as string[]) : []
}

function asPipeline(value: unknown): Array<{ title: string; text: string }> {
  return Array.isArray(value) ? (value as Array<{ title: string; text: string }>) : []
}

function asTimeline(value: unknown): Array<{ period: string; title: string; text: string; link_label?: string; link_url?: string }> {
  return Array.isArray(value)
    ? (value as Array<{ period: string; title: string; text: string; link_label?: string; link_url?: string }>)
    : []
}

function onScroll() {
  cancelAnimationFrame(scrollRaf)
  scrollRaf = requestAnimationFrame(() => {
    parallaxY.value = Math.min(window.scrollY * 0.12, 50)
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  cancelAnimationFrame(scrollRaf)
})
</script>

<template>
  <main class="relative min-h-screen overflow-hidden bg-[#050508] font-sans text-white antialiased">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(99,102,241,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1)_0%,transparent_45%)]"
      :style="{ transform: `translate3d(0, ${parallaxY}px, 0)` }"
    />

    <header class="sticky top-0 z-50 border-b border-white/5 bg-[#050508]/85 backdrop-blur-md">
      <div class="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/"
          class="group inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold transition-all hover:border-indigo-500/40 hover:bg-white/10"
        >
          <span class="transition-transform group-hover:-translate-x-0.5">←</span>
          Back to Home
        </NuxtLink>
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Archival Case</span>
          <img src="/assets/logo_example.png" alt="Logo" class="h-8 w-auto brightness-200 invert" />
        </div>
      </div>
    </header>

    <!-- HERO -->
    <section class="relative z-10 mx-auto max-w-[90rem] px-4 py-14 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div class="reveal space-y-5 lg:col-span-7">
          <p class="text-xs font-bold uppercase tracking-[0.28em] text-[#818CF8]">{{ project.hero_label }}</p>
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{{ project.title }}</h1>
          <p class="text-lg text-gray-300">{{ project.subtitle }}</p>
          <p class="text-sm leading-relaxed text-gray-400 sm:text-base">{{ project.hero_description }}</p>
          <div class="flex flex-wrap gap-2">
            <span class="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold">{{ project.role }}</span>
            <span class="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-400">{{ project.duration }} · {{ project.location }}</span>
          </div>
        </div>
        <div class="reveal reveal-delay-1 lg:col-span-5">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p class="text-[10px] font-bold uppercase tracking-wider text-gray-500">Studio</p>
            <p class="mt-1 text-lg font-bold">{{ project.studio }}</p>
            <div v-if="asList(project.tools).length" class="mt-4">
              <p class="text-[10px] font-bold uppercase tracking-wider text-gray-500">Tools</p>
              <div class="mt-2 flex flex-wrap gap-2">
                <span
                  v-for="tool in asList(project.tools)"
                  :key="tool"
                  class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium"
                >{{ tool }}</span>
              </div>
            </div>
            <p class="mt-4 text-sm leading-relaxed text-gray-400">{{ project.studio_text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 01 PRODUCTION LEGACY -->
    <section class="relative z-10 mx-auto max-w-[90rem] border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#818CF8]">{{ project.section01_tag }}</p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">{{ project.section01_title }}</h2>
      </div>
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div class="reveal reveal-delay-1 rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-8">
          <p class="text-sm leading-relaxed text-gray-400">{{ project.section01_text }}</p>
        </div>
        <div class="reveal reveal-delay-2 rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-4">
          <p class="text-xs font-bold uppercase tracking-wider text-[#818CF8]">{{ project.section01_continuity_title }}</p>
          <p class="mt-3 text-sm leading-relaxed text-gray-400">{{ project.section01_continuity_text }}</p>
        </div>
      </div>
    </section>

    <!-- 02 ENVIRONMENT -->
    <section class="relative z-10 mx-auto max-w-[90rem] border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#818CF8]">{{ project.section02_tag }}</p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">{{ project.section02_title }}</h2>
      </div>
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div class="reveal reveal-delay-1 rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-8">
          <p class="text-xs font-bold uppercase tracking-wider text-[#818CF8]">Natural Assets</p>
          <p class="mt-3 text-sm leading-relaxed text-gray-400">{{ project.section02_assets_text }}</p>
          <div class="mt-6 flex gap-4">
            <div v-for="(label, i) in asList(project.asset_labels)" :key="label" class="text-center">
              <div
                class="h-16 w-16 rounded-xl"
                :class="['bg-red-900/60', 'bg-emerald-900/60', 'bg-amber-900/60'][i]"
              />
              <p class="mt-2 text-[10px] font-bold uppercase tracking-wider text-gray-500">{{ label }}</p>
            </div>
          </div>
        </div>
        <div class="reveal reveal-delay-2 rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-4">
          <p class="text-xs font-bold uppercase tracking-wider text-[#818CF8]">Incidental Characters</p>
          <p class="mt-3 text-sm leading-relaxed text-gray-400">{{ project.section02_characters_text }}</p>
          <div class="mt-6 flex gap-3">
            <span v-for="n in 3" :key="n" class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs text-gray-500">◉</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 03 PIPELINE -->
    <section class="relative z-10 mx-auto max-w-[90rem] border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#818CF8]">{{ project.section03_tag }}</p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">{{ project.section03_title }}</h2>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(item, index) in asPipeline(project.pipeline_items)"
          :key="item.title"
          class="reveal rounded-2xl border border-white/10 bg-white/5 p-5"
          :class="{ 'reveal-delay-1': index % 2 === 1, 'reveal-delay-2': index % 3 === 2 }"
        >
          <p class="text-xs font-bold uppercase tracking-wider text-[#818CF8]">{{ item.title }}</p>
          <p class="mt-3 text-sm leading-relaxed text-gray-400">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <!-- 04 TIMELINE -->
    <section class="relative z-10 mx-auto max-w-[90rem] border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#818CF8]">{{ project.section04_tag }}</p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">{{ project.section04_title }}</h2>
      </div>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div
          v-for="(item, index) in asTimeline(project.timeline_items)"
          :key="item.period"
          class="reveal rounded-2xl border border-white/10 bg-white/5 p-6"
          :class="{ 'reveal-delay-1': index === 1 }"
        >
          <p class="text-sm font-bold text-[#818CF8]">{{ item.period }}</p>
          <h3 class="mt-2 text-lg font-bold">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-gray-400">{{ item.text }}</p>
          <a
            v-if="item.link_label"
            :href="item.link_url || '#'"
            class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#818CF8] transition-colors hover:text-white"
          >
            {{ item.link_label }} →
          </a>
        </div>
      </div>
      <p v-if="project.footnote" class="reveal mt-8 text-center text-xs text-gray-600">{{ project.footnote }}</p>
    </section>

    <ProjectFooter />
  </main>
</template>
