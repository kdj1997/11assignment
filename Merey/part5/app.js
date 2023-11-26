const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: ''
    };
  },
  methods: {
    toggleCompletion(task) {
      task.completed = !task.completed;
    },
    addTask() {
      if (this.newTask) {
        this.tasks.push({ title: this.newTask, completed: false });
        this.newTask = '';
      }
    }
  }
});

app.mount('#app');