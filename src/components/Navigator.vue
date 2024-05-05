<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goHome = () => {
  router.push({ path: "/" });
};
</script>

<template>
  <div class="box">
    <div class="logo" @click="goHome">
      <img src="../assets/logo.png" width="350" height="60" />
    </div>
    <div class="options">
      <div class="item">About</div>
      <div class="item">Solutions</div>
      <div class="item">Quality Assurance</div>
      <div class="item">Products</div>
      <div class="item">Contact</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  height: 5rem;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .logo:hover {
    cursor: pointer;
  }
  .options {
    display: flex;
    justify-content: space-evenly;
    gap: 2.5rem;
    margin-right: 5rem;
    align-items: center;
    .item {
      font-size: 1.5rem;
      font-weight: light;
    }
  }
}

@media (max-width: 768px) {
  .box {
    flex-direction: column; // 在小屏幕上改为垂直布局
    height: auto; // 高度自适应

    .logo {
      margin-bottom: 1rem; // 在logo和选项之间加入间距
    }

    .options {
      flex-direction: column; // 小屏幕上选项垂直排列
      margin-right: 0;
      gap: 1rem;
    }
  }
}
</style>
