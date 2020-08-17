import I18nConfig from '../config'

export default function getDefaultLang(req: any, config: I18nConfig) {
  if (typeof config.defaultLanguage === 'function') {
    return config.defaultLanguage(req)
  }
  return config.defaultLanguage
}
