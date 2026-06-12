export interface ExperienceItem {
  period: string
  company: string
  role: string
  description: string
  link?: string
  initials?: string
}

export interface EducationItem {
  school: string
  degree: string
  period: string
  description: string
  tag?: string
  icon?: string
}

export interface AboutRecord {
  name?: string
  role?: string
  bio?: string
  philosophy_quote?: string
  philosophy_text?: string
  stat_years_value?: string
  stat_years_label?: string
  stat_projects_value?: string
  stat_projects_label?: string
  email?: string
  phone?: string
  location?: string
  resume_url?: string
  strategy_skills?: string[]
  design_skills?: string[]
  software_tools?: string[]
  ai_tools?: string[]
  experience_featured?: ExperienceItem[]
  experience_other?: ExperienceItem[]
  education?: EducationItem[]
  meta?: Record<string, unknown>
  [key: string]: unknown
}

function asStringList(value: unknown): string[] {
  if (!value) return []
  if (Array.isArray(value)) return value.map(String)
  return []
}

export function normalizeAbout(raw: AboutRecord | null | undefined): AboutRecord {
  const meta =
    raw?.meta && typeof raw.meta === 'object'
      ? (raw.meta as Record<string, unknown>)
      : {}

  const merged = { ...meta, ...raw } as AboutRecord

  return {
    ...merged,
    strategy_skills: asStringList(merged.strategy_skills ?? meta.strategy_skills),
    design_skills: asStringList(merged.design_skills ?? meta.design_skills),
    software_tools: asStringList(merged.software_tools ?? meta.software_tools),
    ai_tools: asStringList(merged.ai_tools ?? meta.ai_tools),
    experience_featured: (merged.experience_featured ??
      meta.experience_featured ??
      []) as ExperienceItem[],
    experience_other: (merged.experience_other ??
      meta.experience_other ??
      []) as ExperienceItem[],
    education: (merged.education ?? meta.education ?? []) as EducationItem[],
    meta,
  }
}

export async function fetchAbout(): Promise<AboutRecord> {
  const result = await queryCollection('about').first()
  return normalizeAbout((result ?? {}) as AboutRecord)
}
