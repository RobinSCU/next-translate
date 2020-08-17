import NextRouter, { SingletonRouter } from 'next/router'
import clientSideLang from './clientSideLang'
import fixAs from './fixAs'
import fixHref from './fixHref'

interface I18nRouter extends SingletonRouter {
  pushI18n: any
  replaceI18n: any
}

const nav = (ev: string) => (
  a1: { url: string; as: string; options: any },
  a2: string,
  a3 = {}
) => {
  //TODO Options type
  const a1IsObj = typeof a1 === 'object'
  const url = a1IsObj ? a1.url : a1
  const as = a1IsObj ? a1.as : a2
  const options = a1IsObj ? a1.options : a3
  const lng = options.lang || clientSideLang()
  const el = document.querySelector('html')

  if (el) el.lang = lng

  // @ts-ignore
  return NextRouter[ev](fixHref(url, lng), fixAs(as, url, lng), options)
}

;(NextRouter as I18nRouter).pushI18n = nav('push')
;(NextRouter as I18nRouter).replaceI18n = nav('replace')

export default NextRouter
