export default function appendLangPrefix(
  url: undefined | string,
  lang: string
): string | undefined {
  if (!url || !url.length) return url

  return `/${lang}/${url.replace(/^\//, '')}`.replace(/\/$/, '')
}
