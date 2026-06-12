<script setup lang="ts">
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

useRevealOnScroll()

function asList(value: unknown): string[] {
  return Array.isArray(value) ? (value as string[]) : []
}

const marketStats = [
  { val: props.project.stat_find_val, lbl: props.project.stat_find_lbl },
  { val: props.project.stat_book_val, lbl: props.project.stat_book_lbl },
  { val: props.project.stat_provider_val, lbl: props.project.stat_provider_lbl },
  { val: props.project.stat_retain_val, lbl: props.project.stat_retain_lbl },
]

const impactStats = [
  { val: props.project.stat_hours_val, lbl: props.project.stat_hours_lbl },
  { val: props.project.stat_lessons_val, lbl: props.project.stat_lessons_lbl },
  { val: props.project.stat_webinars_val, lbl: props.project.stat_webinars_lbl },
]
</script>

<template>
  <main class="min-h-screen bg-white text-[#0B0B0F] font-sans antialiased">
    <header
      class="sticky top-0 z-50 border-b border-gray-100/80 bg-white/90 backdrop-blur-md"
    >
      <div
        class="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <NuxtLink
          to="/"
          class="group inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold shadow-xs transition-all duration-300 hover:border-indigo-500/40 hover:bg-gray-50"
        >
          <span
            class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs transition-transform duration-300 group-hover:-translate-x-0.5"
          >
            ←
          </span>
          Back to Home
        </NuxtLink>
        <img
          src="/assets/logo_example.png"
          alt="Olena Perepelychna"
          class="h-10 w-auto"
        />
      </div>
    </header>

    <!-- HERO -->
    <section class="mx-auto max-w-[90rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div
        class="reveal relative overflow-hidden rounded-[1.75rem] border border-indigo-500/15 bg-[radial-gradient(circle_at_18%_22%,rgba(99,102,241,0.09)_0%,transparent_42%)] p-6 shadow-soft sm:p-10 lg:p-12"
      >
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div class="space-y-5 lg:col-span-7">
            <p
              class="text-xs font-bold uppercase tracking-[0.32em] text-gray-400"
            >
              Project 01
            </p>
            <h1
              class="text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-[3.25rem]"
            >
              {{ project.title }}
            </h1>
            <p class="text-base font-medium text-[#4F46E5] sm:text-lg">
              {{ project.subtitle }}
            </p>
            <p class="max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              {{ project.hero_description }}
            </p>
            <div class="flex flex-wrap gap-3 pt-1">
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex min-h-[44px] items-center rounded-full bg-[#6366F1] px-6 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4F46E5]"
              >
                Visit Website
              </a>
              <span
                class="inline-flex min-h-[44px] items-center rounded-full border border-gray-200 bg-white px-5 text-sm font-medium text-gray-600"
              >
                {{ project.duration }}
              </span>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div
              class="rounded-2xl border border-gray-100 bg-[#F3F4F6] p-5 sm:p-6"
            >
              <div class="space-y-4">
                <div>
                  <p class="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Role
                  </p>
                  <p class="mt-1 text-sm font-semibold">{{ project.role }}</p>
                </div>
                <div>
                  <p class="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Timeline
                  </p>
                  <p class="mt-1 text-sm font-semibold">{{ project.duration }}</p>
                </div>
                <div>
                  <p class="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Client
                  </p>
                  <p class="mt-1 text-sm font-semibold">{{ project.client }}</p>
                </div>
                <div>
                  <p class="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Markets
                  </p>
                  <p class="mt-1 text-sm font-semibold">{{ project.markets }}</p>
                </div>
                <div v-if="asList(project.tools).length">
                  <p class="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Tools
                  </p>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <span
                      v-for="tool in asList(project.tools)"
                      :key="tool"
                      class="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-gray-600"
                    >
                      {{ tool }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CHALLENGE -->
    <section class="mx-auto max-w-[90rem] border-t border-gray-100 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8 max-w-3xl">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]">
          {{ project.challenge_num }} — {{ project.challenge_tag }}
        </p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">
          {{ project.challenge_title }}
        </h2>
        <p class="mt-2 text-sm text-gray-500">{{ project.challenge_subtitle }}</p>
      </div>

      <div class="reveal reveal-delay-1 mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div
          v-for="(stat, index) in marketStats"
          :key="index"
          class="rounded-2xl border border-indigo-500/10 bg-gradient-to-br from-indigo-50/30 to-white p-5 text-center transition-transform duration-500 hover:-translate-y-1"
        >
          <p class="text-2xl font-bold text-[#6366F1] sm:text-3xl">{{ stat.val }}</p>
          <p class="mt-2 text-xs font-medium text-gray-600 sm:text-sm">{{ stat.lbl }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div
          class="reveal reveal-delay-2 rounded-2xl border border-gray-100 bg-white p-6 shadow-xs lg:col-span-8"
        >
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Core insight
          </p>
          <p class="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            {{ project.challenge_core_insight }}
          </p>
          <p
            class="mt-4 border-t border-gray-100 pt-4 text-sm font-semibold leading-relaxed"
          >
            {{ project.challenge_solution }}
          </p>
        </div>
        <div
          class="reveal reveal-delay-3 rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6 lg:col-span-4"
        >
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Market Research
          </p>
          <ul class="mt-4 space-y-3 text-sm text-gray-600">
            <li class="flex gap-2">
              <span class="text-[#6366F1]">•</span>
              Phone booking friction for 60% of users
            </li>
            <li class="flex gap-2">
              <span class="text-[#6366F1]">•</span>
              Only 10% of providers use digital tools
            </li>
            <li class="flex gap-2">
              <span class="text-[#6366F1]">•</span>
              Language barriers for newcomers
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SOLUTION -->
    <section class="mx-auto max-w-[90rem] border-t border-gray-100 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8 max-w-3xl">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]">
          02 — Solution
        </p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">
          {{ project.solution_title }}
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
          {{ project.solution_intro }}
        </p>
      </div>

      <div class="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div
          class="reveal reveal-delay-1 rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6"
        >
          <p class="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
            Business Challenges
          </p>
          <ul class="mt-4 space-y-2.5 text-sm text-gray-600">
            <li
              v-for="item in asList(project.business_challenges)"
              :key="item"
              class="flex gap-2"
            >
              <span class="text-[#6366F1]">—</span>{{ item }}
            </li>
          </ul>
        </div>
        <div
          class="reveal reveal-delay-2 rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6"
        >
          <p class="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
            Consumer Pain Points
          </p>
          <ul class="mt-4 space-y-2.5 text-sm text-gray-600">
            <li
              v-for="item in asList(project.consumer_pain_points)"
              :key="item"
              class="flex gap-2"
            >
              <span class="text-[#6366F1]">—</span>{{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div
        class="reveal reveal-delay-3 overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-soft sm:p-6"
      >
        <div class="mb-4 flex flex-wrap items-center gap-2">
          <div class="h-10 flex-1 rounded-xl bg-[#F3F4F6] px-4 text-sm leading-10 text-gray-400">
            Search services, providers, categories…
          </div>
          <div
            class="rounded-xl bg-[#6366F1] px-4 py-2.5 text-xs font-semibold text-white"
          >
            Filter
          </div>
        </div>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div
            v-for="n in 3"
            :key="n"
            class="rounded-xl border border-gray-100 bg-[#F9FAFB] p-4"
          >
            <div class="h-20 rounded-lg bg-gradient-to-br from-indigo-100 to-white" />
            <div class="mt-3 h-3 w-2/3 rounded bg-gray-200" />
            <div class="mt-2 h-2 w-1/2 rounded bg-gray-100" />
          </div>
        </div>
      </div>
    </section>

    <!-- USER FLOW -->
    <section class="mx-auto max-w-[90rem] border-t border-gray-100 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8 max-w-3xl">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]">
          03 — User Flow
        </p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">{{ project.flow_title }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-gray-600">{{ project.flow_text }}</p>
      </div>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        <div
          class="reveal reveal-delay-1 rounded-2xl border border-gray-100 bg-[#F3F4F6] p-5 lg:col-span-5"
        >
          <p class="mb-3 text-xs font-bold uppercase text-gray-400">Service Details</p>
          <div class="space-y-2">
            <div
              v-for="label in ['Nutrition', 'Healthcare', 'Education']"
              :key="label"
              class="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm"
            >
              <span>{{ label }}</span>
              <span class="font-semibold text-[#6366F1]">Book</span>
            </div>
          </div>
        </div>
        <div
          class="reveal reveal-delay-2 rounded-2xl border border-indigo-500/15 bg-white p-5 shadow-soft lg:col-span-4"
        >
          <p class="mb-3 text-xs font-bold uppercase text-gray-400">Payment & Booking</p>
          <div class="rounded-xl bg-[#F3F4F6] p-4">
            <div class="h-3 w-1/2 rounded bg-gray-200" />
            <div class="mt-4 h-10 rounded-lg bg-[#6366F1] text-center text-sm font-semibold leading-10 text-white">
              Confirm Booking
            </div>
          </div>
        </div>
        <div
          class="reveal reveal-delay-3 flex justify-center lg:col-span-3"
        >
          <div
            class="w-[160px] rounded-2xl border border-white/10 bg-[#12121A] p-3 shadow-xl"
          >
            <div class="mx-auto mb-2 h-1.5 w-8 rounded-full bg-white/10" />
            <div class="rounded-lg bg-indigo-500/20 p-3 text-center text-[10px] text-indigo-200">
              Booking confirmed ✓
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SCHEDULER -->
    <section class="mx-auto max-w-[90rem] border-t border-gray-100 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8 max-w-3xl">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]">
          04 — Scheduling
        </p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">
          {{ project.scheduler_title }}
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
        <ul class="reveal reveal-delay-1 space-y-3 lg:col-span-3">
          <li
            v-for="feature in asList(project.scheduler_features)"
            :key="feature"
            class="flex gap-2 text-sm text-gray-600"
          >
            <span class="font-bold text-[#6366F1]">✓</span>{{ feature }}
          </li>
        </ul>
        <div
          class="reveal reveal-delay-2 rounded-2xl border border-gray-100 bg-white p-5 shadow-soft lg:col-span-6"
        >
          <div class="mb-3 flex justify-between text-xs text-gray-400">
            <span>May 2026</span><span>Week view</span>
          </div>
          <div class="grid grid-cols-7 gap-1 text-center text-[10px] text-gray-400">
            <span v-for="d in ['M','T','W','T','F','S','S']" :key="d">{{ d }}</span>
          </div>
          <div class="mt-2 grid grid-cols-7 gap-1">
            <span
              v-for="n in 14"
              :key="n"
              class="aspect-square rounded-md"
              :class="n === 12 ? 'bg-[#6366F1] text-[9px] font-bold leading-7 text-white' : 'bg-gray-50'"
            >
              {{ n <= 12 ? n : '' }}
            </span>
          </div>
        </div>
        <div
          class="reveal reveal-delay-3 rounded-2xl border border-gray-800 bg-[#12121A] p-4 text-white lg:col-span-3"
        >
          <p class="text-[10px] uppercase text-gray-400">Notification</p>
          <p class="mt-2 text-sm font-semibold">Session in 30 min</p>
          <p class="mt-1 text-xs text-gray-400">Nutrition · Anastasia K.</p>
        </div>
      </div>
    </section>

    <!-- IMPACT -->
    <section class="mx-auto max-w-[90rem] border-t border-gray-100 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8 text-center">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]">
          05 — Impact
        </p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">{{ project.impact_title }}</h2>
      </div>

      <div class="reveal reveal-delay-1 mb-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div
          v-for="(stat, index) in impactStats"
          :key="index"
          class="rounded-2xl border border-indigo-500/10 bg-gradient-to-br from-indigo-50/25 to-white p-8 text-center transition-transform duration-500 hover:-translate-y-1"
        >
          <p class="text-4xl font-bold text-[#6366F1]">{{ stat.val }}</p>
          <p class="mt-2 text-sm font-medium text-gray-700">{{ stat.lbl }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
        <div
          class="reveal reveal-delay-2 rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6 sm:p-8 lg:col-span-7"
        >
          <blockquote class="text-sm italic leading-relaxed text-gray-600 sm:text-base">
            "{{ project.testimonial_quote }}"
          </blockquote>
          <div class="mt-6 flex items-center gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full bg-[#6366F1] text-lg font-bold text-white"
            >
              A
            </div>
            <div>
              <p class="text-sm font-bold">{{ project.testimonial_author }}</p>
              <p class="text-xs text-gray-500">{{ project.testimonial_role }}</p>
              <p class="text-[11px] text-gray-400">{{ project.testimonial_meta }}</p>
            </div>
          </div>
        </div>
        <div class="reveal reveal-delay-3 flex justify-center gap-3 lg:col-span-5">
          <div
            v-for="offset in [0, 1, 2]"
            :key="offset"
            class="w-[28%] max-w-[110px] rounded-xl border border-white/10 bg-[#12121A] p-2 shadow-xl transition-transform duration-500 hover:-translate-y-2"
            :style="{ transitionDelay: `${offset * 80}ms` }"
          >
            <div class="mx-auto mb-2 h-1.5 w-8 rounded-full bg-white/10" />
            <div
              class="h-24 rounded-lg"
              :class="offset === 1 ? 'bg-indigo-500/30' : 'bg-white/5'"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- IDENTITY -->
    <section class="mx-auto max-w-[90rem] border-t border-gray-100 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]">
          06 — Brand
        </p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">
          {{ project.identity_title }}
        </h2>
      </div>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div class="reveal reveal-delay-1 rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6">
          <p class="text-xs font-bold uppercase text-gray-400">Typography</p>
          <p class="mt-3 text-sm text-gray-600">{{ project.identity_font }}</p>
        </div>
        <div
          class="reveal reveal-delay-2 flex items-center justify-center rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6"
        >
          <div
            class="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#6366F1] text-3xl font-bold text-white shadow-lg"
          >
            i
          </div>
        </div>
        <div class="reveal reveal-delay-3 rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6">
          <p class="text-xs font-bold uppercase text-gray-400">Color Palette</p>
          <p class="mt-3 text-sm text-gray-600">{{ project.identity_colors }}</p>
          <div class="mt-4 flex gap-2">
            <span class="h-8 w-8 rounded-full bg-[#6366F1]" />
            <span class="h-8 w-8 rounded-full bg-[#818CF8]" />
            <span class="h-8 w-8 rounded-full bg-[#F3F4F6] ring-1 ring-gray-200" />
          </div>
        </div>
      </div>
    </section>

    <ProjectFooter />
  </main>
</template>
