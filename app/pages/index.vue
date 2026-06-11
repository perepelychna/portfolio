<script setup lang="ts">
import { ref, computed } from "vue";

// Запрашиваем данные из папки content/projects
const { data: projects } = await useAsyncData("projects-list", () => {
  return queryCollection("content").where("path", "LIKE", "/projects/%").all();
});

const activeFilter = ref("all");

// ИСПРАВЛЕНО: Теперь фильтрация строго использует переменную projects
const filteredProjects = computed(() => {
  if (!projects.value) return [];
  if (activeFilter.value === "all") return projects.value;

  return projects.value.filter((project) => {
    const tags = project.tags || "";
    return tags.includes(activeFilter.value);
  });
});

function setFilter(tag: string) {
  activeFilter.value = tag;
}
</script>

<template>
  <div class="bg-white font-sans text-[#0B0B0F] antialiased">
    <!-- ── NAVIGATION ──────────────────────────────────────────── -->
    <header
      class="sticky top-0 z-50 border-b border-gray-100/80 bg-white/90 backdrop-blur-md"
    >
      <div
        class="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <NuxtLink
          to="/"
          class="flex min-h-[44px] items-center transition-all duration-300 hover:opacity-80 hover:-translate-y-px"
        >
          <img
            src="/assets/logo_example.png"
            alt="Olena Perepelychna"
            class="h-10 w-auto"
          />
        </NuxtLink>

        <nav
          class="hidden items-center gap-8 text-sm font-medium text-gray-500 md:flex"
        >
          <NuxtLink
            to="/about"
            class="nav-link min-h-[44px] leading-[44px] hover:text-[#0B0B0F]"
            >About</NuxtLink
          >
          <a
            href="#selected-work"
            class="nav-link min-h-[44px] leading-[44px] hover:text-[#0B0B0F]"
            >Projects</a
          >
          <NuxtLink
            to="/about#experience"
            class="nav-link min-h-[44px] leading-[44px] hover:text-[#0B0B0F]"
            >Experience</NuxtLink
          >
          <a
            href="#contact"
            class="nav-link min-h-[44px] leading-[44px] hover:text-[#0B0B0F]"
            >Contact</a
          >
        </nav>
      </div>
    </header>

    <main>
      <!-- ── HERO SECTION ────────────────────────────────────────── -->
      <section
        class="mx-auto max-w-[90rem] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
      >
        <div
          class="relative overflow-hidden rounded-2xl border border-white/10 shadow-soft"
        >
          <!-- Твоя параллакс-картинка фоном -->
          <div
            class="absolute inset-0 bg-cover bg-center"
            style="
              background-image: url(&quot;/assets/background.png&quot;);
              min-height: 100%;
            "
          ></div>
          <!-- Затемняющий градиент поверх картинки -->
          <div
            class="absolute inset-0 bg-gradient-to-b from-[#05050F]/84 via-[#05050F]/54 to-[#05050F]/30"
          ></div>

          <!-- Контент хедера -->
          <div
            class="relative z-10 flex flex-col gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10 lg:py-20"
          >
            <div
              class="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left text-white"
            >
              <div class="space-y-3">
                <p
                  class="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-300"
                >
                  2026
                </p>
                <h1
                  class="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
                >
                  Portfolio
                </h1>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.22em] text-gray-300 drop-shadow sm:text-sm"
                >
                  Soulful Brand Architect
                </p>
              </div>
            </div>

            <div class="flex shrink-0 justify-center lg:justify-end">
              <a
                href="#contact"
                class="group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#6366F1] px-7 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-colors duration-300 hover:bg-[#4F46E5]"
              >
                Get in Touch
                <span
                  class="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                  >→</span
                >
              </a>
            </div>
          </div>

          <!-- Панель быстрых фильтров внутри хедера -->
          <div
            class="relative z-10 border-t border-white/10 bg-black/25 px-3 py-3 sm:px-6"
          >
            <div
              class="no-scrollbar flex gap-1 overflow-x-auto whitespace-nowrap text-[11px] font-medium uppercase tracking-wide text-gray-300 sm:justify-center sm:gap-0 sm:text-xs sm:tracking-wider"
            >
              <button
                @click="setFilter('business')"
                :class="[
                  'px-3 py-2.5 rounded-full transition-colors sm:px-4',
                  activeFilter === 'business'
                    ? 'bg-white/14 text-white'
                    : 'hover:text-white',
                ]"
              >
                Business Development
              </button>
              <span class="hidden self-center text-white/20 sm:inline">|</span>
              <button
                @click="setFilter('brand')"
                :class="[
                  'px-3 py-2.5 rounded-full transition-colors sm:px-4',
                  activeFilter === 'brand'
                    ? 'bg-white/14 text-white'
                    : 'hover:text-white',
                ]"
              >
                Brand &amp; Identity
              </button>
              <span class="hidden self-center text-white/20 sm:inline">|</span>
              <button
                @click="setFilter('product')"
                :class="[
                  'px-3 py-2.5 rounded-full transition-colors sm:px-4',
                  activeFilter === 'product'
                    ? 'bg-white/14 text-white'
                    : 'hover:text-white',
                ]"
              >
                Product Design
              </button>
              <span class="hidden self-center text-white/20 sm:inline">|</span>
              <button
                @click="setFilter('uiux')"
                :class="[
                  'px-3 py-2.5 rounded-full transition-colors sm:px-4',
                  activeFilter === 'uiux'
                    ? 'bg-white/14 text-white'
                    : 'hover:text-white',
                ]"
              >
                UI/UX
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ── ABOUT TEASER ────────────────────────────────────────── -->
      <section id="about" class="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/about" class="group block">
          <div
            class="rounded-2xl border border-gray-100 bg-[#F3F4F6] p-8 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lift sm:p-10"
          >
            <div
              class="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10"
            >
              <div class="flex justify-center lg:col-span-2 lg:justify-start">
                <img
                  src="/assets/My_avatar_photo.png"
                  alt="Olena Perepelychna"
                  class="h-28 w-28 rounded-xl border border-gray-200 object-cover object-top shadow-sm transition-transform duration-300 group-hover:scale-[1.02] lg:h-36 lg:w-36"
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
                  <span class="font-medium text-ink"
                    >structural clarity over visual noise</span
                  >
                  and radical minimalism. Currently studying Interaction Design
                  at ZHdK, Zurich.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="rounded-full bg-indigo-500/10 px-3 py-1.5 text-[11px] font-semibold text-indigo-700"
                    >Brand &amp; Identity</span
                  >
                  <span
                    class="rounded-full bg-indigo-500/10 px-3 py-1.5 text-[11px] font-semibold text-indigo-700"
                    >Product Design</span
                  >
                  <span
                    class="rounded-full bg-indigo-500/10 px-3 py-1.5 text-[11px] font-semibold text-indigo-700"
                    >UI/UX</span
                  >
                </div>
              </div>

              <div class="flex justify-center lg:col-span-2 lg:justify-end">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-xl text-black transition-all duration-300 group-hover:border-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white"
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
        class="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div
          class="mb-8 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <h2 class="text-2xl font-bold tracking-tight text-black sm:text-3xl">
            Selected Work
          </h2>

          <div class="flex flex-wrap gap-2">
            <button
              @click="setFilter('all')"
              :class="[
                'rounded-full px-4 py-2.5 text-xs font-semibold transition-all sm:text-sm',
                activeFilter === 'all'
                  ? 'bg-[#6366F1] text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-500/40',
              ]"
            >
              All
            </button>
            <button
              @click="setFilter('business')"
              :class="[
                'rounded-full px-4 py-2.5 text-xs font-semibold transition-all sm:text-sm',
                activeFilter === 'business'
                  ? 'bg-[#6366F1] text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-500/40',
              ]"
            >
              Business Dev
            </button>
            <button
              @click="setFilter('brand')"
              :class="[
                'rounded-full px-4 py-2.5 text-xs font-semibold transition-all sm:text-sm',
                activeFilter === 'brand'
                  ? 'bg-[#6366F1] text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-500/40',
              ]"
            >
              Brand &amp; Identity
            </button>
            <button
              @click="setFilter('product')"
              :class="[
                'rounded-full px-4 py-2.5 text-xs font-semibold transition-all sm:text-sm',
                activeFilter === 'product'
                  ? 'bg-[#6366F1] text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-500/40',
              ]"
            >
              Product Design
            </button>
            <button
              @click="setFilter('uiux')"
              :class="[
                'rounded-full px-4 py-2.5 text-xs font-semibold transition-all sm:text-sm',
                activeFilter === 'uiux'
                  ? 'bg-[#6366F1] text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-500/40',
              ]"
            >
              UI/UX
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-5 lg:gap-6">
          <!-- Перебираем все проекты из CMS -->
          <div v-for="project in filteredProjects" :key="project.path">
            <!-- ПЕРВЫЙ ТИП КАРТОЧКИ: INSERVISS (Светлая с телефонами) -->
            <NuxtLink
              v-if="project.title === 'INSERVISS'"
              :to="project.path"
              class="group block rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6 shadow-sm transition-all duration-300 hover:shadow-lift sm:p-8 lg:p-10"
            >
              <div
                class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-12"
              >
                <div class="space-y-5">
                  <div
                    class="text-xs font-bold uppercase tracking-widest text-gray-400"
                  >
                    {{ project.challenge_num || "01" }}
                  </div>
                  <h3
                    class="text-2xl font-bold tracking-tight text-black sm:text-3xl"
                  >
                    {{ project.title }}
                  </h3>
                  <p class="text-sm font-medium text-[#4F46E5] sm:text-base">
                    {{
                      project.subtitle || "Marketplace for Services in One App"
                    }}
                  </p>
                  <p class="text-sm leading-relaxed text-gray-600 sm:text-base">
                    End-to-end creation of the Inserviss ecosystem, merging
                    founding-level business strategy with high-precision UI/UX
                    and a soulful brand identity.
                    <span class="font-medium text-black"
                      >{{ project.duration || "2017–Present" }}.</span
                    >
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in project.tags?.split(' ')"
                      :key="tag"
                      class="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-gray-600 uppercase"
                      >{{ tag }}</span
                    >
                  </div>
                </div>
                <!-- Мокапы телефонов для Inserviss -->
                <div class="flex justify-center gap-3 sm:gap-4 lg:justify-end">
                  <div
                    class="w-[28%] max-w-[110px] p-2 bg-[#12121A] border border-white/8 rounded-xl shadow-xl"
                  >
                    <div
                      class="mb-2 h-1.5 w-8 rounded-full bg-white/10 mx-auto"
                    ></div>
                    <div class="space-y-2">
                      <div
                        class="rounded-md bg-indigo-500/90 p-2 text-[8px] font-semibold text-white text-center"
                      >
                        Nutrition
                      </div>
                      <div
                        class="rounded-md bg-white/5 p-2 text-[8px] text-gray-400 text-center"
                      >
                        Healthcare
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-[32%] max-w-[120px] p-2 bg-[#12121A] border border-white/8 rounded-xl shadow-xl text-center text-white"
                  >
                    <div
                      class="mb-2 flex justify-between text-[7px] text-gray-500"
                    >
                      <span>May</span><span>2026</span>
                    </div>
                    <div
                      class="grid grid-cols-7 gap-0.5 text-[6px] text-gray-500"
                    >
                      <span>M</span><span>T</span><span>W</span><span>T</span
                      ><span>F</span><span>S</span><span>S</span>
                    </div>
                    <div class="mt-1 grid grid-cols-7 gap-0.5">
                      <span
                        v-for="n in 8"
                        :key="n"
                        class="aspect-square rounded bg-white/5"
                      ></span>
                      <span
                        class="aspect-square rounded bg-[#6366F1] text-[6px] leading-[14px] text-white font-bold"
                        >12</span
                      >
                    </div>
                  </div>
                  <div
                    class="w-[28%] max-w-[110px] p-2 bg-[#12121A] border border-white/8 rounded-xl shadow-xl"
                  >
                    <div
                      class="mb-2 h-1.5 w-8 rounded-full bg-white/10 mx-auto"
                    ></div>
                    <div class="space-y-1.5">
                      <div
                        class="h-6 rounded-md bg-gradient-to-r from-indigo-500/40 to-blue-500/30"
                      ></div>
                      <div class="h-6 rounded-md bg-white/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>

            <!-- ВТОРOЙ ТИП КАРТОЧКИ: NEIRO TRACE (Темная неоновая) -->
            <NuxtLink
              v-else-if="project.title === 'NEIRO TRACE'"
              :to="project.path"
              class="group block relative overflow-hidden rounded-2xl border border-white/5 p-6 text-white sm:p-8 lg:p-10 bg-[#050508]"
            >
              <!-- Эффект радиальных волн на фоне -->
              <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.12)_0%,transparent_55%)] pointer-events-none"
              ></div>

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
                    Giving a Voice to the Silent
                  </p>
                  <p class="text-sm leading-relaxed text-gray-300 sm:text-base">
                    An interactive system that visualizes the brain's response
                    to specific stimuli in real-time — a wearable
                    neuro-monitoring device.
                    <span class="font-medium text-white">{{
                      project.duration || "2018–2019"
                    }}</span>
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in project.tags?.split(' ')"
                      :key="tag"
                      class="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-gray-200 uppercase"
                      >{{ tag }}</span
                    >
                  </div>
                </div>
                <!-- Графика для Neiro Trace -->
                <div class="flex justify-center gap-4 lg:justify-end">
                  <div
                    class="w-[42%] max-w-[160px] p-2.5 bg-[#12121A] border border-white/8 rounded-xl shadow-2xl"
                  >
                    <div
                      class="mb-2 flex items-center justify-between text-[8px] text-gray-500"
                    >
                      <span>Session</span>
                      <span
                        class="h-1.5 w-1.5 rounded-full bg-emerald-400"
                      ></span>
                    </div>
                    <div
                      class="h-16 rounded-lg bg-indigo-500/10 p-2 border border-indigo-500/20"
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
                    class="w-[42%] max-w-[160px] p-2.5 bg-[#12121A] border border-white/8 rounded-xl shadow-2xl"
                  >
                    <div class="mb-2 text-[8px] text-gray-500">Neural map</div>
                    <div
                      class="relative h-20 overflow-hidden rounded-lg bg-black/40 border border-white/5 flex items-center justify-center"
                    >
                      <div
                        class="absolute h-12 w-12 rounded-full border border-indigo-500/40 animate-pulse"
                      ></div>
                      <div class="h-6 w-6 rounded-full bg-indigo-600/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>

            <!-- ТРЕТИЙ ТИП: ДЕФОЛТНЫЕ КАРТОЧКИ ДЛЯ ОСТАЛЬНЫХ КЕЙСОВ -->
            <NuxtLink
              v-else-if="
                [
                  'iBUMPER',
                  'Gluten Free Cooking Easy',
                  'Nicky Tanner',
                ].includes(project.title)
              "
              :to="project.path"
              class="group block rounded-2xl border border-gray-100 bg-[#F3F4F6] p-6 shadow-sm transition-all duration-300 hover:shadow-lift mt-2"
            >
              <div
                class="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white shadow-xs bg-[#6366F1]"
              >
                {{ project.title.substring(0, 2).toUpperCase() }}
              </div>
              <h3 class="text-lg font-bold text-black mt-4">
                {{ project.title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-gray-600">
                {{ project.subtitle || project.description }}
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags?.split(' ')"
                  :key="tag"
                  class="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[10px] font-medium text-gray-600 uppercase"
                >
                  {{ tag }}
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- ── FOOTER ──────────────────────────────────────────────── -->
      <footer id="contact" class="bg-[#0B0B0F] text-white">
        <div
          class="mx-auto max-w-[90rem] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
          <div
            class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start"
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
                    class="transition-colors hover:text-white"
                    >+41 76 203 33 97</a
                  >
                </p>
                <p>
                  <a
                    href="mailto:perepely@gmail.com"
                    class="transition-colors hover:text-white"
                    >perepely@gmail.com</a
                  >
                </p>
                <p>Zürich, 8037</p>
              </div>
              <a
                href="mailto:perepely@gmail.com"
                class="group inline-flex min-h-[48px] w-fit items-center gap-2 rounded-full bg-[#6366F1] px-7 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#818CF8]"
              >
                Get in Touch
                <span
                  class="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >→</span
                >
              </a>
            </div>
          </div>
          <div
            class="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between"
          >
            <p>© 2026 Olena Perepelychna. All rights reserved.</p>
            <p class="flex items-center gap-4">
              <span>Zürich, Switzerland</span>
              <a href="#" class="text-gray-400 hover:text-white"
                >Back to top ↑</a
              >
            </p>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>
