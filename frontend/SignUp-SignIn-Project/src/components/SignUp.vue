<template>
  <main>
    <div class="container">
      <div>
        <img src="../assets/s.jpg">
      </div>
      <div class="con-item">
        <div class="first-portion">
            <input type="text" placeholder="First Name">
            <input type="text" placeholder="Last Name">
            <input type="text" placeholder="Age">
        </div>
        <div class="second-portion">
            <input type="text" placeholder="Email ">
            <input type="text" placeholder="Password">
            <input type="text" placeholder="Confirm Password">
        </div>
      </div>
      <div>
        <button>Sign Up!</button>
      </div>
    </div>
  </main>
</template>

<script setup></script>

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
}
</style>
