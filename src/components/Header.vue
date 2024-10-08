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
        <ThemeSwitcher class="primary-button"/>
      </div>
      <BurgerMenu/>
    </nav>
  </header>
</template>


<style scoped>
.app-header {
  background-color: var(--background);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  transition: background-color 0.3s ease-out;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.left-section {
  flex: 0 0 auto;
  margin-right: 1rem;
}

.center-section {
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.right-section {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

/* Gradient text styles for the logo */
.logo {
  font-size: var(--h4);
  font-weight: 700;
  background: linear-gradient(120deg, var(--primary), var(--accent));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
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
  color: var(--text);
  position: relative;
  font-weight: 500;
}

.nav-links a:hover {
  color: var(--primary);
  text-shadow: 0 0 5px var(--primary);
}

.nav-links a::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width 0.3s ease;
  position: absolute;
  left: 0;
  bottom: -2px;
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
