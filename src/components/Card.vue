<script>
export default {
  name: 'Card',
  props: {
    title: String,
    text: String,
    buttonText: String,
    image: String || null
  }
};
</script>

<template>
  <div class="card">
    <img v-if="image" :src="image" alt="Card Image" />
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <button>{{ buttonText }}</button>
  </div>
</template>


<style scoped>
.card {
  border: 1px solid var(--primary);
  border-radius: var(--border1);
  padding: var(--padding);
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
}
.card button {
  margin-top: var(--margin);
  padding: var(--padding);
  border: none;
  background: var(--background);
  color: var(--text);
  cursor: pointer;
}

.card button:hover {
  background: var(--primary);
  color: var(--background);
}

.card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
}
</style>
