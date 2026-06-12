<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <main class="min-h-screen bg-white text-[#0B0B0F] font-sans antialiased">
    <!-- NAVIGATION BAR -->
    <header
      class="sticky top-0 z-50 border-b border-gray-100/80 bg-white/90 backdrop-blur-md"
    >
      <div
        class="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <NuxtLink
          to="/"
          class="group inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-ink shadow-xs transition-all duration-300 hover:border-indigo-500/40 hover:bg-gray-50"
        >
          <span
            class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs transition-transform duration-300 group-hover:-translate-x-0.5"
            >←</span
          >
          Back to Home
        </NuxtLink>
        <img
          src="/assets/logo_example.png"
          alt="Olena Perepelychna"
          class="h-10 w-auto"
        />
      </div>
    </header>

    <!-- HERO SECTION -->
    <section class="mx-auto max-w-[90rem] px-4 py-12 sm:px-6 lg:px-8">
      <div
        class="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-white p-6 sm:p-10 lg:p-12 shadow-soft bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.07)_0%,transparent_45%)]"
      >
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div class="lg:col-span-7 space-y-5">
            <p
              class="text-xs font-bold uppercase tracking-[0.32em] text-gray-400"
            >
              Project 01
            </p>
            <h1
              class="text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] uppercase"
            >
              {{ project.title }}
            </h1>
            <p class="text-sm font-medium text-[#4F46E5] sm:text-base">
              {{ project.subtitle }}
            </p>
            <div class="flex flex-wrap gap-2 pt-2">
              <span
                class="rounded-full bg-[#6366F1] px-4 py-1.5 text-xs font-semibold text-white"
                >{{ project.role }}</span
              >
              <span
                class="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600"
                >{{ project.duration }}</span
              >
              <a
                :href="project.url"
                target="_blank"
                class="rounded-full border border-blue-300 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-100"
                >Open Live Site</a
              >
            </div>
          </div>
          <div class="lg:col-span-5">
            <div class="grid grid-cols-2 gap-3">
              <div class="rounded-xl border border-gray-100 bg-[#F3F4F6] p-4">
                <p
                  class="text-[10px] font-bold uppercase tracking-wider text-gray-400"
                >
                  Markets
                </p>
                <p class="mt-1 text-sm font-semibold text-ink">
                  {{ project.markets }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CHALLENGE SECTION -->
    <section class="mx-auto max-w-[90rem] px-4 py-12 border-t border-gray-100">
      <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]">
        {{ project.challenge_num }} — {{ project.challenge_tag }}
      </p>
      <h2 class="text-2xl font-bold mt-2 text-ink">
        {{ project.challenge_title }}
      </h2>
      <p class="text-sm text-gray-500 mt-1">{{ project.challenge_subtitle }}</p>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
        <div
          class="rounded-2xl border border-indigo-500/20 bg-white p-6 lg:col-span-8 space-y-4 shadow-xs"
        >
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Core insight
          </p>
          <p class="text-sm leading-relaxed text-gray-600">
            {{ project.challenge_core_insight }}
          </p>
          <p
            class="text-sm font-semibold text-ink border-t border-gray-100 pt-3"
          >
            {{ project.challenge_solution }}
          </p>
        </div>
      </div>
    </section>

    <!-- RESULTS INFOGRAPHICS -->
    <section class="mx-auto max-w-[90rem] px-4 py-12 border-t border-gray-100">
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-6">
        <div
          class="rounded-2xl border border-indigo-500/10 bg-gradient-to-br from-indigo-50/20 to-white p-8 text-center shadow-xs"
        >
          <p class="text-4xl font-bold text-[#6366F1]">
            {{ project.stat_hours_val }}
          </p>
          <p class="mt-2 text-sm font-medium text-ink">
            {{ project.stat_hours_lbl }}
          </p>
        </div>
        <div
          class="rounded-2xl border border-indigo-500/10 bg-gradient-to-br from-indigo-50/20 to-white p-8 text-center shadow-xs"
        >
          <p class="text-4xl font-bold text-[#6366F1]">
            {{ project.stat_lessons_val }}
          </p>
          <p class="mt-2 text-sm font-medium text-ink">
            {{ project.stat_lessons_lbl }}
          </p>
        </div>
        <div
          class="rounded-2xl border border-indigo-500/10 bg-gradient-to-br from-indigo-50/20 to-white p-8 text-center shadow-xs"
        >
          <p class="text-4xl font-bold text-[#6366F1]">
            {{ project.stat_webinars_val }}
          </p>
          <p class="mt-2 text-sm font-medium text-ink">
            {{ project.stat_webinars_lbl }}
          </p>
        </div>
      </div>
    </section>

    <!-- TESTIMONIAL -->
    <section class="mx-auto max-w-[90rem] px-4 py-12 border-t border-gray-100">
      <div
        class="rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6 sm:p-10 shadow-xs"
      >
        <blockquote
          class="text-sm italic leading-relaxed text-gray-600 sm:text-base"
        >
          "{{ project.testimonial_quote }}"
        </blockquote>
        <div class="flex items-center gap-4 pt-4">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-full bg-[#6366F1] font-bold text-white"
          >
            A
          </div>
          <div>
            <p class="font-bold text-ink text-sm">
              {{ project.testimonial_author }}
            </p>
            <p class="text-xs text-gray-500 font-medium">
              {{ project.testimonial_role }}
            </p>
            <p class="text-[11px] text-gray-400">
              {{ project.testimonial_meta }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
