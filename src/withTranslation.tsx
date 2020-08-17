import useTranslation from './useTranslation'
import React from 'react'

/**
 * HOC to use the translations in no-functional components
 */
export default function withTranslation(Component: React.ComponentType) {
  function WithTranslation(props: any) {
    const i18n = useTranslation()

    return <Component i18n={i18n} {...props} />
  }

  return WithTranslation
}
