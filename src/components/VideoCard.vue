<template>
    <div class="video-card" @click="onClick">
      <img
      class="video-thumbnail"
      :src="video.thumbnail"
      :alt="video.title"
      loading="lazy"
    />
      <div class="video-info">
        <h3>{{ video.title }}</h3>
        <p>{{ video.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "VideoCard",
    props: {
      video: {
        type: Object,
        required: true
      }
    },
    methods: {
      onClick() {
        this.$emit("open", this.video);
      }
    }
  };
  </script>
  
  <style scoped>

.video-thumbnail {
  width: 100%;
  height: 66%;
  object-fit: cover;
  border-bottom: 1px solid var(--color-orange);
}
  .video-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
    border-radius: 12px;
    cursor: pointer;
    background-color: var(--color-metal);
    color: var(--color-dark-blue);
    transition: 0.3s;
    overflow: hidden;
  }
  
  .video-preview {
    flex: 2;
    width: 100%;
    height: 66%;
    object-fit: cover;
    border-bottom: 1px solid var(--color-orange);
  }
  
  .video-info {
    flex: 1;
    padding: 12px;
    text-align: center;
  }
  </style>
  