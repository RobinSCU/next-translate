import { createContext } from 'react'

export default createContext({
  // Return the ns:id as default (checking if is an array for template literals)
  t: (k: string = '', query?: string | string[], options?: any) =>
    Array.isArray(k) ? k[0] : k,
  lang: '',
})
