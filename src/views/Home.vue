<script setup>
import Main from '../components/Main.vue';
import Aside from '../components/Aside.vue';
import Card from '../components/Card.vue';
</script>

<template>
  <div class="home">
    <Main>
      <h1>Welcome to Our Website!</h1>
      <p>
        We are excited to have you here. Our mission is to provide exceptional services that meet your needs.
      </p>
      <div class="cards-container">
        <Card title="Our Services" text="Explore our wide range of services." buttonText="Learn More"/>
        <Card title="Projects" text="Take a look at our recent projects." buttonText="See Projects"/>
        <Card title="Contact Us" text="Get in touch with us for more information." buttonText="Contact Now"/>
      </div>
    </Main>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: var(--spacing);
}

.cards-container {
  display: block;
  columns: 3;
  gap: var(--spacing);
  margin-top: var(--margin);
}

@media (max-width: 768px) {
  .cards-container {
    columns: 1;
  }
}
</style>
