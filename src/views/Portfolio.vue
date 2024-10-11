<script setup>
import Card from "../components/Card.vue";
</script>

<template>
  <div class="portfolio">
    <div class="avatar">
      <img src="https://i.pinimg.com/originals/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg" alt="Picture">
    </div>
    <h1>My Portfolio</h1>
    <p>Take a look at my recent projects.</p>

  </div>
</template>

<style scoped>
.portfolio {
  text-align: center;
  padding: 20px;
}

.avatar img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
}
</style>