<template>
    <main>
      <div class="container">
        <div>
          <img src="../assets/s.jpg">
        </div>
        <div class="con-item">
          <div class="second-portion">
              <input v-model="email" type="text" placeholder="Email ">
              <input v-model="password" type="text" placeholder="Password">
          </div>
        </div>
        <div class="btns">
          <button @click="login">Log In</button>
          <button @click="redirect">Sign Up</button>
        </div>
      </div>
    </main>
  </template>
<script setup>
import { ref } from 'vue';
import router from '@/router';
import axios from 'axios';

const redirect = () => {
  router.push('/signup')
}

// Declare Variables
const email = ref('')
const password = ref('')
// Login

const login = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/login', {
       email: email.value,
       password: password.value
      })
    console.log(response.status);
    if (response.status == 200 ){
      router.push('/')
    }
  } catch(e) {
    console.log(e);
  }
}

</script>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.container {
  border: 2px solid #333;
  border-radius: 10px;
  height: 75vh;
  width: 70vw;
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  flex-direction: column;
}
img {
    height: 15vh;
}
.con-item {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
    width: 50vw;
}
.first-portion {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50vh;
    width: 25vw;
}
.second-portion {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50vh;
    width: 25vw;
}
input {
    height: 5vh;
    width: 20vw;
    margin: 2vw; 
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.5vw;
}
input::placeholder {
    text-align: center;
    font-size: 1vw;
}
button {
    height: 5vh;
    width: 7vw;
    font-size: 1vw;
    background-color: none;
    cursor: pointer;
    margin: 1vw;
}
</style>