<template>
  <div>
    <button class="burger-menu" @click="toggleMenu">
      <span :class="{ 'open': isOpen }">☰</span>
    </button>

    <ul class="nav-links" v-if="isOpen">
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

<script>
export default {
  name: "BurgerMenu",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.burger-menu {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.burger-menu:focus {
  outline: none;
}

.nav-links {
  list-style: none;
  background: var(--background-color);
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.nav-links li {
  margin: 0.5rem 0;
}

body.dark-theme .nav-links {
  background: var(--dark-background-color);
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color);
}

body.dark-theme .nav-links a {
  color: var(--dark-text-color);
}
</style>
