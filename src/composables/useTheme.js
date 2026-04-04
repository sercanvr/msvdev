import { ref, watch } from 'vue'
import { THEME_STORAGE_KEY, resolveInitialTheme } from './theme'

export function useTheme() {
  const theme = ref('dark')

  document.documentElement.setAttribute('data-theme', theme.value)

  watch(theme, (nextTheme) => {
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
  })

  function setTheme(nextTheme) {
    theme.value = nextTheme
  }

  return {
    theme,
    setTheme,
  }
}
