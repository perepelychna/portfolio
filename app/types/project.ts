export interface ProjectRecord {
  title?: string
  subtitle?: string
  description?: string
  path?: string
  stem?: string
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
  meta?: Record<string, unknown>
  [key: string]: unknown
}

export function normalizeProject(raw: ProjectRecord | null | undefined): ProjectRecord | null {
  if (!raw) {
    return null
  }

  const meta =
    raw.meta && typeof raw.meta === 'object'
      ? (raw.meta as Record<string, unknown>)
      : {}

  return {
    ...meta,
    ...raw,
    path: raw.path,
    title: raw.title,
    description: raw.description,
    meta,
  } as ProjectRecord
}

export function normalizeProjects(
  items: ProjectRecord[] | null | undefined,
): ProjectRecord[] {
  return (items ?? [])
    .map((item) => normalizeProject(item))
    .filter((item): item is ProjectRecord => item !== null)
}

export function resolveLayoutType(
  project: ProjectRecord,
): 'inserviss' | 'neirotrace' | 'default' {
  if (project.layoutType === 'inserviss' || project.title === 'INSERVISS') {
    return 'inserviss'
  }
  if (project.layoutType === 'neirotrace' || project.title === 'NEIRO TRACE') {
    return 'neirotrace'
  }
  return 'default'
}

export function projectTags(project: ProjectRecord): string[] {
  const tags = project.tags

  if (!tags) {
    return []
  }
  if (Array.isArray(tags)) {
    return tags
  }
  return tags.split(/\s+/).filter(Boolean)
}

export async function fetchAllProjects(): Promise<ProjectRecord[]> {
  const byPath = await queryCollection('projects').order('stem', 'ASC').all()

  if (byPath?.length) {
    return normalizeProjects(byPath as ProjectRecord[])
  }

  const fallback = await queryCollection('content')
    .where('path', 'LIKE', '/projects/%')
    .order('stem', 'ASC')
    .all()

  return normalizeProjects(fallback as ProjectRecord[])
}

export async function fetchProjectByPath(
  path: string,
): Promise<ProjectRecord | null> {
  if (path.startsWith('/projects/')) {
    const fromProjects = await queryCollection('projects').path(path).first()

    if (fromProjects) {
      return normalizeProject(fromProjects as ProjectRecord)
    }
  }

  const fromContent = await queryCollection('content').path(path).first()

  return normalizeProject(fromContent as ProjectRecord | null)
}
