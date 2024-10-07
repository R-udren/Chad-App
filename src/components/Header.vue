<template>
  <header class="app-header">
    <nav class="navbar">
      <div class="logo gradient-logo">Chad Web Application</div>
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
      <ThemeSwitcher/>
    </nav>
  </header>
</template>

<script>
import ThemeSwitcher from './ThemeSwitcher.vue';

export default {
  name: "Header",
  components: {
    ThemeSwitcher,
  },
};
</script>

<style scoped>
.app-header {
  background: var(--background-color);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
}

/* Dark theme styles */
body.dark-theme .app-header {
  background: var(--dark-background-color);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: var(--h4);
  font-weight: 700;
}

/* Gradient styles for the logo */
.gradient-logo {
  background: linear-gradient(120deg, var(--primary-color), var(--accent-color));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* Dark theme gradient */
body.dark-theme .gradient-logo {
  background: linear-gradient(120deg, var(--dark-primary-color), var(--dark-accent-color));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links li {
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

/* Default link styles */
.nav-links a {
  text-decoration: none;
  color: var(--text-color);
  position: relative;
  font-weight: 500;
}

/* Dark theme link styles */
body.dark-theme .nav-links a {
  color: var(--dark-text-color);
}

/* Link hover effect */
.nav-links a:hover {
  color: var(--primary-color);
  text-shadow: 0 0 5px var(--primary-color);
}

/* Dark theme hover */
body.dark-theme .nav-links a:hover {
  color: var(--dark-primary-color);
  text-shadow: 0 0 5px var(--dark-primary-color);
}

/* Active link effect (underline) */
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

body.dark-theme .nav-links a:hover::after {
  width: 100%;
}
</style>
