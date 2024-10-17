<script setup>
import Card from "../components/Card.vue";
import Modal from "../components/Modal.vue";
import steamAccountsImage from "../assets/SteamAccountsConsole.png";
import toDoListImage from "../assets/ToDoList.png";
import aiAssistantImage from "../assets/AIChat.png";
import Main from "../components/Main.vue";
import {ref} from 'vue';

const isModalOpen = ref(false);
const selectedProject = ref({});

const projects = [
  {
    title: "SteamAccountsFinder",
    text: "Find and display all Steam Accounts found on PC.",
    techStack: ["C#", "Python"],
    image: steamAccountsImage,
    modal: true
  },
  {
    title: "ToDoList",
    text: "Console task management app with basic CRUD operations, registration, and database.",
    techStack: ["JavaScript", "Node.js", "MongoDB"],
    image: toDoListImage,
    link: "/todo-list"
  },
  {
    title: "AI Assistant",
    text: "This project is an AI assistant built using Python. It uses OpenAI's models for conversation and the Whisper API for speech recognition.",
    techStack: ["Python", "OpenAI API", "Whisper API"],
    image: aiAssistantImage,
    link: "/ai-assistant"
  }
];

function openProjectModal(project) {
  selectedProject.value = project;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<template>
  <Main>
    <div class="portfolio">
      <div class="avatar">
        <img alt="Picture" src="https://i.pinimg.com/originals/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg">
      </div>
      <h1>My Portfolio</h1>
      <p>Here are some of my recent projects:</p>
      <div class="cards-container">
        <Card v-for="project in projects" :key="project.title"
              :buttonText="project.modal ? 'View Details' : 'View Project'" :image="project.image"
              :link="project.link"
              :modal="project.modal" :text="project.text"
              :title="project.title"
              @openModal="openProjectModal(project)"/>
      </div>

      <Modal :isOpen="isModalOpen" @close="closeModal">
        <h2>{{ selectedProject.title }}</h2>
        <p>{{ selectedProject.text }}</p>
        <h3>Tech Stack:</h3>
        <h4 v-for="tech in selectedProject.techStack" :key="tech">{{ tech }}</h4>
      </Modal>
    </div>
  </Main>
</template>

<style scoped>
.portfolio {
  text-align: center;
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

h4 {
  margin: 0;
}
</style>