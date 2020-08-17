interface I18nConfig {
  allLanguages?: string[]
  defaultLanguage?: string | any
  defaultLangRedirect?: string
  ignoreRoutes?: string[]
  currentPagesDir?: string
  finalPagesDir?: string
  localesPath?: string
  logBuild?: boolean
  loadLocaleFrom?: any
  pages?: object
  redirectToDefaultLang?: boolean
}

export default I18nConfig
