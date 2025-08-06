<template>
    <div v-if="visible" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <button class="close-button" @click="close">×</button>
        <h2>{{ video.title }}</h2>
        <p v-if="video.description">{{ video.description }}</p>
        <div class="video-wrapper">
          <video
            :src="video.videoUrl"
            controls
            autoplay
            style="width: 100%; height: auto;"
          ></video>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "VideoModal",
    props: {
      video: Object
    },
    computed: {
      visible() {
        return !!this.video;
      }
    },
    methods: {
      close() {
        this.$emit("close");
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    padding: 24px;
    max-width: 800px;
    width: 90%;
    position: relative;
    border-radius: 12px;
  }
  
  .close-button {
    position: absolute;
    top: 8px;
    right: 12px;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .video-wrapper {
    margin-top: 16px;
  }

  video {
    max-height: 600px;
  }
  </style>
  