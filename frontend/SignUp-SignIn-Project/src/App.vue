<template>
  <div class="container">
    <div class="f1">
      <input v-model="todo" type="text" placeholder="Enter todo ...">
      <input class="inp2" v-model="name" type="text" placeholder="Enter name ...">
      <button @click="addTodo">Add</button>
    </div>
    <div class="f2">
      <h3 v-for="todoItem in todos" :key="todoItem._id">{{ todoItem.todo }} ---- {{ todoItem.name }}</h3>
    </div>
  </div>
  <RouterView />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { RouterView } from 'vue-router';

const todo = ref('')
const name = ref('')
const todos = ref([])

const addTodo = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api2/new', {
      name: name.value,
      todo: todo.value
    })
    console.log(response.data);
    fetchTodos()
  } catch(e) {
    console.log(e);
  }
}


const fetchTodos = async () => {
  try {
    const resp = await axios.get('http://localhost:3000/api2/')
    todos.value = resp.data
    console.log(resp.data);
  } catch(e) {
  console.log(e);
}
} 
onMounted(() => {
  fetchTodos()
})

</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.container {
  border: 2px solid greenyellow;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #ddd;
}
.f1 {
  border: 2px solid rgb(10, 6, 212);
  height: 20vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.f2 {
  border: 2px solid black;
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
input {
  height: 5vh;
  width: 70vw;
  text-align: center;
  font-size: 3vh;
  border-radius: 10px;
}
button {
  margin-top: 1vw;
  height: 3vh;
  width: 40vw;
  background-color: white;
  border-radius: 10px;
  font-size: 2vh;
  cursor: pointer;
}
.inp2 {
  margin-top: 1vw;
  width: 50vw;
}
button:hover {
  background: #333;
  color: #ddd;
}
</style>
