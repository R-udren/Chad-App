<script setup>
import Main from '../components/Main.vue';
import Aside from '../components/Aside.vue';
import Card from '../components/Card.vue';
</script>

<template>
  <div class="home">
    <Main>
      <h1>Welcome to Chad Application!</h1>
      <p>
        We are excited to have you here. Our goal is to achieve the best results and highest marks.
      </p>
      <div class="cards-container">
        <Card title="Our Services" text="Explore our wide range of services." buttonText="Learn More" link="/services"/>
        <Card title="Projects" text="Take a look at our recent projects." buttonText="See Projects" link="/projects"/>
        <Card title="Contact Us" text="Get in touch with us for more information." buttonText="Contact Now" link="/contact"/>
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