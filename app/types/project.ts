export interface ProjectRecord {
  title?: string
  subtitle?: string
  description?: string
  path?: string
  tags?: string | string[]
  layoutType?: 'inserviss' | 'neirotrace' | 'default'
  duration?: string
  role?: string
  client?: string
  markets?: string
  url?: string
  challenge_num?: string
  challenge_tag?: string
  challenge_title?: string
  challenge_subtitle?: string
  challenge_core_insight?: string
  challenge_solution?: string
  challenge_text?: string
  stat_hours_val?: string
  stat_hours_lbl?: string
  stat_lessons_val?: string
  stat_lessons_lbl?: string
  stat_webinars_val?: string
  stat_webinars_lbl?: string
  testimonial_quote?: string
  testimonial_author?: string
  testimonial_role?: string
  testimonial_meta?: string
  [key: string]: unknown
}

export function resolveLayoutType(project: ProjectRecord): 'inserviss' | 'neirotrace' | 'default' {
  if (project.layoutType === 'inserviss' || project.title === 'INSERVISS') {
    return 'inserviss'
  }
  if (project.layoutType === 'neirotrace' || project.title === 'NEIRO TRACE') {
    return 'neirotrace'
  }
  return 'default'
}

export function projectTags(project: ProjectRecord): string[] {
  if (!project.tags) {
    return []
  }
  if (Array.isArray(project.tags)) {
    return project.tags
  }
  return project.tags.split(/\s+/).filter(Boolean)
}
