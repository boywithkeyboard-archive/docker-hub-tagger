export type DockerImage = {
  architecture: string
  features: string
  variant: string | null
  digest: string
  os: string
  os_features: string
  os_version: string | null
  size: number
  status: string
  last_pulled: string
  last_pushed: string
}

export type DockerTag = {
  creator: number
  id: number
  images: DockerImage[]
  last_updated: string
  last_updater: number
  last_updater_username: string
  name: string
  repository: number
  full_size: number
  v2: boolean
  tag_status: string
  tag_last_pulled: string
  tag_last_pushed: string
  media_type: string
  content_type: string
  digest: string
}

async function fetchTagsRecursively(repository: string, page: number, results: DockerTag[] = []) {
  const res = await fetch(`https://hub.docker.com/v2/repositories/library/${repository}/tags?page=${page}&page_size=100`)

  if (!res.ok) {
    await res.body?.cancel()

    return results
  }

  const json = await res.json() as { results: DockerTag[], [key: string]: unknown }

  results = [
    ...results,
    ...json.results
  ]

  if (json.next) {
    return fetchTagsRecursively(repository, page + 1, results)
  }

  return results
}

export function fetchTags(repository: string) {
  return fetchTagsRecursively(repository, 1)
}

export async function fetchTagNames(repository: string): Promise<string[]> {
  const tags = await fetchTags(repository)

  return tags.map(tag => tag.name)
}
