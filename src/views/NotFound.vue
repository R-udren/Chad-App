<script setup>
import Aside from "../components/Aside.vue";
import Main from "../components/Main.vue";
</script>

<template>
  <Main>
    <div class="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Aside>Not Found!</Aside>
      <router-link to="/">Go back to Home</router-link>
    </div>
  </Main>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}

a {
  color: var(--primary);
  text-decoration: none;
  margin-top: 20px;
  display: inline-block;
  font-weight: bold;
}

</style>