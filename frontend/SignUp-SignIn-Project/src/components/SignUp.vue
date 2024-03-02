<template>
  <main>
    <div class="container">
      <div>
        <img src="../assets/s.jpg" />
      </div>
      <div class="con-item">
        <div class="first-portion">
          <input v-model="data.fname" type="text" placeholder="First Name" />
          <input v-model="data.lname" type="text" placeholder="Last Name" />
          <input v-model="data.age" type="text" placeholder="Age" />
        </div>
        <div class="second-portion">
          <input v-model="data.email" type="text" placeholder="Email " />
          <input v-model="data.password" type="text" placeholder="Password" />
          <input
            :class = 'cp'
            v-model="data.cpassword"
            type="text"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div class="btns">
        <button @click="dat">Sign Up</button>
        <button @click="redirect">Log In</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import router from "@/router";
import { reactive, computed } from "vue";
import axios from "axios";
//  Routing
const redirect = () => {
  router.push("/signin");
};



// Dev

const data = reactive({
  fname: "",
  lname: "",
  age: "",
  email: "",
  password: "",
  cpassword: "",
});
// Styling
const cp = computed(() => {
  return data.password === data.cpassword ? 'true' : 'false';
});

// Post
const dat = async () => {
  if (data.password == data.cpassword) {
    try {
      const response = await axios.post("http://localhost:3000/api1/new", data);
      console.log(response.data.message); // Log the response message
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    console.log('Password is not the same as Confirm password');
  }
};
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
  justify-content: space-evenly;
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
.true {
  border: 2px solid green;
}
.false {
  border: 2px solid red;
}
</style>
