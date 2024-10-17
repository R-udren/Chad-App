<script setup>
import { ref } from 'vue';
const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
function closeMenu() {
  isOpen.value = false;
}
</script>

<template>
  <div>
    <button class="burger-menu" @click="toggleMenu">
      <span :class="{ 'open': isOpen }">☰</span>
    </button>

    <ul v-if="isOpen" class="nav-links">
      <li>
        <router-link to="/" @click="closeMenu">Home</router-link>
      </li>
      <li>
        <router-link to="/about" @click="closeMenu">About</router-link>
      </li>
      <li>
        <router-link to="/contact" @click="closeMenu">Contact</router-link>
      </li>
      <li>
        <router-link to="/portfolio" @click="closeMenu">Portfolio</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.burger-menu {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.burger-menu span {
  color: var(--text);
  transition: color 0.3s ease;
}

.burger-menu:focus {
  outline: none;
}

.nav-links {
  display: grid;
  list-style: none;
  background-color: var(--second-background);
  border-radius: 8px 0 0 8px;
  top: 60px;
  right: 0;
  width: clamp(80px, 50%, 150px);
  padding: 1rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 1;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-links li {
  margin: 0.5rem 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--text);
}

.nav-links a:hover {
  color: var(--primary);
  text-shadow: 0 0 5px var(--primary);
}
</style>
