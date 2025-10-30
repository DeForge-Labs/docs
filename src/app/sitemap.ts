import { source } from '@/lib/source'

export default async function sitemap() {
  const baseUrl = 'https://docs.deforge.io'
  const docsUrls = source
    .getPages().map(page => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    }))

  return [...docsUrls]
}
