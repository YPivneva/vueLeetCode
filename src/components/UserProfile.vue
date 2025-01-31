<template>
    <div class="user-profile">
      <h1>Профиль пользователя: {{ user[2].username }}</h1>
      <p><strong>Решенные задачи:</strong> {{ user[2].solvedTasks.length }}</p>
      <h2>Статистика:</h2>
      <ul>
        <li>Легкие: {{ user[2].stats.easy }}</li>
        <li>Средние: {{ user[2].stats.medium }}</li>
        <li>Сложные: {{ user[2].stats.hard }}</li>
      </ul>
      <h2>Решенные задачи:</h2>
      <ul>
        <li v-for="task in user[2].solvedTasks" :key="task.id">
          <p>{{ task.title }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          username: '',
          solvedTasks: [],
          stats: {
            easy: 0,
            medium: 0,
            hard: 0
          }
        }
      };
    },
    created() {  
      const users = [
        {
          userid: 1,
          username: 'fill_pos',
          role: 'admin',
          solvedTasks: [
            { id_list: '1', title: 'Изучить TypeScript' }
          ],
          difficulty: {
            easy: 5,
            medium: 5,
            hard: 5
          }
        },
        {
          userid: 2,
          username: 'Alias_Lus',
          role: 'user',
          solvedTasks: [
            {  }
          ],
          difficulty: {
            easy: 1,
            medium: 1,
            hard: 0
          }
        },
        {
          userid: 3,
          username: 'Alex_Smal',
          role: 'user',
          solvedTasks: [
            { id_list: '2', title: 'Написать приложение' },
            { id_list: '4', title: 'Счетчик' }
          ],
          difficulty: {
            easy: 1,
            medium: 1,
            hard: 0
          }
        },
        {
          userid: 4,
          username: 'juan_Milleri',
          role: 'user',
          solvedTasks: [
            { }
          ],
          difficulty: {
            easy: 2,
            medium: 1,
            hard: 1
          }
        },
        {
          userid: 5,
          username: 'Dmitri_Polor',
          role: 'admin',
          solvedTasks: [
            { }
          ],
          difficulty: {
            easy: 5,
            medium: 5,
            hard: 5
          }
        },
      ];
    }
  };
  </script>
  
  <style scoped>
  .user-profile {
    padding: 20px;
  }
  </style>