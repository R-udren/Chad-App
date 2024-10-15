<script setup>
</script>


<template>
  <aside class="sidebar">
    <slot></slot>
  </aside>
</template>


<style scoped>
.sidebar {
  padding: 15px;
  background-color: var(--background);
  border-left: 2px solid var(--accent);
  max-width: 300px;
  overflow-y: auto;
  position: fixed;
  z-index: 100;
  right: 0;
  top: 4rem;
  transition: background-color 0.3s ease;
  margin: var(--spacing-lg) auto;
}
</style>
