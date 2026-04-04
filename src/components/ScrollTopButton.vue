<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isVisible = ref(false)

function syncVisibility() {
  isVisible.value = window.scrollY > 0
}

function jumpToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  syncVisibility()
  window.addEventListener('scroll', syncVisibility, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', syncVisibility)
})
</script>

<template>
  <button
    v-show="isVisible"
    type="button"
    class="scroll-top"
    @click="jumpToTop"
    aria-label="Scroll Top"
  >
    <div class="up-arrow"></div>
  </button>
</template>
