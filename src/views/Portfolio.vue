<script setup>
import Card from "../components/Card.vue";
import steamAccountsImage from "../assets/SteamAccountsConsole.png";
import toDoListImage from "../assets/ToDoList.png";
import aiAssistantImage from "../assets/AIChat.png";
import Main from "../components/Main.vue";
</script>

<template>
  <Main>
    <div class="portfolio">
      <div class="avatar">
        <img src="https://i.pinimg.com/originals/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg" alt="Picture">
      </div>
      <h1>My Portfolio</h1>
      <p>Take a look at my recent projects.</p>
      <div class="cards-container">
        <Card title="SteamAccountsFinder" text="Find and display all Steam Accounts found on PC"
              buttonText="(Private Project)" link="/" :image="steamAccountsImage"/>
        <Card title="ToDoList" text="Console task management app. Basic CRUD with registration and database"
              buttonText="View Project" link="https://github.com/R-udren/ToDoList" :image="toDoListImage"/>
        <Card title="AI Assistant" :image="aiAssistantImage"
              text="This project is an AI Assistant built using Python.
            It uses OpenAI's models for conversation and the Whisper API for speech recognition."
              buttonText="View Project" link="https://github.com/R-udren/VoiceChatOver9000"/>
      </div>
    </div>
  </Main>
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