<script setup>
import '@fortawesome/fontawesome-free/css/all.css';
import Button from "../components/Button.vue";
</script>

<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <p>Get in touch with us for more information.</p>

    <form>
      <label for="name">
        <i class="fas fa-user"></i> Name:
      </label>
      <input type="text" id="name" name="name" required>

      <label for="email">
        <i class="fas fa-envelope"></i> Email:
      </label>
      <input type="email" id="email" name="email" required>

      <label for="message">
        <i class="fas fa-comment"></i> Message:
      </label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit" class="styled-button">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.contact {
  text-align: center;
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  background: var(--background);
  padding: 20px;
  border-radius: var(--border-radius);
  transition: background-color 0.3s ease;
}

form label {
  font-weight: bold;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 5px;
}

form input,
form textarea {
  padding: 10px;
  border: 1px solid var(--primary);
  border-radius: var(--border-radius);
  width: clamp(200px, 80%, 400px);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>