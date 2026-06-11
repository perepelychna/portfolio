<script setup lang="ts">
// Принимаем структурированный объект проекта как входной параметр (prop)
defineProps<{
  project: any;
}>();
</script>

<template>
  <main class="min-h-screen bg-white">
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
                >www.inserviss.app</a
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

    <section
      class="mx-auto max-w-[90rem] px-4 py-12 sm:px-6 lg:px-8 border-t border-gray-100"
    >
      <div
        class="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between"
      >
        <div>
          <p
            class="text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]"
          >
            {{ project.challenge_num }} — {{ project.challenge_tag }}
          </p>
          <h2 class="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {{ project.challenge_title }}
          </h2>
        </div>
        <p class="max-w-md text-sm text-gray-500">
          {{ project.challenge_subtitle }}
        </p>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 gap-5">
        <div
          class="rounded-2xl border border-indigo-500/20 bg-white p-6 sm:p-8 lg:col-span-8 space-y-4 shadow-xs"
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

    <section class="mx-auto max-w-[90rem] px-4 py-6">
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
            class="flex h-12 w-12 items-center justify-center rounded-full bg-[#6366F1] font-bold text-white shadow-xs"
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
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
