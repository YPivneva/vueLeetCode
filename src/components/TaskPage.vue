<template>
  <div class="task-page">
    <h1>{{ tasks[2].title }}</h1>
    <p><strong>Описание:</strong> {{ tasks[2].description }}</p>
    <div v-if="tasks[2].comments > 0">
      <h5>Комментарии:</h5>
      <div v-for="comment in tasks[2].comments" :key="comment.input">
        <p>
          <strong>{{ key }}:</strong> {{ comment.input }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '../stores/useTaskStore'

export default {
  setup() {
    const taskStore = useTaskStore()
    const task = taskStore.currentTask // Получить текущую запись из хранилища

    return { task }
  },
}
</script>

<style scoped>
.task-page {
  padding: 20px;
}
</style>
