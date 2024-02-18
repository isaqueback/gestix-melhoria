import { Namespace } from 'i18next'

export const defaultLocale = 'pt-PT'
export const languages = [defaultLocale, 'pt-BR', 'en-US']
export const languagesLabel = [
  'Portuguese - PT',
  'Portuguese - BR',
  'English - US',
]
export const defaultNS: Namespace = 'home'
export const cookieName = 'i18next'

export function getOptions(lng = defaultLocale, ns = defaultNS) {
  return {
    supportedlocales: languages,
    defaultLocale,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
