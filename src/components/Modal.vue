<script setup>
import {ref} from 'vue';

const isModalOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

function toggleModal() {
  isModalOpen.value = !isModalOpen.value;
}

export {isModalOpen, openModal, closeModal, toggleModal};
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <button @click="closeModal">Close</button>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background: var(--background);
  border: 2px solid var(--primary);
  border-radius: var(--border-radius);
  padding: var(--spacing);
  width: clamp(200px, 50%, 400px);
  max-width: 100%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.modal-content button {
  background: var(--primary);
  color: var(--background);
  border: none;
  border-radius: var(--border-radius);
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: var(--p);
  transition: background 0.3s, color 0.3s, transform 0.2s;
  outline: none;
}

.modal-content button:hover {
  background: linear-gradient(120deg, var(--primary), var(--accent));
  color: var(--background);
  transform: translateY(-2px);
}

.modal-content button:active {
  background: var(--accent);
  color: var(--background);
  transform: scale(0.95);
}

.modal-content button {
  margin-top: 16px;
}

.modal-content button:last-child {
  margin-left: 16px;
}

@media (max-width: 768px) {
  .modal-content button {
    width: 100%;
    max-width: 200px;
    padding: var(--spacing);
    margin-top: 16px;
  }

  .modal-content button:last-child {
    margin-left: 0;
  }
}
</style>