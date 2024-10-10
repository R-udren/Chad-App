<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['click']);
</script>

<template>
  <button class="styled-button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style>
.styled-button {
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

.styled-button:hover {
  background: linear-gradient(120deg, var(--primary), var(--accent));
  color: var(--background);
  transform: translateY(-2px);
}

.styled-button:active {
  background: var(--accent);
  color: var(--background);
  transform: scale(0.95);
}
</style>