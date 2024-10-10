<script setup>
// TODO: actually do something with this
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
  flex: 1;
}
</style>
