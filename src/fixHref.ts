import i from './_helpers/_internals'
import appendLangPrefix from './_helpers/appendLangPrefix'

export default (href: string, lng: string): string => {
  const isRoot =
    i.defaultLangRedirect !== 'lang-path' && i.defaultLanguage === lng
  return i.isStaticMode && !isRoot ? appendLangPrefix(href, lng) || '' : href
}
