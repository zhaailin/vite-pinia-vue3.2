<template>
  <div class="main">
    <div class="game">
      <div
        class="sheep"
        :class="'sheep-' + (index % 9)"
        v-for="(item, index) in animals"
        :style="{ visibility: item === '' ? 'hidden' : 'visible' }"
        :key="index"
        @click="change(item, index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="bottom">
      <div class="sheep" v-for="(item, index) in animals2" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

const sheep = ref(["🐏", "🐏", "🐏", "🐏", "🐏", "🐏"]);
const dog = ref(["🐕", "🐕", "🐕", "🐕", "🐕", "🐕"]);
const pig = ref(["🐖", "🐖", "🐖", "🐖", "🐖", "🐖"]);
const animals2 = ref([]);
const animals = computed(() => {
  let arr = [];
  arr = arr.concat(dog.value);
  arr = arr.concat(sheep.value);
  arr = arr.concat(pig.value);
  for (let i = 0, len = arr.length; i < len; i++) {
    let index = parseInt(Math.random() * (len - 1));
    let tempValue = arr[i];
    arr[i] = arr[index];
    arr[index] = tempValue;
  }
  return arr;
});
const change = (item, index) => {
  animals2.value.push(item);
  animals.value.splice(index, 1, "");
  checkThree();
  if (animals2.value.length === 6) {
    alert("game over");
  }
};
const checkThree = () => {
  let element = "";
  let count = 0;
  for (let i = 0; i < animals2.value.length; i++) {
    count = element === animals2.value[i] ? count + 1 : 0;
    element = animals2.value[i];
    console.log(8989,count,element)
    if (count === 2 && element === animals2.value[i]) {
      console.log(22222, count);
      animals2.value.splice(i - 2, 3);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.game {
  width: 300px;
  height: 200px;
  border: 1px solid #000;
  display: flex;
  flex-wrap: wrap;
}
.bottom {
  width: 300px;
  border: 1px solid #000;
  border-top: unset;
  height: 80px;
  display: flex;
}
.sheep {
  width: 25px;
  height: 30px;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 8px solid green;
  margin: 2px;
  cursor: pointer;
  position: relative;
  background-color: #fff;
}
.sheep-0 {
  top: 30px;
  left: 50px;
}
.sheep-1 {
  top: 10px;
  left: 31px;
}
.sheep-2 {
  top: 18px;
}
.sheep-3 {
  top: 26px;
  right: 31px;
}
.sheep-4 {
  top: 10px;
  left: 31px;
}
.sheep-5 {
  top: 18px;
}
.sheep-6 {
  top: 26px;
  right: 31px;
}
.sheep-7 {
  top: 34px;
  right: 62px;
}
.sheep-8 {
  top: 42px;
  right: 93px;
}
</style>
