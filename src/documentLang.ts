import I18nConfig from './config'

const path = require('path')
const fs = require('fs')

// @ts-ignore
export default function documentLang({ __NEXT_DATA__ }, config: I18nConfig) {
  if (!config) {
    const configDir = path.join(process.cwd(), 'i18n.json')
    config = JSON.parse(fs.readFileSync(configDir))
  }

  const { page } = __NEXT_DATA__
  const [, langQuery] = page.split('/')
  return (
    config.allLanguages?.find((l) => l === langQuery) || config.defaultLanguage
  )
}
