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
</style>
