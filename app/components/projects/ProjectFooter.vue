<template>
  <footer
    class="reveal border-t border-white/10 bg-[#0B0B0F] text-white"
    :class="dark ? '' : 'mt-8'"
  >
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
        <NuxtLink
          to="/"
          class="text-gray-400 transition-colors duration-300 hover:text-white"
        >
          Back to Portfolio ↑
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps({
  dark: {
    type: Boolean,
    default: true,
  },
})
</script>
