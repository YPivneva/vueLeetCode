<template>
    <div class="user-profile">
      <h1>Профиль пользователя: {{ user.username }}</h1>
      <p><strong>Решенные задачи:</strong> {{ user.solvedTasks.length }}</p>
      <h2>Статистика:</h2>
      <ul>
        <li>Легкие: {{ user.stats.easy }}</li>
        <li>Средние: {{ user.stats.medium }}</li>
        <li>Сложные: {{ user.stats.hard }}</li>
      </ul>
      <h2>Решенные задачи:</h2>
      <ul>
        <li v-for="task in user.solvedTasks" :key="task.id">
          <router-link :to="'/task/' + task.id">{{ task.title }}</router-link>
        </li>
      </ul>
      <router-link to="/">Назад к списку задач</router-link>
    </div>
  </template>
  
  <script>
    import { useUserStore } from '../stores/useUserStore';

    export default {
      setup() {
        const userStore = useUserStore();
        const user = userStore.currentUser ; // Получите текущего пользователя из хранилища

        return { user };
      },
    };
  </script>
  
  <style scoped>
  .user-profile {
    padding: 20px;
  }
  </style>