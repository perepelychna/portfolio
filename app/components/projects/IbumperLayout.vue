<script setup lang="ts">
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

defineProps({
  project: { type: Object, required: true },
})

useRevealOnScroll()

function asList(value: unknown): string[] {
  return Array.isArray(value) ? (value as string[]) : []
}
</script>

<template>
  <main class="min-h-screen bg-[#F9FAFB] font-sans text-[#0B0B0F] antialiased">
    <header class="sticky top-0 z-50 border-b border-gray-100/80 bg-white/90 backdrop-blur-md">
      <div class="mx-auto flex max-w-[90rem] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/"
          class="group inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:text-[#6366F1]"
        >
          <span class="transition-transform group-hover:-translate-x-0.5">←</span>
          Back to Home
        </NuxtLink>
        <img src="/assets/logo_example.png" alt="Logo" class="h-9 w-auto" />
      </div>
    </header>

    <!-- HERO -->
    <section class="mx-auto max-w-[90rem] px-4 py-10 sm:px-6 lg:px-8">
      <div class="reveal rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-soft sm:p-10">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="space-y-5 lg:col-span-7">
            <p class="text-xs font-bold uppercase tracking-[0.28em] text-[#6366F1]">Project 01</p>
            <h1 class="text-4xl font-bold uppercase tracking-tight sm:text-5xl">{{ project.title }}</h1>
            <p class="text-base font-medium text-[#4F46E5]">{{ project.subtitle }}</p>
            <p class="text-sm leading-relaxed text-gray-600 sm:text-base">{{ project.hero_description }}</p>
            <div class="flex flex-wrap gap-2 pt-1">
              <span class="rounded-full bg-[#6366F1] px-4 py-1.5 text-xs font-semibold text-white">{{ project.role }}</span>
              <span class="rounded-full border border-gray-200 bg-[#F3F4F6] px-4 py-1.5 text-xs font-medium text-gray-600">{{ project.duration }}</span>
            </div>
          </div>
          <div class="space-y-3 lg:col-span-5">
            <div class="rounded-xl border border-gray-100 bg-[#F3F4F6] p-4">
              <p class="text-[10px] font-bold uppercase tracking-wider text-gray-400">Project</p>
              <p class="mt-1 text-sm font-semibold">{{ project.project_type }}</p>
            </div>
            <div class="rounded-xl border border-gray-100 bg-[#F3F4F6] p-4">
              <p class="text-[10px] font-bold uppercase tracking-wider text-gray-400">Design</p>
              <p class="mt-1 text-sm font-semibold">{{ project.design_style }}</p>
            </div>
            <div class="rounded-xl border border-gray-100 bg-[#F3F4F6] p-4">
              <p class="text-[10px] font-bold uppercase tracking-wider text-gray-400">Deliverables</p>
              <p class="mt-1 text-sm font-semibold">{{ project.deliverables }}</p>
            </div>
            <div v-if="asList(project.tools).length" class="rounded-xl border border-gray-100 bg-[#F3F4F6] p-4">
              <p class="text-[10px] font-bold uppercase tracking-wider text-gray-400">Tools</p>
              <div class="mt-2 flex gap-2">
                <span
                  v-for="tool in asList(project.tools)"
                  :key="tool"
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#6366F1] shadow-xs"
                >{{ tool }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 01 PRODUCT IDENTITY -->
    <section class="mx-auto max-w-[90rem] border-t border-gray-200 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">{{ project.section01_tag }}</p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">{{ project.section01_title }}</h2>
      </div>
      <div class="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div class="reveal reveal-delay-1 rounded-2xl border border-gray-100 bg-white p-6 lg:col-span-7">
          <p class="text-sm leading-relaxed text-gray-600">{{ project.section01_text }}</p>
        </div>
        <div class="reveal reveal-delay-2 rounded-2xl border border-gray-100 bg-white p-6 text-center lg:col-span-5">
          <p class="text-5xl font-bold text-[#6366F1]">{{ project.section01_stat_val }}</p>
          <p class="mt-2 text-sm font-medium text-gray-700">{{ project.section01_stat_lbl }}</p>
          <p class="mt-3 text-xs text-gray-500">{{ project.section01_stat_text }}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div class="reveal rounded-2xl border border-gray-100 bg-white p-6">
          <div class="mx-auto flex h-40 w-20 items-center justify-center rounded-2xl bg-gradient-to-b from-gray-100 to-gray-200">
            <div class="h-32 w-8 rounded-lg bg-gray-300 shadow-inner" />
          </div>
        </div>
        <div class="reveal reveal-delay-1 rounded-2xl border border-gray-100 bg-white p-6">
          <p class="text-xs font-bold uppercase tracking-wider text-[#6366F1]">Material System</p>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li v-for="item in asList(project.material_items)" :key="item" class="flex gap-2">
              <span class="text-[#6366F1]">•</span>{{ item }}
            </li>
          </ul>
        </div>
        <div class="reveal reveal-delay-2 rounded-2xl border border-gray-100 bg-white p-6">
          <p class="text-xs font-bold uppercase tracking-wider text-[#6366F1]">About the Company</p>
          <p class="mt-4 text-sm leading-relaxed text-gray-600">{{ project.company_text }}</p>
        </div>
      </div>
    </section>

    <!-- 02 ONLINE STORE -->
    <section class="mx-auto max-w-[90rem] border-t border-gray-200 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">{{ project.section02_tag }}</p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">{{ project.section02_title }}</h2>
        <p class="mt-3 text-sm text-gray-600">{{ project.section02_intro }}</p>
      </div>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div class="reveal reveal-delay-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-soft lg:col-span-8">
          <p class="mb-4 text-center text-sm font-bold">iBUMPER</p>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div v-for="(color, i) in ['bg-gray-200', 'bg-indigo-200', 'bg-amber-200']" :key="i" class="rounded-xl border border-gray-100 p-4">
              <div class="h-24 rounded-lg" :class="color" />
              <p class="mt-3 text-sm font-bold">BUMPER {{ ['Classic', 'Pro', 'Gold'][i] }}</p>
              <p class="text-xs text-gray-500">from CHF {{ [49, 69, 89][i] }}</p>
            </div>
          </div>
        </div>
        <div class="reveal reveal-delay-2 rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6 lg:col-span-4">
          <p class="text-xs font-bold uppercase tracking-wider text-[#6366F1]">Store Architecture</p>
          <ul class="mt-4 space-y-3">
            <li
              v-for="item in asList(project.store_architecture)"
              :key="item"
              class="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-medium"
            >
              {{ item }}
              <span class="text-xs text-gray-400">2016</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 03 SMM -->
    <section class="mx-auto max-w-[90rem] border-t border-gray-200 px-4 py-14 sm:px-6 lg:px-8">
      <div class="reveal mb-8">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">{{ project.section03_tag }}</p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">{{ project.section03_title }}</h2>
      </div>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div class="reveal rounded-2xl border border-gray-100 bg-white p-5">
          <p class="text-xs font-bold text-gray-400">Product Shoot — 2016</p>
          <p class="mt-2 text-sm text-gray-600">{{ project.section03_product_text }}</p>
          <div class="mt-4 h-48 rounded-xl bg-gradient-to-b from-gray-100 to-gray-200" />
        </div>
        <div class="reveal reveal-delay-1 rounded-2xl border border-gray-100 bg-white p-5">
          <p class="text-xs font-bold text-gray-400">SMM — 2016</p>
          <p class="mt-2 text-sm text-gray-600">{{ project.section03_smm_text }}</p>
          <div class="mt-4 grid grid-cols-2 gap-2">
            <div v-for="c in ['bg-sky-100', 'bg-indigo-100', 'bg-amber-100', 'bg-gray-100']" :key="c" class="aspect-square rounded-lg" :class="c" />
          </div>
        </div>
        <div class="reveal reveal-delay-2 rounded-2xl border border-gray-100 bg-white p-5">
          <p class="text-xs font-bold uppercase text-[#6366F1]">New Colors</p>
          <p class="mt-2 text-sm text-gray-600">{{ project.section03_colors_text }}</p>
          <div class="mt-6 flex gap-3">
            <span v-for="c in ['bg-sky-300', 'bg-gray-600', 'bg-amber-300', 'bg-pink-300']" :key="c" class="h-10 w-10 rounded-full" :class="c" />
          </div>
        </div>
      </div>
    </section>

    <ProjectFooter />
  </main>
</template>
