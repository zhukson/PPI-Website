<script setup>
import { useRouter } from "vue-router";
import Dropdown from "primevue/dropdown";
import { lang } from "../helpers/language";

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
      <Dropdown :options="['EN', 'CN']" v-model="lang">
        <template #option="{ option }">
          <div v-if="option === 'EN'">English</div>
          <div v-else-if="option === 'CN'">中文</div>
        </template>
        <template #value="{ value }">
          <div v-if="value === 'EN'">English</div>
          <div v-else-if="value === 'CN'">中文</div>
        </template>
      </Dropdown>
      <div class="item" @click="router.push({ path: '/about' })">
        {{ lang === "CN" ? "关于" : "About" }}
      </div>
      <div class="item">{{ lang === "CN" ? "解决方案" : "Solutions" }}</div>
      <div class="item">
        {{ lang === "CN" ? "质量" : "Quality Assurance" }}
      </div>
      <div class="item">{{ lang === "CN" ? "产品" : "Products" }}</div>
      <div class="item">{{ lang === "CN" ? "联系我们" : "Contacts" }}</div>
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
    margin-right: 2rem;
    align-items: center;
    .item {
      font-size: 1.5rem;
      font-weight: light;
    }
  }
}

.item:hover {
  cursor: pointer;
  color: rgb(255, 230, 0);
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
