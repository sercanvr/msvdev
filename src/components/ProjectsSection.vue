<script setup>
import { useI18n } from 'vue-i18n'
import { safeExternalUrl } from '../utils/security'

defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const { t, locale } = useI18n()
</script>

<template>
  <div class="group-projects">
    <div v-for="item in items" :key="item.name" class="project-item">
      <div class="project-info">
        <h4 class="project-name">
          <img v-if="item.icon" :src="item.icon" alt="" class="project-icon" />
          {{ item.name }}
        </h4>
        <p class="project-subtitle">{{ typeof item.subtitle === 'object' ? item.subtitle[locale] : item.subtitle }}</p>
      </div>
      <a :href="safeExternalUrl(item.url)" class="project-link" target="_blank" rel="noopener noreferrer">
        {{ t('project.view') }}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </a>
    </div>
  </div>
</template>
