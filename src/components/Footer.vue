<script setup>

</script>

<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p>&copy; 2024 ChadApp. All rights reserved.</p>
      <div class="links">
        <a href="https://github.com/R-udren" target="_blank" rel="noopener noreferrer">
          <img src="../assets/github.svg" alt="Github"/>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-content {
  text-align: center;
  padding-top: var(--spacing);
  background-color: var(--second-background);
  color: var(--subtext);
  position: absolute;
  width: 100%;
  bottom: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.footer-content p {
  margin: 0;
}

.footer-content .links img {
  width: 24px;
  height: 24px;
  filter: invert(0.2);
}

.footer-content .links a {
  margin: 0 0.5rem;
}
</style>