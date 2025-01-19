<script setup>
import Card from '../components/Card.vue';
</script>

<template>
  <div class="home">

    <h1>Welcome to Chad Application!</h1>
    <p>
      We are excited to have you here. Our goal is to achieve the best results and highest marks.
    </p>
    <div class="cards-container">
      <Card buttonText="Learn More" link="/about" text="Explore our wide range of services." title="Our Services"/>
      <Card buttonText="See Projects" link="/portfolio" text="Take a look at our recent projects." title="Projects"/>
      <Card buttonText="Contact Now" link="/contact" text="Get in touch with us for more information."
            title="Contact Us"/>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: var(--spacing);
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing);
  margin-top: var(--margin);
}

@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>