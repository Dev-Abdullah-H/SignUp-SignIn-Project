<template>
  <div class="container">
    <div class="f1">
      <input v-model="todo" type="text" placeholder="Enter todo ..." />
      <input
        class="inp2"
        v-model="name"
        type="text"
        placeholder="Enter name ..."
      />
      <button @click="addTodo">Add</button>
    </div>
    <div class="f2">
      <h3 v-for="todoItem in todos" :key="todoItem._id">
        {{ todoItem.todo }} | &#128073; <small>Created by : </small>{{ todoItem.name }}
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import "../assets/Todo.css";
import { ref, onMounted } from "vue";
import axios from "axios";

const todo = ref("");
const name = ref("");
const todos = ref([]);

const addTodo = async () => {
  try {
    const response = await axios.post("http://localhost:3000/api2/new", {
      name: name.value,
      todo: todo.value,
    });
    console.log(response.data);
    fetchTodos();
    todo.value = ""
    name.value = ""
  } catch (e) {
    console.log(e);
  }
};

const fetchTodos = async () => {
  try {
    const resp = await axios.get("http://localhost:3000/api2/");
    todos.value = resp.data;
    console.log(resp.data);
  } catch (e) {
    console.log(e);
  }
};
onMounted(() => {
  fetchTodos();
});
</script>
