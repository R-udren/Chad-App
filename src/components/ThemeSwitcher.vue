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
  background: var(--background);
  border: 1px solid var(--primary);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: var(--p);
  color: var(--primary);
  transition: background 0.3s, color 0.3s, transform 0.2s;
}

/* Light theme styles */
.theme-switcher:hover {
  background: linear-gradient(120deg, var(--primary), var(--accent-color));
  color: var(--background);
  transform: translateY(-2px);
}

.theme-switcher:active {
  background: var(--accent-color);
  color: var(--background);
  transform: scale(0.95);
}

/* Dark theme styles */
body.dark-theme .theme-switcher {
  background: var(--dark-background);
  border-color: var(--dark-primary);
  color: var(--dark-primary);
}

body.dark-theme .theme-switcher:hover {
  background: linear-gradient(120deg, var(--dark-primary), var(--dark-accent));
  color: var(--dark-background);
  transform: translateY(-2px);
}

body.dark-theme .theme-switcher:active {
  background: var(--dark-accent);
  color: var(--dark-background);
  transform: scale(0.95);
}
</style>
