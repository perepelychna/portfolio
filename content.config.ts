import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

const stringList = z.array(z.string()).optional()

const projectSchema = z.object({
  subtitle: z.string().optional(),
  hero_description: z.string().optional(),
  hero_tagline: z.string().optional(),
  client: z.string().optional(),
  role: z.string().optional(),
  markets: z.string().optional(),
  duration: z.string().optional(),
  url: z.string().optional(),
  tags: z.union([z.string(), z.array(z.string())]).optional(),
  layoutType: z
    .enum(['inserviss', 'neirotrace', 'ibumper', 'glutenfree', 'nickytanner', 'default'])
    .optional(),
  hero_label: z.string().optional(),
  location: z.string().optional(),
  project_type: z.string().optional(),
  design_style: z.string().optional(),
  deliverables: z.string().optional(),
  studio: z.string().optional(),
  studio_text: z.string().optional(),
  section01_tag: z.string().optional(),
  section01_title: z.string().optional(),
  section01_text: z.string().optional(),
  section01_stat_val: z.string().optional(),
  section01_stat_lbl: z.string().optional(),
  section01_stat_text: z.string().optional(),
  section01_continuity_title: z.string().optional(),
  section01_continuity_text: z.string().optional(),
  material_items: stringList,
  company_text: z.string().optional(),
  section02_tag: z.string().optional(),
  section02_title: z.string().optional(),
  section02_intro: z.string().optional(),
  section02_assets_text: z.string().optional(),
  section02_characters_text: z.string().optional(),
  store_architecture: stringList,
  asset_labels: stringList,
  section03_tag: z.string().optional(),
  section03_title: z.string().optional(),
  section03_product_text: z.string().optional(),
  section03_smm_text: z.string().optional(),
  section03_colors_text: z.string().optional(),
  section04_tag: z.string().optional(),
  section04_title: z.string().optional(),
  footnote: z.string().optional(),
  stat_copies_val: z.string().optional(),
  stat_copies_lbl: z.string().optional(),
  stat_copies_text: z.string().optional(),
  work_title: z.string().optional(),
  work_text: z.string().optional(),
  outcome_title: z.string().optional(),
  outcome_text: z.string().optional(),
  process_tag: z.string().optional(),
  process_title: z.string().optional(),
  publication_tag: z.string().optional(),
  publication_title: z.string().optional(),
  publication_text: z.string().optional(),
  publication_tags: stringList,
  process_steps: z
    .array(
      z.object({
        num: z.string(),
        title: z.string(),
        text: z.string(),
      }),
    )
    .optional(),
  pipeline_items: z
    .array(
      z.object({
        title: z.string(),
        text: z.string(),
      }),
    )
    .optional(),
  timeline_items: z
    .array(
      z.object({
        period: z.string(),
        title: z.string(),
        text: z.string(),
        link_label: z.string().optional(),
        link_url: z.string().optional(),
      }),
    )
    .optional(),
  challenge_num: z.string().optional(),
  challenge_tag: z.string().optional(),
  challenge_title: z.string().optional(),
  challenge_subtitle: z.string().optional(),
  challenge_core_insight: z.string().optional(),
  challenge_solution: z.string().optional(),
  challenge_text: z.string().optional(),
  stat_find_val: z.string().optional(),
  stat_find_lbl: z.string().optional(),
  stat_book_val: z.string().optional(),
  stat_book_lbl: z.string().optional(),
  stat_provider_val: z.string().optional(),
  stat_provider_lbl: z.string().optional(),
  stat_retain_val: z.string().optional(),
  stat_retain_lbl: z.string().optional(),
  solution_title: z.string().optional(),
  solution_intro: z.string().optional(),
  business_challenges: stringList,
  consumer_pain_points: stringList,
  tools: stringList,
  flow_title: z.string().optional(),
  flow_text: z.string().optional(),
  scheduler_title: z.string().optional(),
  scheduler_features: stringList,
  impact_title: z.string().optional(),
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
  identity_title: z.string().optional(),
  identity_font: z.string().optional(),
  identity_colors: z.string().optional(),
  problem_cards: stringList,
  journey_title: z.string().optional(),
  journey_steps: stringList,
  metrics_title: z.string().optional(),
  metric_cards: stringList,
  metrics_banner: z.string().optional(),
  tech_title: z.string().optional(),
  tech_features: stringList,
  ai_title: z.string().optional(),
  ai_cards: stringList,
  philosophy_title: z.string().optional(),
  philosophy_cards: stringList,
  philosophy_quote: z.string().optional(),
  outcome_cards: stringList,
})

const aboutSchema = z.object({
  name: z.string().optional(),
  role: z.string().optional(),
  bio: z.string().optional(),
  philosophy_quote: z.string().optional(),
  philosophy_text: z.string().optional(),
  stat_years_value: z.string().optional(),
  stat_years_label: z.string().optional(),
  stat_projects_value: z.string().optional(),
  stat_projects_label: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  location: z.string().optional(),
  resume_url: z.string().optional(),
  strategy_skills: stringList,
  design_skills: stringList,
  software_tools: stringList,
  ai_tools: stringList,
  experience_featured: z
    .array(
      z.object({
        period: z.string(),
        company: z.string(),
        role: z.string(),
        description: z.string(),
        link: z.string().optional(),
        initials: z.string().optional(),
      }),
    )
    .optional(),
  experience_other: z
    .array(
      z.object({
        period: z.string(),
        company: z.string(),
        role: z.string(),
        description: z.string(),
        link: z.string().optional(),
      }),
    )
    .optional(),
  education: z
    .array(
      z.object({
        school: z.string(),
        degree: z.string(),
        period: z.string(),
        description: z.string(),
        tag: z.string().optional(),
        icon: z.string().optional(),
      }),
    )
    .optional(),
})

export default defineContentConfig({
  collections: {
    about: defineCollection({
      type: 'data',
      source: 'about.yaml',
      schema: aboutSchema,
    }),
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
