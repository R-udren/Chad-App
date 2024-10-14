<script setup>
import Button from './Button.vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  title: String,
  text: String,
  buttonText: String,
  link: String,
  image: [HTMLImageElement, String]
});

const router = useRouter();

function handleClick() {
  if (!props.link) return;

  if (props.link.startsWith('http')) {
    window.open(props.link, '_blank', 'noopener noreferrer');
  } else {
    router.push(props.link);
  }
}
</script>

<template>
  <div class="card">
    <img v-if="image" :src="image" alt="Card Image"/>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <Button @click="handleClick">{{ buttonText }}</Button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid var(--primary);
  border-radius: var(--border-radius);
  padding: var(--spacing);
  width: clamp(200px, 50%, 400px);
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card:hover {
  box-shadow: 0 0 12px var(--primary);
  transform: translateY(-2px);
}

.card img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-sm);
}

.card h3 {
  margin: var(--spacing) 0 var(--spacing-sm);
}

.card p {
  flex-grow: 1;
}

.card button {
  margin-top: var(--spacing);
  width: 100%;
  max-width: 200px;
}

@media (max-width: 768px) {
  .card img {
    height: auto;
    aspect-ratio: 16 / 9;
  }
}

.card button:hover {
  box-shadow: 0 0 12px var(--primary);
}
</style>
