<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import {
  fetchAllProjects,
  projectMatchesFilter,
  projectTags,
  type ProjectRecord,
} from '~/types/project'

const { data: projects } = await useAsyncData<ProjectRecord[]>(
  'projects-list',
  () => fetchAllProjects(),
)

const activeFilter = ref('all')
const parallaxY = ref(0)
let scrollRaf = 0
let revealObserver: IntersectionObserver | null = null

const filteredProjects = computed(() => {
  const list = projects.value ?? []
  return list.filter((project) =>
    projectMatchesFilter(project, activeFilter.value),
  )
})

const featuredProjects = computed(() => {
  const order = ['INSERVISS', 'NEIRO TRACE']
  return order
    .map((title) =>
      filteredProjects.value.find((project) => project.title === title),
    )
    .filter((project): project is ProjectRecord => Boolean(project))
})

const gridProjects = computed(() => {
  const order = ['iBUMPER', 'Gluten Free Cooking Easy', 'Nicky Tanner']
  return order
    .map((title) =>
      filteredProjects.value.find((project) => project.title === title),
    )
    .filter((project): project is ProjectRecord => Boolean(project))
})

function setFilter(tag: string) {
  activeFilter.value = tag

  nextTick(() => {
    document
      .getElementById('selected-work')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

function projectTagList(project: ProjectRecord): string[] {
  return projectTags(project)
}

function projectInitials(title?: string): string {
  if (!title) return 'PR'
  if (title === 'Gluten Free Cooking Easy') return 'GF'
  return title.substring(0, 2).toUpperCase()
}

function projectAccentClass(title?: string): string {
  if (title === 'Gluten Free Cooking Easy') return 'bg-[#EAB308]'
  if (title === 'Nicky Tanner') return 'bg-[#3B82F6]'
  return 'bg-[#6366F1]'
}

function formatTagLabel(tag: string): string {
  const labels: Record<string, string> = {
    business: 'Business Dev',
    brand: 'Brand & Identity',
    product: 'Product Design',
    uiux: 'UI/UX',
  }
  return labels[tag] || tag
}

function onScroll() {
  cancelAnimationFrame(scrollRaf)
  scrollRaf = requestAnimationFrame(() => {
    parallaxY.value = Math.min(window.scrollY * 0.38, 140)
  })
}

function observeRevealElements() {
  if (!revealObserver) {
    return
  }

  document.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => {
    revealObserver?.observe(element)
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
  )

  observeRevealElements()
})

watch(filteredProjects, () => {
  nextTick(() => observeRevealElements())
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  cancelAnimationFrame(scrollRaf)
  revealObserver?.disconnect()
})
</script>

<template>
  <div class="bg-white font-sans text-[#0B0B0F] antialiased">
    <!-- ── NAVIGATION ──────────────────────────────────────────── -->
    <header
      class="sticky top-0 z-50 border-b border-gray-100/80 bg-white/90 backdrop-blur-md transition-shadow duration-300"
    >
      <div
        class="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <NuxtLink
          to="/"
          class="group flex min-h-[44px] items-center gap-3 transition-all duration-300 hover:opacity-85"
        >
          <img
            src="/assets/logo_example.png"
            alt="Olena Perepelychna"
            class="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10"
          />
          <span
            class="text-sm font-semibold tracking-tight text-[#0B0B0F] sm:text-[15px]"
          >
            Olena Perepelychna
          </span>
        </NuxtLink>

        <nav
          class="hidden items-center gap-8 text-sm font-medium text-gray-500 md:flex"
        >
          <NuxtLink
            to="/about"
            class="min-h-[44px] leading-[44px] transition-colors duration-300 hover:text-[#0B0B0F]"
          >
            About
          </NuxtLink>
          <a
            href="#selected-work"
            class="min-h-[44px] leading-[44px] transition-colors duration-300 hover:text-[#0B0B0F]"
          >
            Projects
          </a>
          <NuxtLink
            to="/about#experience"
            class="min-h-[44px] leading-[44px] transition-colors duration-300 hover:text-[#0B0B0F]"
          >
            Experience
          </NuxtLink>
          <a
            href="#contact"
            class="min-h-[44px] leading-[44px] transition-colors duration-300 hover:text-[#0B0B0F]"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>

    <main>
      <!-- ── HERO SECTION ────────────────────────────────────────── -->
      <section
        class="mx-auto max-w-[90rem] px-4 pb-4 pt-8 sm:px-6 sm:pb-6 sm:pt-12 lg:px-8 lg:pt-14"
      >
        <div
          class="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-white/10 shadow-soft sm:min-h-[420px] lg:min-h-[460px] lg:rounded-[2.25rem]"
        >
          <div
            class="absolute inset-0 scale-110 bg-cover bg-center will-change-transform"
            :style="{
              backgroundImage: 'url(/assets/background.png)',
              transform: `translate3d(0, ${parallaxY}px, 0)`,
            }"
          />

          <div
            class="absolute inset-0 bg-gradient-to-b from-[#05050F]/88 via-[#05050F]/58 to-[#05050F]/35"
          />

          <div
            class="relative z-10 flex min-h-[380px] flex-col justify-between sm:min-h-[420px] lg:min-h-[460px]"
          >
            <div
              class="flex flex-1 flex-col gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-16"
            >
              <div
                class="flex flex-col items-center gap-6 text-center text-white lg:items-start lg:text-left"
              >
                <div class="space-y-3">
                  <p
                    class="hero-animate text-xs font-semibold uppercase tracking-[0.28em] text-indigo-300"
                  >
                    2026
                  </p>
                  <h1
                    class="hero-animate hero-animate-delay-1 text-4xl font-bold tracking-tight drop-shadow-lg sm:text-5xl lg:text-[3.75rem] lg:leading-none"
                  >
                    Portfolio
                  </h1>
                  <p
                    class="hero-animate hero-animate-delay-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-300 sm:text-xs"
                  >
                    Soulful Brand Architect
                  </p>
                </div>
              </div>

              <div
                class="hero-animate hero-animate-delay-3 flex shrink-0 justify-center lg:justify-end"
              >
                <a
                  href="#contact"
                  class="group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#6366F1] px-7 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4F46E5] hover:shadow-indigo-500/40"
                >
                  Get in Touch
                  <span
                    class="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>

            <div
              class="border-t border-white/10 bg-black/20 px-3 py-3 backdrop-blur-sm sm:px-6"
            >
              <div
                class="no-scrollbar flex gap-1 overflow-x-auto whitespace-nowrap text-[11px] font-medium uppercase tracking-wide text-gray-300 sm:justify-center sm:gap-0 sm:text-xs sm:tracking-wider"
              >
                <button
                  type="button"
                  class="rounded-full px-3 py-2.5 transition-all duration-300 sm:px-4"
                  :class="
                    activeFilter === 'all'
                      ? 'bg-white/14 text-white'
                      : 'hover:text-white'
                  "
                  @click="setFilter('all')"
                >
                  All
                </button>
                <span class="hidden self-center text-white/20 sm:inline">|</span>
                <button
                  type="button"
                  class="rounded-full px-3 py-2.5 transition-all duration-300 sm:px-4"
                  :class="
                    activeFilter === 'business'
                      ? 'bg-white/14 text-white'
                      : 'hover:text-white'
                  "
                  @click="setFilter('business')"
                >
                  Business Development
                </button>
                <span class="hidden self-center text-white/20 sm:inline">|</span>
                <button
                  type="button"
                  class="rounded-full px-3 py-2.5 transition-all duration-300 sm:px-4"
                  :class="
                    activeFilter === 'brand'
                      ? 'bg-white/14 text-white'
                      : 'hover:text-white'
                  "
                  @click="setFilter('brand')"
                >
                  Brand &amp; Identity
                </button>
                <span class="hidden self-center text-white/20 sm:inline">|</span>
                <button
                  type="button"
                  class="rounded-full px-3 py-2.5 transition-all duration-300 sm:px-4"
                  :class="
                    activeFilter === 'product'
                      ? 'bg-white/14 text-white'
                      : 'hover:text-white'
                  "
                  @click="setFilter('product')"
                >
                  Product Design
                </button>
                <span class="hidden self-center text-white/20 sm:inline">|</span>
                <button
                  type="button"
                  class="rounded-full px-3 py-2.5 transition-all duration-300 sm:px-4"
                  :class="
                    activeFilter === 'uiux'
                      ? 'bg-white/14 text-white'
                      : 'hover:text-white'
                  "
                  @click="setFilter('uiux')"
                >
                  UI/UX
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── ABOUT TEASER ────────────────────────────────────────── -->
      <section
        id="about"
        class="reveal mx-auto max-w-[90rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
      >
        <NuxtLink to="/about" class="group block">
          <div
            class="rounded-[1.75rem] border border-gray-100 bg-[#F3F4F6] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lift sm:p-10"
          >
            <div
              class="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10"
            >
              <div class="flex justify-center lg:col-span-2 lg:justify-start">
                <img
                  src="/assets/My_avatar_photo.png"
                  alt="Olena Perepelychna"
                  class="h-28 w-28 rounded-2xl border border-gray-200 object-cover object-top shadow-sm transition-transform duration-500 group-hover:scale-[1.03] lg:h-36 lg:w-36"
                />
              </div>

              <div class="space-y-4 lg:col-span-8">
                <div>
                  <p
                    class="text-xs font-bold uppercase tracking-[0.2em] text-gray-400"
                  >
                    About
                  </p>
                  <h2
                    class="mt-1 text-2xl font-bold tracking-tight text-[#0B0B0F] sm:text-3xl"
                  >
                    Olena Perepelychna
                  </h2>
                  <p class="mt-1 text-sm font-medium text-[#4F46E5]">
                    Product Designer &middot; Brand Architect &middot;
                    Co-Founder
                  </p>
                </div>
                <p class="text-sm leading-relaxed text-gray-600 sm:text-base">
                  15 years of designing systems that outlast trends — from
                  co-founding a marketplace startup to directing brand
                  identities across industries. Driven by a philosophy of
                  <span class="font-medium text-[#0B0B0F]">
                    structural clarity over visual noise
                  </span>
                  and radical minimalism. Currently studying Interaction Design
                  at ZHdK, Zurich.
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
              </div>

              <div class="flex justify-center lg:col-span-2 lg:justify-end">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-xl text-black transition-all duration-500 group-hover:border-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white"
                >
                  →
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </section>

      <!-- ── SELECTED WORK ───────────────────────────────────────── -->
      <section
        id="selected-work"
        class="reveal mx-auto max-w-[90rem] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div
          class="mb-8 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <h2 class="text-2xl font-bold tracking-tight text-black sm:text-3xl">
            Selected Work
          </h2>

          <div class="flex flex-wrap gap-2">
            <button
              v-for="filter in [
                { id: 'all', label: 'All' },
                { id: 'business', label: 'Business Dev' },
                { id: 'brand', label: 'Brand & Identity' },
                { id: 'product', label: 'Product Design' },
                { id: 'uiux', label: 'UI/UX' },
              ]"
              :key="filter.id"
              type="button"
              class="rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm"
              :class="
                activeFilter === filter.id
                  ? 'bg-[#6366F1] text-white shadow-md shadow-indigo-500/25'
                  : 'border border-gray-200 bg-white text-gray-600 hover:border-indigo-500/40 hover:text-[#0B0B0F]'
              "
              @click="setFilter(filter.id)"
            >
              {{ filter.label }}
            </button>
          </div>
        </div>

        <p
          v-if="filteredProjects.length === 0"
          class="rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6 py-12 text-center text-sm text-gray-500"
        >
          No projects match this filter yet.
        </p>

        <div v-else class="flex flex-col gap-5 lg:gap-6">
          <template v-for="(project, index) in featuredProjects" :key="project.path">
            <!-- INSERVISS -->
            <NuxtLink
              v-if="project.title === 'INSERVISS'"
              :to="project.path!"
              class="reveal group block rounded-[1.75rem] border border-gray-100 bg-[#F3F4F6] p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-8 lg:p-10"
              :class="index === 1 ? 'reveal-delay-1' : ''"
            >
              <div
                class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-12"
              >
                <div class="space-y-5">
                  <div
                    class="text-xs font-bold uppercase tracking-widest text-gray-400"
                  >
                    {{ project.challenge_num || '01' }}
                  </div>
                  <h3
                    class="text-2xl font-bold tracking-tight text-black sm:text-3xl"
                  >
                    {{ project.title }}
                  </h3>
                  <p class="text-sm font-medium text-[#4F46E5] sm:text-base">
                    {{
                      project.subtitle || 'Marketplace for Services in One App'
                    }}
                  </p>
                  <p class="text-sm leading-relaxed text-gray-600 sm:text-base">
                    End-to-end creation of the Inserviss ecosystem, merging
                    founding-level business strategy with high-precision UI/UX
                    and a soulful brand identity.
                    <span class="font-medium text-black">
                      {{ project.duration || '2017–Present' }}.
                    </span>
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in projectTagList(project)"
                      :key="tag"
                      class="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium uppercase text-gray-600"
                    >
                      {{ formatTagLabel(tag) }}
                    </span>
                  </div>
                </div>

                <div class="flex justify-center gap-3 sm:gap-4 lg:justify-end">
                  <div
                    class="w-[28%] max-w-[110px] rounded-xl border border-white/8 bg-[#12121A] p-2 shadow-xl transition-transform duration-500 group-hover:-translate-y-1"
                  >
                    <div
                      class="mx-auto mb-2 h-1.5 w-8 rounded-full bg-white/10"
                    />
                    <div class="space-y-2">
                      <div
                        class="rounded-md bg-indigo-500/90 p-2 text-center text-[8px] font-semibold text-white"
                      >
                        Nutrition
                      </div>
                      <div
                        class="rounded-md bg-white/5 p-2 text-center text-[8px] text-gray-400"
                      >
                        Healthcare
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-[32%] max-w-[120px] rounded-xl border border-white/8 bg-[#12121A] p-2 text-center text-white shadow-xl transition-transform duration-500 group-hover:-translate-y-2"
                  >
                    <div
                      class="mb-2 flex justify-between text-[7px] text-gray-500"
                    >
                      <span>May</span><span>2026</span>
                    </div>
                    <div
                      class="grid grid-cols-7 gap-0.5 text-[6px] text-gray-500"
                    >
                      <span>M</span><span>T</span><span>W</span><span>T</span>
                      <span>F</span><span>S</span><span>S</span>
                    </div>
                    <div class="mt-1 grid grid-cols-7 gap-0.5">
                      <span
                        v-for="n in 8"
                        :key="n"
                        class="aspect-square rounded bg-white/5"
                      />
                      <span
                        class="aspect-square rounded bg-[#6366F1] text-[6px] font-bold leading-[14px] text-white"
                      >
                        12
                      </span>
                    </div>
                  </div>
                  <div
                    class="w-[28%] max-w-[110px] rounded-xl border border-white/8 bg-[#12121A] p-2 shadow-xl transition-transform duration-500 group-hover:-translate-y-1"
                  >
                    <div
                      class="mx-auto mb-2 h-1.5 w-8 rounded-full bg-white/10"
                    />
                    <div class="space-y-1.5">
                      <div
                        class="h-6 rounded-md bg-gradient-to-r from-indigo-500/40 to-blue-500/30"
                      />
                      <div class="h-6 rounded-md bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>

            <!-- NEIRO TRACE -->
            <NuxtLink
              v-else-if="project.title === 'NEIRO TRACE'"
              :to="project.path!"
              class="reveal reveal-delay-1 group relative block overflow-hidden rounded-[1.75rem] border border-white/5 bg-[#050508] p-6 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(99,102,241,0.35)] sm:p-8 lg:p-10"
            >
              <div
                class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.14)_0%,transparent_55%)]"
              />

              <div
                class="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-12"
              >
                <div class="space-y-5">
                  <div
                    class="text-xs font-bold uppercase tracking-widest text-[#818CF8]"
                  >
                    02
                  </div>
                  <h3 class="text-3xl font-bold tracking-tight sm:text-4xl">
                    {{ project.title }}
                  </h3>
                  <p class="text-sm font-medium text-[#818CF8] sm:text-base">
                    {{ project.subtitle || 'Giving a Voice to the Silent' }}
                  </p>
                  <p class="text-sm leading-relaxed text-gray-300 sm:text-base">
                    An interactive system that visualizes the brain's response
                    to specific stimuli in real-time — a wearable
                    neuro-monitoring device.
                    <span class="font-medium text-white">
                      {{ project.duration || '2018–2019' }}
                    </span>
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in projectTagList(project)"
                      :key="tag"
                      class="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase text-gray-200"
                    >
                      {{ formatTagLabel(tag) }}
                    </span>
                  </div>
                </div>

                <div class="flex justify-center gap-4 lg:justify-end">
                  <div
                    class="w-[42%] max-w-[160px] rounded-xl border border-white/8 bg-[#12121A] p-2.5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1"
                  >
                    <div
                      class="mb-2 flex items-center justify-between text-[8px] text-gray-500"
                    >
                      <span>Session</span>
                      <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div
                      class="h-16 rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-2"
                    >
                      <svg
                        class="h-full w-full opacity-80"
                        viewBox="0 0 100 40"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 30 Q25 5 50 20 T100 15"
                          fill="none"
                          stroke="#818CF8"
                          stroke-width="1.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    class="w-[42%] max-w-[160px] rounded-xl border border-white/8 bg-[#12121A] p-2.5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
                  >
                    <div class="mb-2 text-[8px] text-gray-500">Neural map</div>
                    <div
                      class="relative flex h-20 items-center justify-center overflow-hidden rounded-lg border border-white/5 bg-black/40"
                    >
                      <div
                        class="absolute h-12 w-12 animate-pulse rounded-full border border-indigo-500/40"
                      />
                      <div class="h-6 w-6 rounded-full bg-indigo-600/30" />
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </template>

          <div
            v-if="gridProjects.length"
            class="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6"
          >
            <NuxtLink
              v-for="(project, index) in gridProjects"
              :key="project.path"
              :to="project.path!"
              class="reveal group block rounded-[1.75rem] border border-gray-100 bg-[#F3F4F6] p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              :class="{
                'reveal-delay-1': index === 1,
                'reveal-delay-2': index === 2,
              }"
            >
              <div
                class="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm transition-transform duration-500 group-hover:scale-105"
                :class="projectAccentClass(project.title)"
              >
                {{ projectInitials(project.title) }}
              </div>
              <h3 class="mt-4 text-lg font-bold text-black">
                {{ project.title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-gray-600">
                {{ project.subtitle || project.description }}
                <span v-if="project.duration" class="font-medium text-gray-800">
                  {{ project.duration }}
                </span>
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in projectTagList(project)"
                  :key="tag"
                  class="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[10px] font-medium uppercase text-gray-600"
                >
                  {{ formatTagLabel(tag) }}
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- ── FOOTER ──────────────────────────────────────────────── -->
      <footer id="contact" class="reveal bg-[#0B0B0F] text-white">
        <div
          class="mx-auto max-w-[90rem] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
          <div
            class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16"
          >
            <div>
              <p
                class="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
              >
                Let's create something<br />
                <span class="text-[#818CF8]">meaningful together.</span>
              </p>
            </div>
            <div class="flex flex-col gap-8 lg:items-end lg:text-right">
              <div class="space-y-2 text-sm text-gray-300 sm:text-base">
                <p>
                  <a
                    href="tel:+41762033397"
                    class="transition-colors duration-300 hover:text-white"
                  >
                    +41 76 203 33 97
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:perepely@gmail.com"
                    class="transition-colors duration-300 hover:text-white"
                  >
                    perepely@gmail.com
                  </a>
                </p>
                <p>Zürich, 8037</p>
              </div>
              <a
                href="mailto:perepely@gmail.com"
                class="group inline-flex min-h-[48px] w-fit items-center gap-2 rounded-full bg-[#6366F1] px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#818CF8]"
              >
                Get in Touch
                <span
                  class="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
          <div
            class="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between"
          >
            <p>© 2026 Olena Perepelychna. All rights reserved.</p>
            <p class="flex items-center gap-4">
              <span>Zürich, Switzerland</span>
              <a
                href="#"
                class="text-gray-400 transition-colors duration-300 hover:text-white"
              >
                Back to top ↑
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>
