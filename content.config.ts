import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

const projectSchema = z.object({
  subtitle: z.string().optional(),
  client: z.string().optional(),
  role: z.string().optional(),
  markets: z.string().optional(),
  duration: z.string().optional(),
  url: z.string().optional(),
  tags: z
    .union([z.string(), z.array(z.string())])
    .optional(),
  layoutType: z.enum(['inserviss', 'neirotrace', 'default']).optional(),
  challenge_num: z.string().optional(),
  challenge_tag: z.string().optional(),
  challenge_title: z.string().optional(),
  challenge_subtitle: z.string().optional(),
  challenge_core_insight: z.string().optional(),
  challenge_solution: z.string().optional(),
  challenge_text: z.string().optional(),
  stat_hours_val: z.string().optional(),
  stat_hours_lbl: z.string().optional(),
  stat_lessons_val: z.string().optional(),
  stat_lessons_lbl: z.string().optional(),
  stat_webinars_val: z.string().optional(),
  stat_webinars_lbl: z.string().optional(),
  testimonial_quote: z.string().optional(),
  testimonial_author: z.string().optional(),
  testimonial_role: z.string().optional(),
  testimonial_meta: z.string().optional(),
})

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        exclude: ['projects/**'],
      },
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/**',
      schema: projectSchema,
    }),
  },
})
