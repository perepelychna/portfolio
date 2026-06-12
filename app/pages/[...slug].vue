<script setup lang="ts">
import InservissLayout from '~/components/projects/InservissLayout.vue'
import NeirotraceLayout from '~/components/projects/NeirotraceLayout.vue'
import IbumperLayout from '~/components/projects/IbumperLayout.vue'
import GlutenfreeLayout from '~/components/projects/GlutenfreeLayout.vue'
import NickytannerLayout from '~/components/projects/NickytannerLayout.vue'
import DefaultLayout from '~/components/projects/DefaultLayout.vue'
import {
  fetchProjectByPath,
  resolveLayoutType,
  type ProjectRecord,
} from '~/types/project'

const route = useRoute()

const { data: page } = await useAsyncData<ProjectRecord | null>(
  `page-${route.path}`,
  () => fetchProjectByPath(route.path),
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Case Study Not Found',
    fatal: true,
  })
}

const projectData = page.value
const layoutType = resolveLayoutType(projectData)
const isProjectPage = route.path.startsWith('/projects/')
</script>

<template>
  <div class="antialiased text-[#0B0B0F] bg-white font-sans">
    <template v-if="isProjectPage">
      <InservissLayout
        v-if="layoutType === 'inserviss'"
        :project="projectData"
      />
      <NeirotraceLayout
        v-else-if="layoutType === 'neirotrace'"
        :project="projectData"
      />
      <IbumperLayout
        v-else-if="layoutType === 'ibumper'"
        :project="projectData"
      />
      <GlutenfreeLayout
        v-else-if="layoutType === 'glutenfree'"
        :project="projectData"
      />
      <NickytannerLayout
        v-else-if="layoutType === 'nickytanner'"
        :project="projectData"
      />
      <DefaultLayout
        v-else
        :project="projectData"
      />
    </template>

    <main v-else class="mx-auto max-w-3xl px-4 py-16">
      <ContentRenderer
        v-if="page?.body"
        :value="page"
        class="prose prose-neutral max-w-none"
      />
      <div v-else class="space-y-4">
        <h1 class="text-3xl font-bold">{{ projectData.title }}</h1>
        <p v-if="projectData.description" class="text-gray-600">
          {{ projectData.description }}
        </p>
      </div>
    </main>
  </div>
</template>
