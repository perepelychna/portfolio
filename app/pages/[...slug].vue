<script setup lang="ts">
import { useRoute } from "vue-router";
import InservissLayout from "~/app/components/projects/InservissLayout.vue";
import NeirotraceLayout from "~/app/components/projects/NeirotraceLayout.vue";
import DefaultLayout from "~/app/components/projects/DefaultLayout.vue";

const route = useRoute();

// Запрашиваем данные из коллекции
const { data: project } = await useAsyncData(
  "project-" + route.path,
  async () => {
    const result = await queryCollection("content").path(route.path).first();
    return result as any;
  },
);

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
    <InservissLayout
      v-if="project && project.title === 'INSERVISS'"
      :project="project"
    />
    <NeirotraceLayout
      v-else-if="project && project.title === 'NEIRO TRACE'"
      :project="project"
    />
    <DefaultLayout v-else-if="project" :project="project" />
  </div>
</template>
