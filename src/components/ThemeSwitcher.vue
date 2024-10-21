<script setup>
import {onMounted, ref} from 'vue';

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
  <button class="styled-button" @click="toggleTheme">
    <span v-if="isDarkTheme">🌞 Light</span>
    <span v-else>🌜 Dark</span>
  </button>
</template>

<style>
</style>
