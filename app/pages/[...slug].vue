<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

// Запрашиваем текущий документ из коллекции CMS
const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <main v-if="page" class="bg-white font-sans text-[#0B0B0F] antialiased">
    <!-- ── NAVIGATION ──────────────────────────────────────────── -->
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
        <div class="flex items-center gap-3">
          <span
            class="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 sm:inline"
            >Case Study</span
          >
          <NuxtLink to="/">
            <img
              src="/assets/logo_example.png"
              alt="Olena Perepelychna"
              class="h-10 w-auto"
            />
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- 🌟 ДИНАМИЧЕСКИЙ МАКЕТ ДЛЯ INSERVISS 🌟 -->
    <div v-if="page.title === 'INSERVISS'">
      <!-- 00 — HERO BLOCK -->
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
                {{ page.title }}
              </h1>
              <p class="text-sm font-medium text-[#4F46E5] sm:text-base">
                Marketplace for Services in One App
              </p>
              <p
                class="max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base"
              >
                End-to-end creation of the Inserviss ecosystem, meticulously
                merging founding-level business strategy with high-precision
                engineering of UI/UX and a soulful, definitive brand identity.
              </p>
              <div class="flex flex-wrap gap-2 pt-2">
                <span
                  class="rounded-full bg-[#6366F1] px-4 py-1.5 text-xs font-semibold text-white"
                  >Co-Founder &amp; Product Designer</span
                >[cite: 5]
                <span
                  class="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600"
                  >2017 — Present</span
                >[cite: 5]
                <a
                  href="https://www.inserviss.app"
                  target="_blank"
                  class="rounded-full border border-blue-300 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-100"
                  >www.inserviss.app</a
                >[cite: 5]
              </div>
            </div>

            <div class="lg:col-span-5">
              <div class="grid grid-cols-2 gap-3">
                <div class="rounded-xl border border-gray-100 bg-[#F3F4F6] p-4">
                  <p
                    class="text-[10px] font-bold uppercase tracking-wider text-gray-400"
                  >
                    Role
                  </p>
                  <p class="mt-1 text-sm font-semibold text-ink">
                    Business Product Designer
                  </p>
                  [cite: 5]
                </div>
                <div class="rounded-xl border border-gray-100 bg-[#F3F4F6] p-4">
                  <p
                    class="text-[10px] font-bold uppercase tracking-wider text-gray-400"
                  >
                    Markets
                  </p>
                  <p class="mt-1 text-sm font-semibold text-ink">B2B + B2C</p>
                  [cite: 5]
                </div>
                <div
                  class="col-span-2 rounded-xl border border-gray-100 bg-[#F3F4F6] p-4"
                >
                  <p
                    class="text-[10px] font-bold uppercase tracking-wider text-gray-400"
                  >
                    Deliverables
                  </p>
                  <p class="mt-1 text-sm text-gray-600">
                    Strategy · Ecosystem Architecture · Mobile &amp; Desktop
                    UI/UX · Brand Identity · SMM · User Testing
                  </p>
                  [cite: 5]
                </div>
                <div
                  class="col-span-2 rounded-xl border border-gray-100 bg-[#F3F4F6] p-4"
                >
                  <p
                    class="text-[10px] font-bold uppercase tracking-wider text-gray-400"
                  >
                    Tools
                  </p>
                  <div class="mt-2 flex flex-wrap gap-1.5">
                    <span
                      v-for="tool in ['Fig', 'Pr', 'AE', 'Ill', 'PS']"
                      :key="tool"
                      class="rounded-full bg-indigo-500/10 px-2.5 py-1 text-[10px] font-semibold text-[#4F46E5] uppercase"
                      >{{ tool }}</span
                    >[cite: 5]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 01 — CHALLENGE СЕКЦИЯ -->
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
              01 — Challenge
            </p>
            <h2
              class="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              The Fragmented Service Market
            </h2>
            [cite: 5]
          </div>
          <p class="max-w-md text-sm text-gray-500">
            How much average time do you spend to find and book services?
          </p>
          [cite: 5]
        </div>

        <div
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 gap-5"
        >
          <div
            v-for="stat in [
              { time: '5–30', label: 'Researching & Googling' },
              { time: '15–45', label: 'Browsing and Selecting' },
              { time: '5–15', label: 'Calling' },
              { time: '5–15', label: 'Scheduling & Rescheduling' },
            ]"
            :key="stat.label"
            class="rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6 lg:col-span-3 text-center"
          >
            <p class="text-3xl font-bold text-[#6366F1]">{{ stat.time }}</p>
            [cite: 5]
            <p class="text-[10px] font-bold uppercase text-gray-400 mt-1">
              min
            </p>
            [cite: 5]
            <p class="mt-3 text-sm text-gray-600 font-medium">
              {{ stat.label }}
            </p>
            [cite: 5]
          </div>

          <div
            class="rounded-2xl border border-indigo-500/20 bg-white p-6 sm:p-8 lg:col-span-8 space-y-4 shadow-xs"
          >
            <p
              class="text-xs font-bold uppercase tracking-[0.2em] text-gray-400"
            >
              Core insight
            </p>
            [cite: 5]
            <p class="text-sm leading-relaxed text-gray-600">
              For many people it takes up to a couple of hours or days. Most
              service providers still use paper media to store customer data —
              only 10% use spreadsheets. Booking by phone is not convenient for
              60% of customers. Those who have just moved to a new country face
              special inconveniences with language barriers.[cite: 5]
            </p>
            <p
              class="text-sm font-semibold text-ink border-t border-gray-100 pt-3"
            >
              Reducing cognitive load by organizing complex scheduling and
              financial data into intuitive, soulful interfaces. Every
              touchpoint engineered to foster security, transparency, and
              long-term user loyalty.[cite: 5]
            </p>
          </div>

          <div
            class="rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6 lg:col-span-4 space-y-4"
          >
            <span
              class="rounded-full bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-700"
              >Dual Market Solution</span
            >[cite: 5]
            <div class="space-y-3 mt-2">
              <div class="rounded-xl bg-white p-4 border border-gray-100">
                <p class="text-[10px] font-bold text-[#6366F1]">Group A</p>
                <p class="font-semibold text-ink text-sm">
                  Educators &amp; Professionals
                </p>
              </div>
              [cite: 5]
              <div class="rounded-xl bg-white p-4 border border-gray-100">
                <p class="text-[10px] font-bold text-[#6366F1]">Group B</p>
                <p class="font-semibold text-ink text-sm">
                  Families &amp; Customers
                </p>
              </div>
              [cite: 5]
            </div>
          </div>
        </div>
      </section>

      <!-- 02 — ECOSYSTEM STRATEGY СЕКЦИЯ -->
      <section
        id="ecosystem"
        class="border-t border-gray-100 bg-[#F3F4F6]/30 py-12 sm:py-16 lg:py-20"
      >
        <div class="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <p
            class="text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]"
          >
            02 — Ecosystem Strategy
          </p>
          [cite: 5]
          <h2
            class="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            Transforming Fragmentation into a Unified Platform
          </h2>
          [cite: 5]
          <p class="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
            Transforming a fragmented service market into a seamless,
            high-precision ecosystem. The ICP lies at the intersection of
            professional business management and a frictionless user experience
            — a unified platform designed to serve both high-level professionals
            (B2B) and families seeking reliability (B2C).[cite: 5]
          </p>

          <div class="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
            <div
              class="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 lg:col-span-5"
            >
              <h3
                class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500"
              >
                Business Account Stack
              </h3>
              [cite: 5]
              <ul class="mt-5 space-y-2.5 text-sm text-gray-600">
                <li
                  v-for="item in [
                    'Business Settings · Video Streams · CRM',
                    'Business Offers · Payments · Dashboard',
                    'Landing Page · Website Design Editor',
                    'Online Webinars · Video Rooms · Stripe',
                    'Cloud Storage · LMS · Marketing Tools',
                  ]"
                  :key="item"
                  class="flex items-center gap-2 rounded-lg bg-[#F3F4F6] px-3 py-2"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-[#6366F1]"></span
                  >{{ item }}[cite: 5]
                </li>
              </ul>
            </div>

            <div
              class="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 lg:col-span-4"
            >
              <h3
                class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500"
              >
                Consumer Account Stack
              </h3>
              [cite: 5]
              <ul class="mt-5 space-y-2.5 text-sm text-gray-600">
                <li
                  v-for="item in [
                    'Personal Smart Account',
                    'Multiple Profiles for the Whole Family',
                    'Private Video Rooms + Secure Recordings',
                    'Progress & Performance Tracking',
                    'Cross-Provider Planner',
                  ]"
                  :key="item"
                  class="flex items-center gap-2 rounded-lg bg-[#F3F4F6] px-3 py-2"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-[#0385FE]"></span
                  >{{ item }}[cite: 5]
                </li>
              </ul>
            </div>

            <div
              class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-3"
            >
              <h3
                class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500"
              >
                Categories
              </h3>
              [cite: 5]
              <div class="mt-4 flex flex-wrap gap-1.5">
                <span
                  v-for="cat in [
                    'Healthcare',
                    'Beauty',
                    'Sport',
                    'Pets',
                    'Business',
                    'Entertainment',
                    'Education',
                    'Nutrition',
                    'Home',
                  ]"
                  :key="cat"
                  class="rounded-full border border-gray-200 px-2.5 py-1 text-[10px] font-medium text-gray-600"
                  >{{ cat }}</span
                >[cite: 5]
              </div>
              <p class="mt-5 text-xs leading-relaxed text-gray-500">
                Beyond design — building resilient systems through strategic
                delegation, team orchestration, and high-impact public speaking.
              </p>
              [cite: 5]
            </div>

            <!-- 📱 ГРАФИЧЕСКИЙ МАКЕТ ПЛАТФОРМЫ (Восстановлен) -->
            <div
              class="rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 lg:col-span-12"
            >
              <div
                class="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-[#F9FAFB] p-4 overflow-hidden shadow-xs"
              >
                <div
                  class="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4"
                >
                  <div class="flex items-center gap-2">
                    <span
                      class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0385FE] text-[10px] font-bold text-white"
                      >i</span
                    >[cite: 5]
                    <span class="text-sm font-bold text-ink">INSERVISS</span
                    >[cite: 5]
                    <span
                      class="rounded-full bg-[#F3F4F6] px-2 py-0.5 text-[10px] text-gray-500"
                      >Get Started</span
                    >[cite: 5]
                  </div>
                  <div
                    class="flex gap-2 text-[10px] text-gray-400 font-medium uppercase"
                  >
                    <span
                      class="rounded-md bg-indigo-50/80 px-2 py-1 text-[#4F46E5]"
                      >HOME</span
                    >[cite: 5]
                    <span class="px-2 py-1">ALL CATEGORIES</span>[cite: 5]
                    <span class="px-2 py-1">EDUCATION</span>[cite: 5]
                  </div>
                  <div class="flex gap-2">
                    <span
                      class="rounded-lg border border-gray-200 px-3 py-1.5 text-[10px] font-medium text-gray-600"
                      >Enroll as Business</span
                    >[cite: 5]
                    <span
                      class="rounded-lg bg-[#6366F1] px-3 py-1.5 text-[10px] font-semibold text-white"
                      >Log in</span
                    >[cite: 5]
                  </div>
                </div>
                <div
                  class="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8 text-center text-[10px] font-medium"
                >
                  <div class="rounded-lg bg-[#6366F1] p-3 text-white shadow-xs">
                    Nutrition
                  </div>
                  [cite: 5]
                  <div
                    v-for="tab in [
                      'Healthcare',
                      'Sport',
                      'Pets',
                      'Business',
                      'Entertain',
                      'Education',
                      'Home',
                    ]"
                    :key="tab"
                    class="rounded-lg bg-[#F3F4F6] p-3 text-gray-500"
                  >
                    {{ tab }}
                  </div>
                  [cite: 5]
                </div>
              </div>
              <p class="mt-3 text-xs text-gray-400 text-center">
                Product ecosystem architecture — marketplace categories &amp;
                dual account flows
              </p>
              [cite: 5]
            </div>
          </div>
        </div>
      </section>

      <!-- 03 — SERVICE CARD ARCHITECTURE СЕКЦИЯ -->
      <section
        id="service-card"
        class="border-t border-gray-100 py-12 sm:py-16 lg:py-20"
      >
        <div class="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <p
            class="text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]"
          >
            03 — Service Card Architecture
          </p>
          [cite: 5]
          <h2
            class="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            From Discovery to Booking in One Flow
          </h2>
          [cite: 5]

          <div class="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
            <div
              class="rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6 shadow-sm sm:p-8 lg:col-span-5"
            >
              <h3
                class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500"
              >
                Service Card Components
              </h3>
              [cite: 5]
              <div class="mt-5 space-y-2 text-sm">
                <div
                  class="flex justify-between rounded-lg border border-gray-100 bg-white px-4 py-2.5"
                >
                  <span class="text-gray-500">Main Photo · Avatar</span
                  ><span class="font-medium text-ink">Visual Identity</span>
                </div>
                [cite: 5]
                <div
                  class="flex justify-between rounded-lg border border-gray-100 bg-white px-4 py-2.5"
                >
                  <span class="text-gray-500">Headline · Description</span
                  ><span class="font-medium text-ink">Service Info</span>
                </div>
                [cite: 5]
                <div
                  class="flex justify-between rounded-lg border border-gray-100 bg-white px-4 py-2.5"
                >
                  <span class="text-gray-500">Price · Location · Languages</span
                  ><span class="font-medium text-ink">Meta Data</span>
                </div>
                [cite: 5]
                <div
                  class="flex justify-between rounded-lg border border-gray-100 bg-white px-4 py-2.5"
                >
                  <span class="text-gray-500"
                    >Skills Level · Delivery · Experience</span
                  ><span class="font-medium text-ink">Trust Signals</span>
                </div>
                [cite: 5]
                <div
                  class="flex justify-between rounded-lg border border-gray-100 bg-white px-4 py-2.5"
                >
                  <span class="text-gray-500"
                    >Gallery · Reels · Certificates · FAQ</span
                  ><span class="font-medium text-ink">Rich Content</span>
                </div>
                [cite: 5]
              </div>
            </div>

            <!-- КАРТОЧКА АНАСТАСИИ (Восстановлена) -->
            <div
              class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7 flex flex-col justify-center"
            >
              <div
                class="rounded-xl border border-gray-200 bg-white p-5 shadow-xs"
              >
                <div class="flex flex-col sm:flex-row gap-4">
                  <div
                    class="h-24 w-24 shrink-0 rounded-xl bg-gradient-to-br from-indigo-500/30 to-blue-500/20 shadow-inner"
                  ></div>
                  <div class="min-w-0 flex-1 space-y-1">
                    <p
                      class="text-[10px] font-bold uppercase tracking-wider text-[#6366F1]"
                    >
                      Special Education
                    </p>
                    [cite: 5]
                    <h4 class="text-lg font-bold text-ink">
                      Anastasia — Learning Support
                    </h4>
                    [cite: 5]
                    <p class="line-clamp-2 text-xs text-gray-500">
                      Personalized instruction with live classes, webinars, and
                      secure session recordings.
                    </p>
                    [cite: 5]
                    <div class="mt-3 flex flex-wrap gap-2 pt-1">
                      <span
                        class="rounded-full bg-[#F3F4F6] px-2.5 py-0.5 text-[10px] font-medium text-gray-600"
                        >From $45</span
                      >[cite: 5]
                      <span
                        class="rounded-full bg-[#F3F4F6] px-2.5 py-0.5 text-[10px] font-medium text-gray-600"
                        >Zürich</span
                      >[cite: 5]
                      <span
                        class="rounded-full bg-[#F3F4F6] px-2.5 py-0.5 text-[10px] font-medium text-gray-600"
                        >DE · EN · RU</span
                      >[cite: 5]
                    </div>
                  </div>
                </div>
                <div
                  class="mt-4 grid grid-cols-3 gap-2 border-t border-gray-50 pt-4 text-center"
                >
                  <div>
                    <p class="text-[10px] text-gray-400 uppercase font-medium">
                      Services
                    </p>
                    <p class="text-xs font-bold text-ink">12</p>
                  </div>
                  [cite: 5]
                  <div>
                    <p class="text-[10px] text-gray-400 uppercase font-medium">
                      Webinars
                    </p>
                    <p class="text-xs font-bold text-ink">8</p>
                  </div>
                  [cite: 5]
                  <div>
                    <p class="text-[10px] text-gray-400 uppercase font-medium">
                      Rating
                    </p>
                    <p class="text-xs font-bold text-ink">4.9</p>
                  </div>
                  [cite: 5]
                </div>
                <div class="mt-4 flex gap-2">
                  <span
                    class="flex-1 rounded-lg border border-gray-200 py-2 text-center text-xs font-medium text-gray-500 cursor-default"
                    >Follow</span
                  >[cite: 5]
                  <span
                    class="flex-1 rounded-lg bg-[#6366F1] py-2 text-center text-xs font-semibold text-white shadow-xs"
                    >Book</span
                  >[cite: 5]
                </div>
              </div>
              <p class="mt-3 text-xs text-gray-400 text-center">
                Service card → Landing page → Book → Payment success
              </p>
              [cite: 5]
            </div>

            <!-- МОБИЛЬНЫЙ ПЛАНЕР И ТЕКСТ (Восстановлены) -->
            <div
              class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-4 flex items-center justify-center"
            >
              <div
                class="w-full max-w-[200px] p-4 bg-gradient-to-b from-[#12121A] to-[#0A0A10] border border-white/8 rounded-2xl shadow-xl text-white"
              >
                <div
                  class="mb-2 h-1 w-8 rounded-full bg-white/10 mx-auto"
                ></div>
                <p
                  class="text-[8px] font-bold uppercase tracking-wider text-indigo-300"
                >
                  Services
                </p>
                [cite: 5]
                <div class="mt-3 space-y-2">
                  <div
                    class="rounded-md bg-indigo-500/80 p-2 text-[7px] font-medium"
                  >
                    Individual Lesson · 60 min · $45
                  </div>
                  [cite: 5]
                  <div
                    class="rounded-md bg-white/5 p-2 text-[7px] text-gray-400"
                  >
                    Group Session · 90 min · $30
                  </div>
                  [cite: 5]
                  <div
                    class="rounded-md bg-white/5 p-2 text-[7px] text-gray-400"
                  >
                    Parent Webinar · Free
                  </div>
                  [cite: 5]
                </div>
                <div
                  class="mt-4 rounded-md bg-[#0385FE]/20 py-2 text-center text-[7px] font-bold text-[#0385FE] uppercase tracking-wider"
                >
                  Buy Now
                </div>
                [cite: 5]
              </div>
            </div>

            <div
              class="rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6 sm:p-8 lg:col-span-8 flex flex-col justify-between"
            >
              <div class="space-y-2">
                <h3
                  class="text-xs font-bold uppercase tracking-[0.2em] text-gray-400"
                >
                  Business Landing Page Editor
                </h3>
                [cite: 5]
                <p class="text-sm leading-relaxed text-gray-600">
                  Full landing page builder with main page video, gallery,
                  reels, YouTube integration, certificates, FAQ, preview &amp;
                  publish workflow. Business URL generation with Stripe payment
                  integration and CRM dashboard for confirmed, rescheduled,
                  completed, and canceled bookings.[cite: 5]
                </p>
              </div>
              <div
                class="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 font-medium text-center text-[10px] text-gray-600"
              >
                <div class="rounded-lg border border-gray-100 bg-white p-3">
                  <p class="text-lg">🎬</p>
                  <p class="mt-1">Main Video</p>
                </div>
                [cite: 5]
                <div class="rounded-lg border border-gray-100 bg-white p-3">
                  <p class="text-lg">📸</p>
                  <p class="mt-1">Gallery</p>
                </div>
                [cite: 5]
                <div class="rounded-lg border border-gray-100 bg-white p-3">
                  <p class="text-lg">📋</p>
                  <p class="mt-1">Certificates</p>
                </div>
                [cite: 5]
                <div class="rounded-lg border border-gray-100 bg-white p-3">
                  <p class="text-lg">💳</p>
                  <p class="mt-1">Stripe Pay</p>
                </div>
                [cite: 5]
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 04 — CALENDAR SYNC СЕКЦИЯ -->
      <section
        id="calendar"
        class="border-t border-gray-100 bg-[#F3F4F6]/30 py-12 sm:py-16 lg:py-20"
      >
        <div class="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <p
            class="text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]"
          >
            04 — Calendar Sync &amp; Bookings
          </p>
          [cite: 5]
          <h2
            class="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            Smart Scheduler with Notifications
          </h2>
          [cite: 5]
          <p class="mt-3 max-w-2xl text-sm text-gray-600">
            Never miss a class or appointment. Get automatic reminders and sync
            with your calendar. See all upcoming family bookings in one shared
            cross-provider planner.
          </p>
          [cite: 5]

          <div class="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
            <div
              class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:col-span-4"
            >
              <h3
                class="text-xs font-bold uppercase tracking-[0.2em] text-gray-400"
              >
                Booking Flow
              </h3>
              [cite: 5]
              <ul
                class="mt-5 space-y-4 border-l border-indigo-500/25 pl-5 text-sm"
              >
                <li class="relative">
                  <span
                    class="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#6366F1]"
                  ></span>
                  <p class="font-semibold text-ink">Select Service</p>
                  <p class="text-xs text-gray-400 font-normal">
                    Types, prices, delivery format
                  </p>
                </li>
                [cite: 5]
                <li class="relative">
                  <span
                    class="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-gray-200"
                  ></span>
                  <p class="font-semibold text-gray-600">
                    Choose Date &amp; Time
                  </p>
                  <p class="text-xs text-gray-400 font-normal">
                    Weekly schedule · calendar sync
                  </p>
                </li>
                [cite: 5]
                <li class="relative">
                  <span
                    class="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-gray-200"
                  ></span>
                  <p class="font-semibold text-gray-600">Secure Payment</p>
                  <p class="text-xs text-gray-400 font-normal">
                    Stripe · invoicing · confirmation
                  </p>
                </li>
                [cite: 5]
                <li class="relative">
                  <span
                    class="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#6366F1]"
                  ></span>
                  <p class="font-semibold text-ink">Join Video Room</p>
                  <p class="text-xs text-gray-400 font-normal">
                    Live session · save recording
                  </p>
                </li>
                [cite: 5]
              </ul>
            </div>

            <!-- ИНТЕРФЕЙС КАЛЕНДАРЯ (Восстановлен) -->
            <div
              class="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm lg:col-span-5"
            >
              <div
                class="mb-3 flex items-center justify-between border-b border-gray-50 pb-2"
              >
                <span class="text-sm font-bold text-ink">May 2026</span>[cite:
                5]
                <span
                  class="rounded-full bg-indigo-50 px-2.5 py-0.5 text-[9px] font-semibold text-[#4F46E5]"
                  >Cross-Provider</span
                >[cite: 5]
              </div>
              <div
                class="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-gray-400 mb-1"
              >
                <span>M</span><span>T</span><span>W</span><span>T</span
                ><span>F</span><span>S</span><span>S</span>[cite: 5]
              </div>
              <div class="grid grid-cols-7 gap-1 text-center">
                <span
                  v-for="n in 8"
                  :key="'p-' + n"
                  class="aspect-square rounded-lg bg-[#F3F4F6]"
                ></span
                >[cite: 5]
                <span
                  class="aspect-square rounded-lg bg-[#6366F1] text-[10px] font-bold text-white flex items-center justify-center shadow-xs"
                  >12</span
                >[cite: 5]
                <span class="aspect-square rounded-lg bg-card"></span>[cite: 5]
                <span
                  class="aspect-square rounded-lg bg-blue-50 text-[10px] font-semibold text-[#0385FE] flex items-center justify-center"
                  >14</span
                >[cite: 5]
                <span
                  v-for="n in 3"
                  :key="'a-' + n"
                  class="aspect-square rounded-lg bg-[#F3F4F6]"
                ></span
                >[cite: 5]
              </div>
              <div class="mt-4 space-y-2 text-[10px] font-medium">
                <div
                  class="flex items-center gap-2 rounded-lg bg-indigo-50/50 px-3 py-2"
                >
                  <span class="h-2 w-2 rounded-full bg-[#6366F1]"></span
                  ><span class="text-ink">12 May · Speech Therapy · 14:00</span>
                </div>
                [cite: 5]
                <div
                  class="flex items-center gap-2 rounded-lg bg-blue-50/50 px-3 py-2"
                >
                  <span class="h-2 w-2 rounded-full bg-[#0385FE]"></span
                  ><span class="text-ink">14 May · Parent Webinar · 18:00</span>
                </div>
                [cite: 5]
              </div>
            </div>

            <!-- ИНТЕРФЕЙС ТЕЛЕФОНА-УВЕДОМЛЕНИЯ -->
            <div
              class="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm lg:col-span-3 flex flex-col justify-between"
            >
              <div
                class="w-full max-w-[180px] mx-auto p-3 bg-gradient-to-b from-[#12121A] to-[#0A0A10] border border-white/8 rounded-2xl shadow-lg text-white"
              >
                <p class="text-[7px] font-bold text-indigo-300 uppercase">
                  Notification
                </p>
                [cite: 5]
                <div
                  class="mt-2 rounded-lg border border-white/5 bg-white/5 p-2 space-y-0.5"
                >
                  <p class="text-[6px] text-gray-400">
                    Reminder · 30 min before
                  </p>
                  [cite: 5]
                  <p class="text-[7px] font-semibold text-white">
                    Speech Therapy with Anastasia
                  </p>
                  [cite: 5]
                  <p class="text-[6px] text-gray-500">
                    Today · 14:00 · Tap to join room
                  </p>
                  [cite: 5]
                </div>
                <div
                  class="mt-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 py-1 text-center text-[7px] font-bold text-emerald-400"
                >
                  ✓ Confirmed
                </div>
                [cite: 5]
              </div>
              <p class="text-[11px] text-gray-400 text-center mt-3">
                Smart scheduler · calendar sync · auto reminders
              </p>
              [cite: 5]
            </div>

            <div
              class="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-12 font-medium text-gray-600 text-sm mt-2"
            >
              <div class="rounded-xl bg-[#F3F4F6] p-5">
                <p
                  class="text-xs font-bold uppercase text-gray-400 tracking-wider"
                >
                  Private Video Rooms
                </p>
                <p class="mt-2 text-xs leading-relaxed">
                  Join live sessions or access past lessons anytime — perfect
                  for review or learning on your own schedule.
                </p>
              </div>
              [cite: 5]
              <div class="rounded-xl bg-[#F3F4F6] p-5">
                <p
                  class="text-xs font-bold uppercase text-gray-400 tracking-wider"
                >
                  Progress Tracking
                </p>
                <p class="mt-2 text-xs leading-relaxed">
                  Follow learning progress or service outcomes over time, with
                  visual reports and AI-powered insights.
                </p>
              </div>
              [cite: 5]
              <div class="rounded-xl bg-[#F3F4F6] p-5">
                <p
                  class="text-xs font-bold uppercase text-gray-400 tracking-wider"
                >
                  HD Video Rooms
                </p>
                <p class="mt-2 text-xs leading-relaxed">
                  Personalized learning experiences with secure lesson
                  recordings and homework file attachments.
                </p>
              </div>
              [cite: 5]
            </div>
          </div>
        </div>
      </section>

      <!-- 05 — USER TESTING СЕКЦИЯ -->
      <section
        id="results"
        class="border-t border-gray-100 py-12 sm:py-16 lg:py-20"
      >
        <div class="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <p
            class="text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]"
          >
            05 — User Testing Results
          </p>
          [cite: 5]
          <h2
            class="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            INSERVISS — Used and Trusted by Educators
          </h2>
          [cite: 5]

          <div class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-6">
            <div
              class="rounded-2xl border border-indigo-500/10 bg-gradient-to-br from-indigo-50/20 to-white p-8 text-center shadow-xs"
            >
              <p class="text-4xl font-bold text-[#6366F1]">100+</p>
              [cite: 5]
              <p class="mt-2 text-sm font-medium text-ink">
                Hours of Personalized Instruction
              </p>
              [cite: 5]
            </div>
            <div
              class="rounded-2xl border border-indigo-500/10 bg-gradient-to-br from-indigo-50/20 to-white p-8 text-center shadow-xs"
            >
              <p class="text-4xl font-bold text-[#6366F1]">200+</p>
              [cite: 5]
              <p class="mt-2 text-sm font-medium text-ink">
                Online Lessons Completed
              </p>
              [cite: 5]
            </div>
            <div
              class="rounded-2xl border border-indigo-500/10 bg-gradient-to-br from-indigo-50/20 to-white p-8 text-center shadow-xs"
            >
              <p class="text-4xl font-bold text-[#6366F1]">20+</p>
              [cite: 5]
              <p class="mt-2 text-sm font-medium text-ink">
                Webinars and Group Lessons
              </p>
              [cite: 5]
            </div>
          </div>

          <!-- ОТЗЫВ ПРЕПОДАВАТЕЛЯ И ТЕЛЕФОНЫ (Восстановлены) -->
          <div
            class="rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6 sm:p-10 shadow-xs lg:grid lg:grid-cols-12 lg:gap-10 mt-8"
          >
            <div class="lg:col-span-7 space-y-4">
              <p
                class="text-xs font-bold uppercase tracking-wider text-gray-400"
              >
                Educator Testimonial
              </p>
              [cite: 5]
              <blockquote
                class="text-sm italic leading-relaxed text-gray-600 sm:text-base"
              >
                "INSERVISS finally gave me that solution. Now, I can host live
                classes with kids, organize webinars for parents, record
                sessions, leave personalized feedback, and even attach homework
                files — all in one place. The interface is so intuitive that
                even my younger students log in and join video rooms by
                themselves without help. The scheduling system with reminders
                and integrated payments made my job 10x easier. I can now focus
                on teaching. This platform is a game-changer."[cite: 5]
              </blockquote>
              <div class="flex items-center gap-4 pt-2">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-[#6366F1] font-bold text-white shadow-xs"
                >
                  A
                </div>
                [cite: 5]
                <div>
                  <p class="font-bold text-ink text-sm">Anastasia</p>
                  [cite: 5]
                  <p class="text-xs text-gray-500 font-medium">
                    Special Education Teacher · 1+ year on INSERVISS
                  </p>
                  [cite: 5]
                  <p class="text-[11px] text-gray-400">
                    12 online students · 12 offline students
                  </p>
                  [cite: 5]
                </div>
              </div>
            </div>
            <div
              class="mt-8 flex justify-center gap-3 lg:col-span-5 lg:mt-0 lg:justify-end"
            >
              <div
                class="w-[30%] max-w-[110px] p-2 bg-gradient-to-b from-[#12121A] to-[#0A0A10] border border-white/8 rounded-xl shadow-md text-white text-[7px] text-center"
              >
                <p class="font-semibold text-indigo-300">Live Class</p>
                <div
                  class="mt-2 h-12 rounded bg-white/5 border border-white/5"
                ></div>
              </div>
              [cite: 5]
              <div
                class="w-[34%] max-w-[120px] p-2 bg-gradient-to-b from-[#12121A] to-[#0A0A10] border border-white/8 rounded-xl shadow-md text-white text-[7px] text-center"
              >
                <p class="text-gray-400">Session Video</p>
                <div
                  class="mt-2 h-14 rounded bg-gradient-to-b from-indigo-500/20 to-transparent border border-white/5"
                ></div>
              </div>
              [cite: 5]
              <div
                class="w-[30%] max-w-[110px] p-2 bg-gradient-to-b from-[#12121A] to-[#0A0A10] border border-white/8 rounded-xl shadow-md text-white text-[7px] text-center"
              >
                <p class="text-gray-400">Homework</p>
                <div class="mt-2 space-y-1">
                  <div
                    class="h-4 rounded bg-white/5 border border-white/5"
                  ></div>
                  <div
                    class="h-4 rounded bg-white/5 border border-white/5"
                  ></div>
                </div>
              </div>
              [cite: 5]
            </div>
          </div>
        </div>
      </section>

      <!-- 06 — BRAND IDENTITY СЕКЦИЯ (Восстановлена) -->
      <section
        class="bg-[#F3F4F6]/30 py-12 sm:py-16 lg:py-20 border-t border-gray-100"
      >
        <div class="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <p
            class="text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]"
          >
            06 — Brand &amp; Identity
          </p>
          [cite: 5]
          <h2
            class="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            Visual Identity &amp; Soul
          </h2>
          [cite: 5]

          <div
            class="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6 text-sm"
          >
            <div
              class="rounded-2xl border border-gray-100 bg-white p-6 shadow-xs sm:p-8 lg:col-span-4"
            >
              <p
                class="text-xs font-bold uppercase tracking-wider text-gray-400"
              >
                Psychology
              </p>
              [cite: 5]
              <div
                class="mt-3 flex flex-wrap gap-1.5 text-xs font-medium text-gray-600"
              >
                <span
                  v-for="p in [
                    'Clarity',
                    'Inspiration',
                    'Open-Mindedness',
                    'Wisdom',
                    'Optimism',
                  ]"
                  :key="p"
                  class="rounded-full bg-[#F3F4F6] px-3 py-1"
                  >{{ p }}</span
                >[cite: 5]
              </div>
              <p
                class="mt-5 text-xs font-bold uppercase tracking-wider text-gray-400"
              >
                Tone
              </p>
              [cite: 5]
              <div
                class="mt-3 flex flex-wrap gap-1.5 text-xs font-medium text-gray-600"
              >
                <span
                  v-for="t in [
                    'Invigorating',
                    'Trustworthy',
                    'Stimulating',
                    'Fresh',
                    'Confident',
                  ]"
                  :key="t"
                  class="rounded-full border border-gray-200 px-3 py-1"
                  >{{ t }}</span
                >[cite: 5]
              </div>
            </div>

            <div
              class="rounded-2xl border border-gray-100 bg-white p-6 shadow-xs sm:p-8 lg:col-span-4 space-y-3"
            >
              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0385FE] font-bold text-white text-lg shadow-sm"
              >
                i
              </div>
              [cite: 5]
              <p
                class="text-xs font-bold uppercase tracking-wider text-[#6366F1]"
              >
                ~ i ~ Letter
              </p>
              [cite: 5]
              <p class="text-xs leading-relaxed text-gray-500">
                Stands as a pillar of singular focus and architectural grace,
                commanding attention with a sleek, vertical poise that serves as
                a confident gateway to the brand's identity.
              </p>
              [cite: 5]
              <div class="flex items-center gap-3 border-t border-gray-50 pt-2">
                <span class="h-8 w-8 rounded-lg bg-[#0385FE] shadow-xs"></span>
                <div>
                  <p class="text-xs font-bold text-ink">#0385FE</p>
                  <p class="text-[11px] text-gray-400">
                    Azure Blue — bold, optimistic, cooling
                  </p>
                </div>
                [cite: 5]
              </div>
            </div>

            <div
              class="rounded-2xl border border-gray-100 bg-white p-6 shadow-xs sm:p-8 lg:col-span-4"
            >
              <p
                class="text-xs font-bold uppercase tracking-wider text-[#6366F1]"
              >
                ~ Cubiform ~
              </p>
              [cite: 5]
              <p class="text-xs leading-relaxed text-gray-500">
                Embodies grounded permanence and structural clarity, projecting
                bold, rhythmic stability that anchors any visual environment
                with absolute precision.
              </p>
              [cite: 5]
              <div class="mt-4 grid grid-cols-3 gap-2">
                <div
                  class="aspect-square rounded-lg bg-[#0385FE] shadow-xs"
                ></div>
                [cite: 5]
                <div
                  class="aspect-square rounded-lg bg-[#6366F1] shadow-xs"
                ></div>
                [cite: 5]
                <div
                  class="aspect-square rounded-lg bg-[#F3F4F6] border border-gray-100"
                ></div>
                [cite: 5]
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── ФИРМЕННЫЙ ПОДВАЛ КЕЙСА ─────────────────────────────── -->
      <footer id="contact" class="bg-[#0B0B0F] text-white">
        <div class="mx-auto max-w-[90rem] px-4 py-14 sm:px-6 lg:px-8">
          <div
            class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start"
          >
            <p
              class="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]"
            >
              Let's create something<br /><span class="text-[#818CF8]"
                >meaningful together.</span
              >
            </p>
            [cite: 5]
            <div
              class="flex flex-col gap-8 lg:items-end lg:text-right text-sm text-gray-300"
            >
              <div class="space-y-2">
                <p>
                  <a
                    href="tel:+41762033397"
                    class="transition-colors hover:text-white"
                    >+41 76 203 33 97</a
                  >
                </p>
                [cite: 5]
                <p>
                  <a
                    href="mailto:perepely@gmail.com"
                    class="transition-colors hover:text-white"
                    >perepely@gmail.com</a
                  >
                </p>
                [cite: 5]
                <p>Zürich, 8037</p>
                [cite: 5]
              </div>
              <a
                href="mailto:perepely@gmail.com"
                class="group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#6366F1] px-7 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#818CF8]"
              >
                Get in Touch
                <span
                  class="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >→</span
                > </a
              >[cite: 5]
            </div>
          </div>
          <div
            class="mt-14 border-t border-white/10 pt-8 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-4"
          >
            <p>© 2026 Olena Perepelychna. All rights reserved.</p>
            [cite: 5]
            <NuxtLink
              to="/"
              class="text-gray-400 hover:text-white transition-colors"
              >← Back to Portfolio</NuxtLink
            >[cite: 5]
          </div>
        </div>
      </footer>
    </div>

    <!-- ⚡️ ДЕФОЛТНЫЙ МАКЕТ ДЛЯ ДРУГИХ СТРАНИЦ ⚡️ -->
    <div v-else class="mx-auto max-w-4xl px-4 py-12">
      <h1 class="text-4xl font-bold mb-6">{{ page.title }}</h1>
      <ContentRenderer :value="page" class="prose max-w-none" />
    </div>
  </main>
</template>
