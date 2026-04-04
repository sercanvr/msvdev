import { describe, expect, it } from 'vitest'
import i18n from '../../i18n'

describe('i18n', () => {
  it('uses Turkish as fallback default', () => {
    expect(['tr', 'en', 'de']).toContain(i18n.global.locale.value)
    expect(i18n.global.fallbackLocale.value).toBe('tr')
  })
})
