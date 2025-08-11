<template>
  <header>
    <router-link to="/" class="logo">
      <img src="/src/assets/images/logo.png" alt="logo" width="150px" />
    </router-link>

    <button class="burger" @click="isOpen = !isOpen" aria-label="Toggle menu">
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
    </button>

    <nav :class="{ open: isOpen }">
      <ul>
        <li>
          <router-link @click="closeMenu" :to="{ path: '/', hash: '#products' }">Products</router-link>
        </li>
        <li>
          <router-link @click="closeMenu" :to="{ path: '/', hash: '#about' }">About us</router-link>
        </li>
        <li>
          <router-link @click="closeMenu" :to="{ hash: '#contacts' }">Contact us</router-link>
        </li>
        <li>
          <router-link @click="closeMenu" to="/VideoRecipes">Video recipes</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    isOpen(value) {
      document.body.style.overflow = value ? 'hidden' : '';
    },
  },
  methods: {
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-dark-blue);
  color: var(--color-white);
  font-family: 'Trend Sans One', sans-serif;
  position: relative;
}

.logo {
  z-index: 1001;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.burger span {
  width: 25px;
  height: 3px;
  background: var(--color-white);
  border-radius: 2px;
  transition: 0.3s;
}


.burger span.open:nth-child(1) {
  transform: rotate(45deg) translateY(11px);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: rotate(-45deg) translateY(-11px);
}

nav {
  display: flex;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 40px;
}

ul li a {
  position: relative;
  text-decoration: none;
  color: inherit;
}

ul li a::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

ul li a:hover::after {
  width: 100%;
}

@media (max-width: 860px) {
  header img {
    width: 100px;
  }
  .burger {
    display: flex;
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    background: var(--color-dark-blue);
    flex-direction: column;
    justify-content: center;
    transition: right 0.3s ease;
    z-index: 1000;
  }

  nav.open {
    right: 0;
    width: 100%;
    height: 100vh;
  }

  ul {
    flex-direction: column;
    text-align: center;
  }
}
</style>

  