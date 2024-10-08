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
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      this.isDarkTheme = storedTheme === "dark";
    } else {
      // Check system preference
      this.isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    this.applyTheme();
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      this.applyTheme();
      // Save current theme in localStorage
      localStorage.setItem("theme", this.isDarkTheme ? "dark" : "light");
    },
    applyTheme() {
      if (this.isDarkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
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
  outline: none;
}

.theme-switcher:hover {
  background: linear-gradient(120deg, var(--primary), var(--accent));
  color: var(--background);
  transform: translateY(-2px);
}

.theme-switcher:active {
  background: var(--accent);
  color: var(--background);
  transform: scale(0.95);
}
</style>
