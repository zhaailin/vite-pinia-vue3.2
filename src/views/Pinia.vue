<template>
  <div>
    <div class="container" @click="changeNum">
      <!-- Display the content vertically -->
      <div class="container__content">...</div>
    </div>
    <div>{{store.helloWorld}}</div>
  </div>
</template>

<script setup>
import { mainStore } from "../store"
const store = mainStore()
const changeNum = () =>{
  store.helloWorld = "傻逼"
}
</script>

<style>
.container {
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Border */
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 0px 50% 50% 50%;

  /* Angle at the top */
  transform: rotate(45deg);

  /* Size */
  height: 64px;
  width: 64px;
}

.container__content {
  transform: rotate(-45deg);
}
</style>
