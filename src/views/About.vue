<script setup>
import Main from "../components/Main.vue";
</script>

<template>
  <Main>
    <div class="about">
      <h1>About</h1>
      <p>In This Application, I am committed to providing the best services to my customers. </p>
      <p>My mission is to innovate and lead in my industry, ensuring customer satisfaction and continuous
        improvement.</p>
      <p>I value integrity, excellence, and teamwork, and I strive to exceed expectations in everything I do.</p>
      <a href="https://en.wikipedia.org/wiki/Chad_(slang)" rel="noopener noreferrer" target="_blank">What is Chad?</a>
      <img alt="Future" src="https://marketer.ua/wp-content/uploads/2024/01/future-internet.gif">
    </div>
  </Main>
</template>

<style scoped>
.about {
  text-align: center;
  padding: 20px;
  border-radius: 8px;
}

.about h1 {
  font-size: 2.5rem;
  color: transparent;
  background: linear-gradient(90deg, var(--accent), var(--secondary));
  background-clip: text;
  margin-bottom: 20px;
}

.about p {
  color: var(--text);
}

.about img {
  width: 30%;
  border-radius: 8px;
  margin-top: 20px;
}

.about a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  display: block;
  margin-top: 20px;
}

</style>