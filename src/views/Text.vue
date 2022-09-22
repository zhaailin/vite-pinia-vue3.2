<template>
  <div><canvas id="canvas" ref="can">你的浏览器不支持canvas!</canvas></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const can = ref(null); //获取canvas对象(画布)
onMounted(() => {
  console.log(21221, can.value);
  var canvas = can.value;
  var ctx = canvas.getContext("2d"); //获取对应的画笔对象

  canvas.width = 400;
  canvas.height = 500;

  //绘制白色半圆
  ctx.beginPath();
  ctx.arc(200, 200, 80, 1.5 * Math.PI, Math.PI / 2, false);
  ctx.fillStyle = "white";
  ctx.closePath();
  ctx.fill();

  //绘制黑色半圆
  ctx.beginPath();
  ctx.arc(200, 200, 80, Math.PI / 2, 1.5 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.closePath();
  ctx.fill();

  //绘制黑色小圆
  ctx.beginPath();
  ctx.arc(200, 240, 40, 0, Math.PI * 2, false);
  ctx.fillStyle = "black";
  ctx.closePath();
  ctx.fill();

  //绘制白色小圆
  ctx.beginPath();
  ctx.arc(200, 160, 40, 0, Math.PI * 2, false);
  ctx.fillStyle = "white";
  ctx.closePath();
  ctx.fill();

  //绘制白色小圆心
  ctx.beginPath();
  ctx.arc(200, 160, 5, 0, Math.PI * 2, false);
  ctx.fillStyle = "black";
  ctx.closePath();
  ctx.fill();

  //绘制黑色小圆心
  ctx.beginPath();
  ctx.arc(200, 240, 5, 0, Math.PI * 2, false);
  ctx.fillStyle = "white";
  ctx.closePath();
  ctx.fill();

  //绘制文字
  ctx.save();
  ctx.fillStyle = "black";
  ctx.globalAlpha = "0.4";
  ctx.textAlign = "center";
  ctx.font = "32px Arial";
  ctx.shadowColor = "rgba(0,0,0,0.4)";
  ctx.shadowOffsetX = 15;
  ctx.shadowOffsetY = -10;
  ctx.shadowBlur = 2;
  ctx.fillText("Hello Canavs", 200, 100); //IE不支持

  ctx.restore();
});
</script>

<style>
#canvas {
  display: block;
  margin: 0 auto;
  border: 1px solid #aaa;
  background: #e1e1ff;
}
</style>
