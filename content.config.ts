import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      // Includes all markdown under content/; project pages live at /projects/*
      source: '**',
    }),
  },
})
