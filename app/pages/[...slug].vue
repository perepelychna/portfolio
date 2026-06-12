<script setup lang="ts">
import InservissLayout from '~/components/projects/InservissLayout.vue'
import NeirotraceLayout from '~/components/projects/NeirotraceLayout.vue'
import DefaultLayout from '~/components/projects/DefaultLayout.vue'
import {
  resolveLayoutType,
  type ProjectRecord,
} from '~/types/project'

const route = useRoute()

const { data: project } = await useAsyncData<ProjectRecord | null>(
  `project-${route.path}`,
  async () => {
    const result = await queryCollection('content').path(route.path).first()
    return (result ?? null) as ProjectRecord | null
  },
)

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Case Study Not Found',
    fatal: true,
  })
}

const projectData = project.value
const layoutType = resolveLayoutType(projectData)
</script>

<template>
  <div class="antialiased text-[#0B0B0F] bg-white font-sans">
    <InservissLayout
      v-if="layoutType === 'inserviss'"
      :project="projectData"
    />
    <NeirotraceLayout
      v-else-if="layoutType === 'neirotrace'"
      :project="projectData"
    />
    <DefaultLayout
      v-else
      :project="projectData"
    />
  </div>
</template>
