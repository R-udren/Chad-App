<template>
  <header class="app-header">
    <nav class="navbar">
      <div class="left-section">
        <div class="logo gradient-logo">Chad Web Application</div>
      </div>
      <div class="center-section">
        <ul class="nav-links">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li>
            <router-link to="/portfolio">Portfolio</router-link>
          </li>
        </ul>
      </div>
      <div class="right-section">
        <ThemeSwitcher class="primary-button" />
      </div>
      <!-- Встраиваем бургер-меню -->
      <BurgerMenu />
    </nav>
  </header>
</template>

<script>
import ThemeSwitcher from './ThemeSwitcher.vue';
import BurgerMenu from './BurgerMenu.vue';

export default {
  name: "Header",
  components: {
    ThemeSwitcher,
    BurgerMenu,
  },
};
</script>

<style scoped>
.app-header {
  background: var(--background-color);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
}

body.dark-theme .app-header {
  background: var(--dark-background-color);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.left-section,
.center-section,
.right-section {
  display: flex;
  align-items: center;
}

/* Gradient text styles for the logo */
.logo {
  font-size: var(--h4);
  font-weight: 700;
  background: linear-gradient(120deg, var(--primary-color), var(--accent-color));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

body.dark-theme .logo {
  background: linear-gradient(120deg, var(--dark-primary-color), var(--dark-accent-color));
  background-clip: text;
}

/* Navigation Links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  position: relative;
}

.nav-links li {
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color);
  position: relative;
  font-weight: 500;
}

body.dark-theme .nav-links a {
  color: var(--dark-text-color);
}

.nav-links a:hover {
  color: var(--primary-color);
  text-shadow: 0 0 5px var(--primary-color);
}

body.dark-theme .nav-links a:hover {
  color: var(--dark-primary-color);
  text-shadow: 0 0 5px var(--dark-primary-color);
}

.nav-links a::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
  position: absolute;
  left: 0;
  bottom: -2px;
}

body.dark-theme .nav-links a::after {
  background: var(--dark-primary-color);
}

.nav-links a:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .center-section {
    display: none;
  }
}
</style>
