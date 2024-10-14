<script setup>
const props = defineProps({
  title: String,
  isOpen: Boolean
});

const emit = defineEmits(['close']);
</script>

<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-content">
      <button class="close-button" @click="$emit('close')">Close</button>
      <h2>{{ title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: var(--background);
  padding: var(--spacing);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 90%;
}

.close-button {
  background: var(--primary);
  color: var(--background);
  border: none;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius);
  cursor: pointer;
  float: right;
}

.close-button:hover {
  background: var(--accent);
}
</style>