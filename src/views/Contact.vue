<script setup>
import Button from "../components/Button.vue";
</script>

<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <p>Get in touch with us for more information.</p>

    <form>
      <label for="name">
        Name:
      </label>
      <input id="name" name="name" required type="text">

      <label for="email">
        Email:
      </label>
      <input id="email" name="email" required type="email">

      <label for="message">
        Message:
      </label>
      <textarea id="message" name="message" required></textarea>

      <Button type="submit">Send</Button>
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
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

form input:user-invalid,
form textarea:user-invalid {
  border-color: red;
}

form input:focus-visible,
form textarea:focus-visible {
  border-color: var(--primary);
  box-shadow: 0 0 8px var(--primary);
  outline: var(--accent);
}
</style>