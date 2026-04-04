import { createI18n } from 'vue-i18n'
import tr from './locales/tr.json'
import en from './locales/en.json'
import de from './locales/de.json'

const locale = 'tr'
document.documentElement.setAttribute('lang', locale)

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'tr',
  messages: {
    tr,
    en,
    de,
  },
})

export default i18n
