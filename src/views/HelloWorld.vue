<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

defineProps({
  msg: String,
});

const count = ref(0);
const activeIndex2 = ref("1");
const menus = ref(['pinia','sheep','text'])
const router = useRouter();
const clickRoute = (val) => {
  router.push({name:val});
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header style="padding: 0 0 0 200px;">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-menu-item :index="index" @click="clickRoute(item)" v-for="(item , index) in menus" :key="index">{{item}}</el-menu-item>
        </el-menu></el-header
      >
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu></el-aside
        >
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
.common-layout {
  height: 100%;
  width: 100%;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
