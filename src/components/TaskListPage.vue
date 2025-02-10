<template>
  <TaskListPage>
    <h2>Главная страница</h2>
    <div>
      <h3>Список задач</h3>
      <div class="content-list">
        <ul class="list-task">
          <li v-for="task in tasks" :key="task.id_list">{{ task.title }}</li>

          <li v-for="onetask in filteredTasks" :key="onetask.id">
            <!-- <a href="#" target="_blank" rel="noopener noreferrer">
                <h3>{{ onetask.title }}</h3>
              </a> -->
            <router-link :to="'/task/' + onetask.id">{{ onetask.title }}</router-link>
            <p>Уровень сложности: {{ onetask.difficulty }}</p>
            <p>Категория: {{ onetask.category }}</p>
            <!-- <p>Имя пользователя: {{ users[one.userid].username }}</p> -->
            <!-- <p v-for="onetask.userid in filteredList">{{ users.username }}</p> -->
          </li>
        </ul>
      </div>
    </div>
  </TaskListPage>
</template>

<script>
import { useTaskStore } from '../stores/useTaskStore'

export default {
  setup() {
    const taskStore = useTaskStore()
    const loadTasks = () => {
      taskStore.setTasks() // Загружаем задачи из api.js
    }

    return {
      tasks: taskStore.tasks,
      loadTasks,
    }
  },
  props: {
    filters: Object,
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter((task) => {
        const matchesDifficulty = this.filters.difficulty
          ? task.difficulty === this.filters.difficulty
          : true
        const matchesCategory = this.filters.category
          ? task.category === this.filters.category
          : true
        return matchesDifficulty && matchesCategory
      })
    },
  },
}
</script>

<style scoped>
.content-list {
  text-align: left;
}
.list-task {
  list-style: none;
  padding-inline-start: 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
.list-task li {
  padding: 10px 15px;
  border: 1px dotted #bdbdbd;
  border-radius: 10px;
}
.list-task a:hover {
  color: #f25353;
}
.list-task a {
  color: #3800ff;
}
@media (max-width: 450px) {
  h1 {
    font-size: 2em;
    line-height: 1.5;
  }
  .list-task {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
