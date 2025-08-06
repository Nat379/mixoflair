<template>
    <div>
      <h1>Welcome to the Mixoflair Cocktail Library!</h1>
      <h2>Discover our signature cocktail recipes — created by pros, crafted for you.</h2>
  
      <div class="tabs">
        <div
          class="tab-item"
          v-for="cat in categories"
          :key="cat"
          :class="{ active: selectedCategory === cat }"
          @click="selectCategory(cat)"
        >
          {{ cat }}
        </div>
      </div>
  
      <div class="video-grid">
        <VideoCard
            v-for="video in filteredVideos"
            :key="video.id"
            :video="video"
            @open="openModal"
/>
      </div>
  
      <VideoModal
        v-if="selectedVideo"
        :video="selectedVideo"
        @close="selectedVideo = null"
      />
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import videoData from '@/data/videoData.js'
  import VideoCard from '@/components/VideoCard.vue'
  import VideoModal from '@/components/VideoModal.vue'
  
  export default {
    components: { VideoCard, VideoModal },
    setup() {
      const selectedCategory = ref('All')
      const selectedVideo = ref(null)
  
      const categories = ['All', 'old-fashioned', 'highball', 'nick-and-nora', 'coupe']
  
      const filteredVideos = computed(() => {
        return selectedCategory.value === 'All'
          ? videoData
          : videoData.filter(v => v.category === selectedCategory.value)
      })
  
      const selectCategory = cat => {
        selectedCategory.value = cat
      }
  
      const openModal = video => {
        selectedVideo.value = video
      }
  
      return {
        selectedCategory,
        categories,
        filteredVideos,
        selectCategory,
        selectedVideo,
        openModal
      }
    }
  }
  </script>
  
  <style scoped>
  body {
    display: flex;
    flex-direction: column;
  }
  h1, h2 {
    display: flex;
    justify-content: center;
    color: var(--color-metal);
    text-align: center;
    margin: 20px auto;
  }
  
  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }
  
  .tab-item {
    display: flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    border: 1px solid var(--color-orange);
    cursor: pointer;
    background-color: var(--color-metal);
    color: var(--color-dark-blue);
    transition: 0.3s ease;
  }
  
  .tab-item.active,
  .tab-item:hover {
    color: var(--color-metal);
    background-color: var(--color-dark-blue);
  }
  
  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
    padding: 0 16px 32px;
  }
  </style>
  