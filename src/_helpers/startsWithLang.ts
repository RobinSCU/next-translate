export default function startsWithLang(
  url: string,
  allLanguages?: string[]
): boolean {
  if (!allLanguages) return false

  return allLanguages.some((l) =>
    new RegExp(`(^\/${l}\/)|(^\/${l}$)`).test(url)
  )
}
