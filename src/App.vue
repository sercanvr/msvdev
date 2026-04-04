<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ProfileHero from './components/ProfileHero.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import FinalLinksSection from './components/FinalLinksSection.vue'
import ScrollTopButton from './components/ScrollTopButton.vue'
import { profile, projectGroups, finalLinks } from './content/portfolioData'
import { useTheme } from './composables/useTheme'

const { t, locale } = useI18n()
const { theme, setTheme } = useTheme()

const localeOptions = [
  { label: 'TR', value: 'tr', full: 'Turkish' },
  { label: 'EN', value: 'en', full: 'English' },
  { label: 'DE', value: 'de', full: 'Deutsch' },
]

const isLangDropdownOpen = ref(false)

function toggleLangDropdown() {
  isLangDropdownOpen.value = !isLangDropdownOpen.value
}

function closeLangDropdown(e) {
  if (!e.target.closest('.lang-wrapper')) {
    isLangDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeLangDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeLangDropdown)
})

function setLanguage(nextLocale) {
  locale.value = nextLocale
  document.documentElement.setAttribute('lang', nextLocale)
  isLangDropdownOpen.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleThemeToggle() {
  setTheme(theme.value === 'dark' ? 'light' : 'dark')
}

function reloadPage() {
  localStorage.removeItem('portfolio-theme')
  localStorage.removeItem('vue-locale')
  localStorage.clear() // Reset site settings
  window.location.reload()
}

const summaryParagraphs = computed(() => {
  return profile.bio[locale.value] || profile.bio['tr']
})
const currentLangLabel = computed(() => localeOptions.find(o => o.value === locale.value)?.label || 'TR')
</script>

<template>
  <div class="app-wrapper">
    <header class="navbar">
      <div class="nav-container">
        <div class="nav-left">
          <span class="logo oleo-script-regular" @click="reloadPage">@msvdev</span>
        </div>
        <div class="nav-right">
          <div class="tooltip-box theme-btn">
            <button
              class="icon-btn"
              @click="handleThemeToggle"
              :aria-label="t('controls.switchTheme')"
            >
              <div class="icon-svg" style="mask-image: url(/theme.png); -webkit-mask-image: url(/theme.png);"></div>
            </button>
            <div class="tooltip">
              <div class="triangle"></div>
              {{ t('controls.switchTheme') }}
            </div>
          </div>

          <div class="tooltip-box lang-wrapper" :class="{ 'is-open': isLangDropdownOpen }">
            <button class="icon-btn" @click="toggleLangDropdown">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span class="lang-text">{{ currentLangLabel }}</span>
            </button>
            <div class="tooltip">
              <div class="triangle"></div>
              {{ t('controls.switchLanguage') }}
            </div>

            <div class="lang-dropdown" :class="{ 'is-open': isLangDropdownOpen }">
              <button
                v-for="option in localeOptions"
                :key="option.value"
                :class="{ active: locale === option.value }"
                @click="setLanguage(option.value)"
              >
                {{ option.full }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="main-content">
      <ProfileHero
        :profile="profile"
        :summary-paragraphs="summaryParagraphs"
      />

      <div class="projects-container">
        <h2 class="main-section-title">{{ t('sections.projects') }}</h2>
        <div class="group-section" v-for="group in projectGroups" :key="group.id">
           <h3 class="group-title">{{ t(group.titleKey) }}</h3>
           <ProjectsSection
             :items="group.projects"
           />
        </div>
      </div>

      <FinalLinksSection :links="finalLinks" />
    </main>

    <ScrollTopButton />
  </div>
</template>
