<template>
    <header>
        <router-link to="/"><img src="/src/assets/images/logo.png" alt="logo" width="100px"></router-link>
        <nav>
                <ul>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#contacts">Contact us</a></li>
                    <li><router-link to="/VideoRecipes">Video recipes</router-link></li>
                </ul>
        </nav>
    </header>
  </template>
  
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
  }
  nav {
    width: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
    align-self: stretch;
  }

  ul {
    width: 60%;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
  </style>
  