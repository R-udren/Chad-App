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

.burger-menu:focus {
  outline: none;
}

.nav-links {
  display: grid;
  list-style: none;
  background: var(--background);
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.nav-links li {
  margin: 0.5rem 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--text);
}
</style>
