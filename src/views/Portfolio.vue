<script setup>
import Card from "../components/Card.vue";
import steamAccountsImage from "../assets/SteamAccountsConsole.png";
</script>

<template>
  <div class="portfolio">
    <div class="avatar">
      <img src="https://i.pinimg.com/originals/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg" alt="Picture">
    </div>
    <h1>My Portfolio</h1>
    <p>Take a look at my recent projects.</p>
    <div class="cards-container">
      <Card title="SteamAccounts" text="Find and display all Steam Accounts found on PC" buttonText="View Project"
            link="/" :image="steamAccountsImage"/>
      <Card title="Project 2" text="This is a project description." buttonText="View Project" link="/"/>
      <Card title="Project 3" text="This is a project description." buttonText="View Project" link="/"/>
    </div>
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
  margin-bottom: 10px;
  border: 4px solid transparent;
  background: linear-gradient(var(--primary), var(--secondary));
  background-origin: border-box;
}

.cards-container {
  column-gap: var(--spacing);
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