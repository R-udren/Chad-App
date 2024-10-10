<script>
import Button from './Button.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Card',
  components: {
    Button
  },
  props: {
    title: String,
    text: String,
    buttonText: String,
    link: String,
    image: String || null
  },
  setup(props) {
    const router = useRouter();

    function handleClick() {
      if (props.link) {
        router.push(props.link);
      }
    }

    return { handleClick };
  }
};
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
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 0 12px var(--primary);
}

.card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
}
</style>