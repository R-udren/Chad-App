<script>
export default {
  name: "ThemeSwitcher",
  data() {
    return {
      isDarkTheme: false,
    };
  },
  mounted() {
    // Check current theme in localStorage
    this.isDarkTheme = localStorage.getItem("theme") === "dark";
    if (this.isDarkTheme) {
      document.body.classList.add("dark-theme");
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      document.body.classList.toggle("dark-theme", this.isDarkTheme);
      // Save current theme in localStorage
      localStorage.setItem("theme", this.isDarkTheme ? "dark" : "light");
    },
  },
};
</script>

<template>
  <button @click="toggleTheme" class="theme-switcher">
    <span v-if="isDarkTheme">🌞 Light</span>
    <span v-else>🌜 Dark</span>
  </button>
</template>

<style scoped>
.theme-switcher {
  background: var(--background-color);
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: var(--p);
  color: var(--primary-color);
  transition: background 0.3s, color 0.3s, transform 0.2s;
}

/* Light theme styles */
.theme-switcher:hover {
  background: linear-gradient(120deg, var(--primary-color), var(--accent-color));
  color: var(--background-color);
  transform: translateY(-2px);
}

.theme-switcher:active {
  background: var(--accent-color);
  color: var(--background-color);
  transform: scale(0.95);
}

/* Dark theme styles */
body.dark-theme .theme-switcher {
  background: var(--dark-background-color);
  border-color: var(--dark-primary-color);
  color: var(--dark-primary-color);
}

body.dark-theme .theme-switcher:hover {
  background: linear-gradient(120deg, var(--dark-primary-color), var(--dark-accent-color));
  color: var(--dark-background-color);
  transform: translateY(-2px);
}

body.dark-theme .theme-switcher:active {
  background: var(--dark-accent-color);
  color: var(--dark-background-color);
  transform: scale(0.95);
}
</style>
