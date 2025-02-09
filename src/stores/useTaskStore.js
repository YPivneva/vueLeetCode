import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    error: null,
  }),
  actions: {
    setTasks(tasks) {
      this.tasks = tasks
    },
  },
  getters: {
    taskCount: (state) => state.tasks.length, // Геттер для получения количества задач
  },
})
