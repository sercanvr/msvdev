import { describe, expect, it } from 'vitest'
import { DEFAULT_THEME, isValidTheme, resolveInitialTheme } from '../../composables/theme'

describe('theme helpers', () => {
  it('accepts valid themes', () => {
    expect(isValidTheme('dark')).toBe(true)
    expect(isValidTheme('light')).toBe(true)
  })

  it('rejects invalid themes', () => {
    expect(isValidTheme('blue')).toBe(false)
    expect(isValidTheme('')).toBe(false)
  })

  it('falls back to dark theme by default', () => {
    expect(resolveInitialTheme(null)).toBe(DEFAULT_THEME)
    expect(resolveInitialTheme('unknown')).toBe(DEFAULT_THEME)
  })
})
