import Internals from './_intenals'

let i: Internals = {}

export const setInternals = (l: Internals) => Object.assign(i, l)

export default i
