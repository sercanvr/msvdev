<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
  summaryParagraphs: {
    type: Array,
    required: true,
  }
})
</script>

<template>
  <section class="hero-section">
    <div class="hero-left">
      <img class="profile-img" :src="profile.image" :alt="profile.fullName" />
      <h1 class="profile-name">{{ profile.fullName }}</h1>
      <p class="profile-role">{{ profile.role }}</p>
    </div>

    <div class="hero-right">
      <p v-for="line in summaryParagraphs" :key="line" v-html="line"></p>
    </div>
  </section>
</template>
