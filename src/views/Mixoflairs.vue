<template>
    <div>
        <div className="hero">
            <video autoplay muted loop>
                <source src="#" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div className="offer">
                <p class="offer-text">Shake it up with fun, easy video recipes made just for your Mixoflair kit! From classics to signature twists — let the cocktail magic begin.</p>
                <router-link to="/VideoRecipes">Video recipes</router-link>
            </div>
        </div>
    </div>
<h1>Our products</h1>
<div class="slider" id="products">
  <button class="nav-btn" @click="prevSlide">‹</button>

  <div class="slide">
    <img :src="products[currentIndex].image" :alt="products[currentIndex].title" />
    <p>{{ products[currentIndex].title }}</p>
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
    /* display: flex; */
    position: relative;
    width: 100%;
    height: 644px;
    border-radius: 40px;
    overflow: hidden;
    padding: 0 100px;
    font-family: 'Burford Base', sans-serif;
    }

    .offer {
    z-index: 1;
    display: flex;
    width: 530px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    background: none;
    font-family: 'Burford Base', sans-serif;
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
    margin-top: 20px;
}

.slide {
  text-align: center;
  width: 50%;
}

.slide p {
    font-family: 'Jano Sans Pro Regular', sans-serif;
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

const products = ref([
    { id: 1, title: 'Mixoflair Bartender Kit', image: './src/assets/images/bartender-kit.jpg' },
])

const currentIndex = ref(0)

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + products.value.length) % products.value.length
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % products.value.length
}
</script>
