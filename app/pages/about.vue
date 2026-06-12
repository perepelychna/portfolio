<script setup lang="ts">
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'
import { fetchAbout, type AboutRecord } from '~/types/about'

const { data: about } = await useAsyncData<AboutRecord>('about-page', () =>
  fetchAbout(),
)

const content = computed(() => about.value ?? ({} as AboutRecord))

useRevealOnScroll()

useSeoMeta({
  title: `${content.value.name || 'About'} — Olena Perepelychna`,
  description: content.value.bio,
})
</script>

<template>
  <div class="bg-white font-sans text-[#0B0B0F] antialiased">
    <!-- NAVIGATION -->
    <header
      class="sticky top-0 z-50 border-b border-gray-100/80 bg-white/90 backdrop-blur-md"
    >
      <div
        class="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <NuxtLink
          to="/"
          class="group flex min-h-[44px] items-center gap-3 transition-opacity hover:opacity-85"
        >
          <img
            src="/assets/logo_example.png"
            alt="Olena Perepelychna"
            class="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
          />
          <span class="text-sm font-semibold tracking-tight sm:text-[15px]">
            Olena Perepelychna
          </span>
        </NuxtLink>

        <nav
          class="hidden items-center gap-8 text-sm font-medium text-gray-500 md:flex"
        >
          <NuxtLink
            to="/"
            class="min-h-[44px] leading-[44px] transition-colors hover:text-[#0B0B0F]"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="min-h-[44px] leading-[44px] text-[#6366F1]"
          >
            About
          </NuxtLink>
          <a
            href="/#selected-work"
            class="min-h-[44px] leading-[44px] transition-colors hover:text-[#0B0B0F]"
          >
            Projects
          </a>
          <a
            href="#experience"
            class="min-h-[44px] leading-[44px] transition-colors hover:text-[#0B0B0F]"
          >
            Experience
          </a>
          <a
            href="#contact"
            class="min-h-[44px] leading-[44px] transition-colors hover:text-[#0B0B0F]"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>

    <main>
      <!-- HERO -->
      <section class="mx-auto max-w-[90rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div class="reveal space-y-6 lg:col-span-7">
            <p class="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">
              About
            </p>
            <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {{ content.name }}
            </h1>
            <p class="text-base font-medium text-[#4F46E5] sm:text-lg">
              {{ content.role }}
            </p>
            <p class="max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              {{ content.bio }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                class="rounded-full bg-indigo-500/10 px-3 py-1.5 text-[11px] font-semibold text-indigo-700"
              >
                Brand &amp; Identity
              </span>
              <span
                class="rounded-full bg-indigo-500/10 px-3 py-1.5 text-[11px] font-semibold text-indigo-700"
              >
                Product Design
              </span>
              <span
                class="rounded-full bg-indigo-500/10 px-3 py-1.5 text-[11px] font-semibold text-indigo-700"
              >
                UI/UX
              </span>
            </div>

            <div class="flex flex-wrap items-center gap-3 pt-2">
              <a
                :href="content.resume_url || '#'"
                class="inline-flex min-h-[44px] items-center rounded-full bg-[#6366F1] px-5 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4F46E5]"
              >
                Download Resume
              </a>
              <span
                class="inline-flex min-h-[44px] items-center rounded-full border border-gray-200 bg-[#F3F4F6] px-4 text-sm text-gray-600"
              >
                {{ content.location }}
              </span>
              <span
                class="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 text-sm font-medium text-emerald-700"
              >
                <span class="h-2 w-2 rounded-full bg-emerald-500" />
                Open for projects
              </span>
            </div>

            <div class="flex flex-wrap gap-3">
              <a
                href="#contact"
                class="group inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#6366F1] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#4F46E5]"
              >
                Get in Touch
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <NuxtLink
                to="/"
                class="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-indigo-500/40"
              >
                <span class="transition-transform group-hover:-translate-x-1">←</span>
                Back to Portfolio
              </NuxtLink>
            </div>
          </div>

          <div class="reveal reveal-delay-1 flex justify-center lg:col-span-5 lg:justify-end">
            <img
              src="/assets/My_avatar_photo.png"
              alt="Olena Perepelychna"
              class="h-72 w-56 rounded-[1.75rem] border border-gray-200 object-cover object-top shadow-soft sm:h-96 sm:w-72"
            />
          </div>
        </div>
      </section>

      <!-- PHILOSOPHY -->
      <section class="mx-auto max-w-[90rem] border-t border-gray-100 px-4 py-14 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div class="reveal lg:col-span-7">
            <p class="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">
              Design Philosophy
            </p>
            <h2 class="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              "{{ content.philosophy_quote }}"
            </h2>
            <p class="mt-6 text-sm leading-relaxed text-gray-600 sm:text-base">
              {{ content.philosophy_text }}
            </p>
          </div>

          <div class="space-y-4 lg:col-span-5">
            <div
              class="reveal reveal-delay-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition-transform duration-500 hover:-translate-y-1"
            >
              <p class="text-4xl font-bold text-[#0B0B0F]">
                {{ content.stat_years_value }}
              </p>
              <p class="mt-2 text-sm text-gray-500">{{ content.stat_years_label }}</p>
            </div>
            <div
              class="reveal reveal-delay-2 rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition-transform duration-500 hover:-translate-y-1"
            >
              <p class="text-4xl font-bold text-[#0B0B0F]">
                {{ content.stat_projects_value }}
              </p>
              <p class="mt-2 text-sm text-gray-500">
                {{ content.stat_projects_label }}
              </p>
            </div>
            <div
              class="reveal reveal-delay-3 rounded-2xl bg-[#6366F1] p-6 text-white shadow-lg shadow-indigo-500/25"
            >
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-200">
                Contact Information
              </p>
              <p class="mt-3 text-sm font-semibold">
                <a
                  :href="`mailto:${content.email}`"
                  class="transition-opacity hover:opacity-80"
                >
                  {{ content.email }}
                </a>
              </p>
              <p class="mt-2 text-sm text-indigo-100">{{ content.location }}</p>
              <p class="mt-4 text-xs text-indigo-200">
                <a
                  :href="`tel:${content.phone?.replace(/\s/g, '')}`"
                  class="transition-opacity hover:opacity-80"
                >
                  {{ content.phone }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- EXPERIENCE -->
      <section
        id="experience"
        class="mx-auto max-w-[90rem] border-t border-gray-100 px-4 py-14 sm:px-6 lg:px-8"
      >
        <div class="reveal mb-10">
          <p class="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">
            Experience
          </p>
          <h2 class="mt-2 text-2xl font-bold sm:text-3xl">Selected Experience</h2>
        </div>

        <div class="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <component
            :is="item.link ? 'NuxtLink' : 'div'"
            v-for="(item, index) in content.experience_featured || []"
            :key="item.company"
            v-bind="item.link ? { to: item.link } : {}"
            class="reveal group block rounded-[1.75rem] border border-gray-100 bg-[#F3F4F6] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-8"
            :class="index === 1 ? 'reveal-delay-1' : ''"
          >
            <div class="flex items-start justify-between gap-4">
              <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {{ item.period }}
              </p>
              <div
                v-if="item.initials"
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6366F1] text-xs font-bold text-white"
              >
                {{ item.initials }}
              </div>
            </div>
            <h3 class="mt-4 text-xl font-bold">{{ item.company }}</h3>
            <p class="mt-1 text-sm font-medium text-[#4F46E5]">{{ item.role }}</p>
            <p class="mt-4 text-sm leading-relaxed text-gray-600">
              {{ item.description }}
            </p>
            <p
              v-if="item.link"
              class="mt-5 text-sm font-semibold text-[#6366F1] transition-colors group-hover:text-[#4F46E5]"
            >
              View case study →
            </p>
          </component>
        </div>

        <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
          <component
            :is="item.link ? 'NuxtLink' : 'div'"
            v-for="(item, index) in content.experience_other || []"
            :key="item.company"
            v-bind="item.link ? { to: item.link } : {}"
            class="reveal rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            :class="{
              'reveal-delay-1': index === 1,
              'reveal-delay-2': index === 2,
            }"
          >
            <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">
              {{ item.period }}
            </p>
            <h3 class="mt-3 text-lg font-bold">{{ item.company }}</h3>
            <p class="mt-1 text-sm font-medium text-[#4F46E5]">{{ item.role }}</p>
            <p class="mt-3 text-sm leading-relaxed text-gray-600">
              {{ item.description }}
            </p>
            <p
              v-if="item.link"
              class="mt-4 text-sm font-semibold text-[#6366F1]"
            >
              View case study →
            </p>
          </component>
        </div>
      </section>

      <!-- EDUCATION -->
      <section class="mx-auto max-w-[90rem] border-t border-gray-100 px-4 py-14 sm:px-6 lg:px-8">
        <div class="reveal mb-10">
          <p class="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">
            Education
          </p>
          <h2 class="mt-2 text-2xl font-bold sm:text-3xl">Academic Background</h2>
        </div>

        <div class="space-y-4">
          <div
            v-for="(item, index) in content.education || []"
            :key="item.school"
            class="reveal rounded-[1.75rem] border border-gray-100 bg-[#F3F4F6] p-6 sm:p-8"
            :class="{
              'reveal-delay-1': index === 1,
              'reveal-delay-2': index === 2,
            }"
          >
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
              <div class="flex gap-4 lg:col-span-8">
                <div
                  v-if="item.icon"
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-bold text-[#6366F1] shadow-xs"
                >
                  {{ item.icon }}
                </div>
                <div>
                  <h3 class="text-lg font-bold sm:text-xl">{{ item.school }}</h3>
                  <p class="mt-1 text-sm font-medium text-[#4F46E5]">
                    {{ item.degree }} · {{ item.period }}
                  </p>
                  <p class="mt-3 text-sm leading-relaxed text-gray-600">
                    {{ item.description }}
                  </p>
                </div>
              </div>
              <div
                v-if="item.tag"
                class="flex lg:col-span-4 lg:justify-end"
              >
                <span
                  class="inline-flex h-fit rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-600"
                >
                  {{ item.tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- COMPETENCIES -->
      <section class="mx-auto max-w-[90rem] border-t border-gray-100 px-4 py-14 sm:px-6 lg:px-8">
        <div class="reveal mb-10">
          <p class="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">
            Competencies &amp; Tools
          </p>
          <h2 class="mt-2 text-2xl font-bold sm:text-3xl">Skills &amp; Stack</h2>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="reveal">
            <p class="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
              Strategy
            </p>
            <ul class="mt-4 space-y-2.5 text-sm text-gray-600">
              <li
                v-for="skill in content.strategy_skills"
                :key="skill"
                class="flex gap-2"
              >
                <span class="text-[#6366F1]">•</span>{{ skill }}
              </li>
            </ul>
          </div>
          <div class="reveal reveal-delay-1">
            <p class="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
              Design &amp; UX/UI
            </p>
            <ul class="mt-4 space-y-2.5 text-sm text-gray-600">
              <li
                v-for="skill in content.design_skills"
                :key="skill"
                class="flex gap-2"
              >
                <span class="text-[#6366F1]">•</span>{{ skill }}
              </li>
            </ul>
          </div>
          <div class="reveal reveal-delay-2">
            <p class="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
              Software
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tool in content.software_tools"
                :key="tool"
                class="rounded-full bg-indigo-500/10 px-3 py-1.5 text-[11px] font-semibold text-indigo-700"
              >
                {{ tool }}
              </span>
            </div>
          </div>
          <div class="reveal reveal-delay-3">
            <p class="text-xs font-bold uppercase tracking-wider text-[#6366F1]">
              AI &amp; Motion
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tool in content.ai_tools"
                :key="tool"
                class="rounded-full bg-indigo-500/10 px-3 py-1.5 text-[11px] font-semibold text-indigo-700"
              >
                {{ tool }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div id="contact">
      <ProjectFooter />
    </div>
  </div>
</template>
