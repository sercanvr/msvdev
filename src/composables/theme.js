export const THEME_STORAGE_KEY = 'portfolio-theme'
export const DEFAULT_THEME = 'dark'

export function isValidTheme(value) {
  return value === 'light' || value === 'dark'
}

export function resolveInitialTheme(valueFromStorage) {
  if (isValidTheme(valueFromStorage)) {
    return valueFromStorage
  }
  return DEFAULT_THEME
}
