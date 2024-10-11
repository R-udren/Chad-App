<script setup>
import { ref, onMounted } from 'vue';

const isDarkTheme = ref(false);

const applyTheme = () => {
  if (isDarkTheme.value) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  applyTheme();
  localStorage.setItem("theme", isDarkTheme.value ? "dark" : "light");
};

onMounted(() => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    isDarkTheme.value = storedTheme === "dark";
  } else {
    isDarkTheme.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  applyTheme();
});
</script>

<template>
  <button class="theme-switcher" @click="toggleTheme">
    <span v-if="isDarkTheme">🌞 Light</span>
    <span v-else>🌜 Dark</span>
  </button>
</template>

<style scoped>
.theme-switcher {
  background: var(--background);
  border: 1px solid var(--primary);
  border-radius: var(--border-radius);
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
