<script setup>
import Button from './Button.vue';
import {useRouter} from 'vue-router';

const props = defineProps({
  title: String,
  text: String,
  buttonText: String,
  link: String,
  image: [HTMLImageElement, String],
  modal: Boolean
});

const router = useRouter();
const emit = defineEmits(['openModal']);

function handleClick() {
  if (props.modal) {
    emit('openModal');
  } else if (props.link) {
    if (props.link.startsWith('http')) {
      window.open(props.link, '_blank', 'noopener noreferrer');
    } else {
      router.push(props.link);
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img v-if="image" :src="image" alt="Card Image"/>
    </div>
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

.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-sm);
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.card button:hover {
  box-shadow: 0 0 12px var(--primary);
}
</style>