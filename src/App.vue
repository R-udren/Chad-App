<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Inter', sans-serif;
}
</style>