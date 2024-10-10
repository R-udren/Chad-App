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
.app-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing);
  background-color: var(--second-background);
  color: var(--subtext);
  width: 100%;
  transition: background-color 0.3s ease, color 0.3s ease;
  bottom: 0;
  left: 0;
  position: fixed;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-content p {
  margin-bottom: var(--spacing-sm);
  text-align: center;
}

.footer-content .links img {
  width: 20px;
  height: 20px;
}

.footer-content .links a {
  margin: 0 0.5rem;
}

/* Invert icon colors based on the theme */
[data-theme="light"] .footer-content .links img {
  filter: invert(0.2);
}

[data-theme="dark"] .footer-content .links img {
  filter: invert(1);
}
</style>
