<template>
    <div>
        <div class="hero">
            <video autoplay muted loop>
            <source :src="mainVideo" type="video/mp4">
            Your browser does not support the video tag.
            </video>
            <div class="offer">
                <p class="offer-text">Shake it up with fun, easy video recipes made just for your Mixoflair kit! From classics to signature twists — let the cocktail magic begin.</p>
                <router-link to="/VideoRecipes">Video recipes</router-link>
            </div>
        </div>
    </div>
<h1>Our products</h1>
<div class="slider" id="products">
  <button class="nav-btn" @click="prevSlide">‹</button>

  <div class="slide">
  <img
    :src="products[currentIndex].image"
    :alt="products[currentIndex].title"
  />
  <a
    :href="products[currentIndex].link"
    class="product-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ products[currentIndex].title }}
  </a>
</div>

  <button class="nav-btn" @click="nextSlide">›</button>
</div>

<section class="product-images" id="about">
    <img src="/src/assets/images/product-image-1.jpg" alt="product-image"/>
  <div class="images-container">
    <img src="/src/assets/images/product-image-2.jpg" alt="Photo 1" class="product-image" />
    <img src="/src/assets/images/product-image-3.jpg" alt="Photo 2" class="product-image" />
    <img src="/src/assets/images/product-image-4.jpg" alt="Photo 3" class="product-image" />
    <img src="/src/assets/images/product-image-5.jpg" alt="Photo 4" class="product-image" />
  </div>
</section>
</template>

<style scoped>
    .hero {
    display: flex;
    margin: 0 auto;
    position: relative;
    width: 80%;
    height: 644px;
    border-radius: 40px;
    overflow: hidden;
    padding: 0 100px;
    font-family: 'Burford Base', sans-serif;
    align-items: center;
    }

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
    }

    .offer {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    background: none;
    font-family: 'Burford Base', sans-serif;
    font-size: 54px;
    text-align: justify;
    /* background-color: rgba(0, 0, 0, 0.5); */
    border-radius: 40px;
    padding: 20px;
    }

h1 {
    display: flex;
    justify-content: center;
    font-family: 'Jano Sans Pro Medium', sans-serif;
}

.slider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 20px;
}

.slide {
  text-align: center;
  width: 50%;
}

.slide p {
    font-family: 'Jano Sans Pro Regular', sans-serif;
}

.slide a {
    color: var(--color-white);
    font-size: 22px;
}

.slide img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.nav-btn {
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  color: var(--color-b)
}

.product-images {
    width: 100%;
}

.product-images img {
    width: 100vw;
}

.images-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
}

.images-container  img {
    width: 48%;
    margin: 0.5%;
}
</style>

<script setup>
import { ref } from 'vue'
import mainVideo from '@/assets/videos/main-page-video.mp4'
const products = ref([
  {
    id: 1,
    title: 'Mixoflair Bartender Kit',
    image: './src/assets/images/bartender-kit.jpg',
    link: 'https://www.amazon.com/dp/B0F93ZYY6Q?maas=maas_adg_90A557194165039A1C03E906ABF77B14_afap_abs&ref_=aa_maas&tag=maas'
  },
])


const currentIndex = ref(0)

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + products.value.length) % products.value.length
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % products.value.length
}
</script>
