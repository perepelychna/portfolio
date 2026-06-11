<script setup lang="ts">
import { useRoute } from "vue-router";
import InservissLayout from "~/components/projects/InservissLayout.vue";
import NeirotraceLayout from "~/components/projects/NeirotraceLayout.vue";
import DefaultLayout from "~/components/projects/DefaultLayout.vue";

const route = useRoute();

// 1. Извлекаем данные проекта из CMS Nuxt Content
const { data: project } = await useAsyncData("project-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

// Если проект не найден в папке content/ — отдаем 404
if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Case Study Not Found",
    fatal: true,
  });
}
</script>

<template>
  <div class="antialiased text-[#0B0B0F] bg-white font-sans">
    <InservissLayout v-if="project.title === 'INSERVISS'" :project="project" />
    <NeirotraceLayout
      v-else-if="project.title === 'NEIRO TRACE'"
      :project="project"
    />

    <DefaultLayout v-else :project="project" />
  </div>
</template>
