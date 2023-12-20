<script>


export default {
  name : 'TodoListVuex',
  data() {
    return {
      newTodo: ''
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.$store.commit('addTodo', { id: Date.now(), title: this.newTodo });
        this.newTodo = '';
      }
    }
  }
}
</script>

<template>
  <div>
    <h2>Todo List</h2>
    <input v-model="newTodo" placeholder="Add a new todo" />
    <button @click="addTodo">Add</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<style>

</style>
