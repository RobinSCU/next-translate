import I18nConfig from '../config'
import { NextPageContext } from 'next'

// @todo Replace to [].flat() in the future
function flat(a: any[]) {
  return a.reduce((b, c) => b.concat(c), [])
}

/**
 * Get page namespaces
 *
 * @param {object} config
 * @param {string} page
 * @param {NextPageContext } ctx
 */
export default async function getPageNamespaces(
  { pages = {} }: I18nConfig,
  page: string,
  ctx: NextPageContext
) {
  const rgx = 'rgx:'
  const getNs = async (ns: (arg0: NextPageContext | string) => any) =>
    typeof ns === 'function' ? ns(ctx) : ns || []

  // Namespaces promises using regex
  const rgxs = Object.keys(pages).reduce((arr, p) => {
    if (
      p.substring(0, rgx.length) === rgx &&
      new RegExp(p.replace(rgx, '')).test(page)
    ) {
      // @ts-ignore
      arr.push(getNs(pages[p]))
    }
    return arr
  }, [])

  return [
    // @ts-ignore
    ...(await getNs(pages['*'])),
    // @ts-ignore
    ...(await getNs(pages[page])),
    ...flat(await Promise.all(rgxs)),
  ]
}
