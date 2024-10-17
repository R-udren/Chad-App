<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Header/>
  <main class="main-content">
    <slot></slot>
  </main>
  <Footer/>
</template>


<style scoped>
.main-content {
  padding: 20px 20px 60px;
}
</style>
