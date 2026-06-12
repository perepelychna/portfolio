<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

useRevealOnScroll()

const parallaxY = ref(0)
let scrollRaf = 0

function asList(value: unknown): string[] {
  return Array.isArray(value) ? (value as string[]) : []
}

function onScroll() {
  cancelAnimationFrame(scrollRaf)
  scrollRaf = requestAnimationFrame(() => {
    parallaxY.value = Math.min(window.scrollY * 0.15, 60)
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
  <main
    class="relative min-h-screen overflow-hidden bg-[#050508] font-sans text-white antialiased"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,0.18)_0%,transparent_55%)]"
      :style="{ transform: `translate3d(0, ${parallaxY}px, 0)` }"
    />

    <header
      class="sticky top-0 z-50 border-b border-white/5 bg-[#050508]/85 backdrop-blur-md"
    >
      <div
        class="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <NuxtLink
          to="/"
          class="group inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/10"
        >
          <span
            class="transition-transform duration-300 group-hover:-translate-x-0.5"
          >
            ←
          </span>
          Back to Home
        </NuxtLink>
        <img
          src="/assets/logo_example.png"
          alt="Olena Perepelychna"
          class="h-10 w-auto brightness-200 invert"
        />
      </div>
    </header>

    <!-- HERO -->
    <section class="relative z-10 mx-auto max-w-[90rem] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
        <div class="space-y-5 lg:col-span-7">
          <p
            class="hero-animate text-xs font-bold uppercase tracking-[0.28em] text-[#818CF8]"
          >
            Project 02
          </p>
          <h1
            class="hero-animate hero-animate-delay-1 text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl"
          >
            {{ project.title }}
          </h1>
          <p
            class="hero-animate hero-animate-delay-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300 sm:text-base"
          >
            {{ project.subtitle }}
          </p>
          <p class="hero-animate hero-animate-delay-3 text-sm text-[#818CF8]">
            {{ project.hero_tagline }}
          </p>
          <p class="max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            {{ project.hero_description || project.challenge_text }}
          </p>
          <div class="flex flex-wrap gap-2 pt-2">
            <span
              class="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium"
            >
              {{ project.role }}
            </span>
            <span
              class="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300"
            >
              {{ project.duration }}
            </span>
          </div>
        </div>
        <div class="reveal flex justify-center lg:col-span-5 lg:justify-end">
          <div
            class="relative flex h-56 w-56 items-center justify-center rounded-3xl border border-white/10 bg-black/50 shadow-2xl shadow-indigo-500/20 sm:h-64 sm:w-64"
          >
            <div
              class="absolute h-40 w-40 animate-pulse rounded-full border border-indigo-500/40"
            />
            <div class="h-24 w-24 rounded-full bg-indigo-600/25 blur-sm" />
            <p class="absolute bottom-5 px-4 text-center text-[10px] text-gray-400">
              Real-time brain activity monitoring
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROBLEM -->
    <section class="relative z-10 mx-auto max-w-[90rem] border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8 max-w-3xl">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#818CF8]">
          01 — Problem
        </p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">
          {{ project.challenge_title }}
        </h2>
        <p class="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
          {{ project.challenge_text }}
        </p>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          v-for="(card, index) in asList(project.problem_cards)"
          :key="card"
          class="reveal rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-500/30"
          :class="{
            'reveal-delay-1': index === 1,
            'reveal-delay-2': index === 2,
          }"
        >
          <div
            class="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-xs font-bold text-[#818CF8]"
          >
            0{{ index + 1 }}
          </div>
          <p class="text-sm leading-relaxed text-gray-300">{{ card }}</p>
        </div>
      </div>
    </section>

    <!-- JOURNEY -->
    <section class="relative z-10 mx-auto max-w-[90rem] border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div class="reveal">
          <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#818CF8]">
            02 — Journey
          </p>
          <h2 class="mt-2 text-2xl font-bold">{{ project.journey_title }}</h2>
          <ul class="mt-6 space-y-4">
            <li
              v-for="(step, index) in asList(project.journey_steps)"
              :key="step"
              class="flex gap-4 text-sm text-gray-300"
            >
              <span
                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-bold text-[#818CF8]"
              >
                {{ index + 1 }}
              </span>
              {{ step }}
            </li>
          </ul>
        </div>
        <div
          class="reveal reveal-delay-1 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <p class="text-sm leading-relaxed text-gray-300">
            From clinical imaging systems to wearable neuro-interaction — the
            interface translates complex signals into human-readable patterns.
          </p>
          <div class="mt-6 grid grid-cols-4 gap-3">
            <div
              v-for="icon in ['🧠', '❤️', '🏠', '〰️']"
              :key="icon"
              class="flex aspect-square items-center justify-center rounded-xl border border-white/10 bg-black/40 text-xl transition-transform duration-300 hover:scale-105"
            >
              {{ icon }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- METRICS -->
    <section class="relative z-10 mx-auto max-w-[90rem] border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#818CF8]">
          03 — Metrics
        </p>
        <h2 class="mt-2 text-2xl font-bold">{{ project.metrics_title }}</h2>
      </div>
      <div class="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div
          v-for="(metric, index) in asList(project.metric_cards)"
          :key="metric"
          class="reveal rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-500 hover:-translate-y-1"
          :class="{ 'reveal-delay-1': index % 2 === 1 }"
        >
          <p class="text-xs font-bold uppercase text-[#818CF8]">Metric</p>
          <p class="mt-2 text-sm font-semibold">{{ metric }}</p>
        </div>
      </div>
      <div
        class="reveal reveal-delay-2 rounded-2xl bg-[#6366F1] px-6 py-5 text-center text-sm font-medium sm:text-base"
      >
        {{ project.metrics_banner }}
      </div>
      <div
        class="reveal reveal-delay-3 mt-6 overflow-hidden rounded-2xl border border-white/10"
      >
        <div
          class="grid grid-cols-3 bg-white/5 px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400"
        >
          <span>Date</span><span>Heart Rate</span><span>Sleep Quality</span>
        </div>
        <div
          v-for="row in [
            ['Mon', '72 bpm', 'Good'],
            ['Tue', '68 bpm', 'Fair'],
            ['Wed', '70 bpm', 'Good'],
          ]"
          :key="row[0]"
          class="grid grid-cols-3 border-t border-white/5 px-4 py-3 text-sm text-gray-300"
        >
          <span>{{ row[0] }}</span><span>{{ row[1] }}</span><span>{{ row[2] }}</span>
        </div>
      </div>
    </section>

    <!-- TECHNOLOGY -->
    <section class="relative z-10 mx-auto max-w-[90rem] border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div class="reveal lg:col-span-5">
          <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#818CF8]">
            04 — Technology
          </p>
          <h2 class="mt-2 text-2xl font-bold">{{ project.tech_title }}</h2>
          <ul class="mt-6 space-y-4">
            <li
              v-for="(feature, index) in asList(project.tech_features)"
              :key="feature"
              class="flex gap-3 text-sm text-gray-300"
            >
              <span class="font-bold text-[#818CF8]">{{ index + 1 }}.</span>
              {{ feature }}
            </li>
          </ul>
        </div>
        <div
          class="reveal reveal-delay-1 rounded-2xl border border-white/10 bg-black/40 p-6 lg:col-span-7"
        >
          <div class="flex items-center justify-center">
            <div class="relative h-44 w-44">
              <div
                class="absolute inset-0 rounded-full border-4 border-indigo-500/30"
              />
              <div
                class="absolute inset-4 rounded-full border-4 border-indigo-500/50"
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-3xl font-bold text-[#818CF8]">78%</span>
              </div>
            </div>
          </div>
          <p class="mt-4 text-center text-xs text-gray-400">Brain Activity</p>
          <div class="mt-6 grid grid-cols-3 gap-3 text-center">
            <div class="rounded-xl bg-white/5 p-3">
              <p class="text-lg font-bold text-[#818CF8]">24h</p>
              <p class="text-[10px] text-gray-400">Monitoring</p>
            </div>
            <div class="rounded-xl bg-white/5 p-3">
              <p class="text-lg font-bold text-[#818CF8]">12</p>
              <p class="text-[10px] text-gray-400">Sessions</p>
            </div>
            <div class="rounded-xl bg-white/5 p-3">
              <p class="text-lg font-bold text-[#818CF8]">3</p>
              <p class="text-[10px] text-gray-400">Alerts</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AI -->
    <section class="relative z-10 mx-auto max-w-[90rem] border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#818CF8]">
          05 — AI
        </p>
        <h2 class="mt-2 text-2xl font-bold">{{ project.ai_title }}</h2>
      </div>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div
          class="reveal reveal-delay-1 overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-4 lg:col-span-8"
        >
          <svg
            class="h-40 w-full opacity-80 sm:h-52"
            viewBox="0 0 400 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60 Q50 20 100 55 T200 45 T300 70 T400 40"
              fill="none"
              stroke="#818CF8"
              stroke-width="2"
            />
            <path
              d="M0 80 Q50 90 100 75 T200 85 T300 60 T400 70"
              fill="none"
              stroke="#6366F1"
              stroke-width="1"
              opacity="0.5"
            />
          </svg>
        </div>
        <div class="space-y-3 lg:col-span-4">
          <div
            v-for="(card, index) in asList(project.ai_cards)"
            :key="card"
            class="reveal rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-500 hover:border-indigo-500/30"
            :class="{ 'reveal-delay-1': index === 1, 'reveal-delay-2': index === 2 }"
          >
            <p class="text-sm font-semibold text-[#818CF8]">{{ card }}</p>
            <p class="mt-1 text-xs text-gray-400">
              Pattern detection across sessions and environments.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section class="relative z-10 mx-auto max-w-[90rem] border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#818CF8]">
          06 — Philosophy
        </p>
        <h2 class="mt-2 text-2xl font-bold">{{ project.philosophy_title }}</h2>
      </div>
      <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          v-for="(card, index) in asList(project.philosophy_cards)"
          :key="card"
          class="reveal rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
          :class="{ 'reveal-delay-1': index === 1, 'reveal-delay-2': index === 2 }"
        >
          <p class="text-sm font-semibold">{{ card }}</p>
        </div>
      </div>
      <div
        class="reveal reveal-delay-1 rounded-2xl border border-white/10 bg-white/5 p-8 text-center sm:p-12"
      >
        <p class="text-lg font-medium leading-relaxed text-gray-200 sm:text-xl">
          "{{ project.philosophy_quote }}"
        </p>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div
          v-for="(outcome, index) in asList(project.outcome_cards)"
          :key="outcome"
          class="reveal reveal-delay-2 rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
          :class="{ 'reveal-delay-3': index === 1 }"
        >
          <p class="text-sm font-semibold text-[#818CF8]">{{ outcome }}</p>
        </div>
      </div>
    </section>

    <ProjectFooter />
  </main>
</template>
