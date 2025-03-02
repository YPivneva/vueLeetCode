<template>
  <div class="task-page">
    <div v-if="currentTask">
      <h1>{{ currentTask.title }}</h1>
      <p><strong>Описание:</strong> {{ currentTask.description }}</p>
      <div v-if="currentTask.comments && currentTask.comments.length > 0">
        <h5>Комментарии:</h5>
        <div v-for="comment in currentTask.comments" :key="comment.id">
          <p>
            <strong>{{ comment.createdat }}:</strong> {{ comment.description }}
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Задача не найдена</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTaskStore } from '../stores/useTaskStore'

const route = useRoute()
const taskStore = useTaskStore()
const taskId = parseInt(route.params.id)

// Инициализируем store при монтировании компонента
taskStore.setTasks()

const currentTask = computed(() => {
  return taskStore.tasks.find((task) => task.id === taskId)
})
</script>

<style scoped>
.task-page {
  padding: 20px;
}
</style>
