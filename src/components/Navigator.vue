<script setup>
import { useRouter } from "vue-router";
import Dropdown from "primevue/dropdown";
import { ref } from "vue";
import { lang } from "../helpers/language";

const router = useRouter();
const goHome = () => {
  router.push({ path: "/" });
};
const showMenu = ref(false);

const toggleMenu = (status) => {
  showMenu.value = status;
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
      <div class="item-dropdown" @mouseover="toggleMenu(true)">
        {{ lang === "CN" ? "解决方案" : "Solutions" }}
        <div class="mega-menu" v-if="showMenu" @mouseleave="toggleMenu(false)">
          <div class="photo-row">
            <div class="card">
              <img src="../assets/navigator/electronic.png" class="image" />
              <div>Consuming Electronics</div>
            </div>
            <div class="card">
              <img src="../assets/navigator/industry.png" class="image" />
              <div>Industry</div>
            </div>
            <div class="card">
              <img src="../assets/navigator/telecom.png" class="image" />
              <div>Telecommunication</div>
            </div>
            <div class="card">
              <img src="../assets/navigator/automotive.png" class="image" />
              <div>Automotive Component</div>
            </div>
            <div class="card">
              <img src="../assets/navigator/industry.png" class="image" />
              <div>Medical</div>
            </div>
          </div>
        </div>
      </div>
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
      font-size: 1rem;
      font-weight: light;
    }

    .item-dropdown {
      font-size: 1rem;
      font-weight: light;
    }
  }
}

.item:hover {
  cursor: pointer;
  color: rgb(255, 230, 0);
}

.item-dropdown:hover {
  color: rgb(255, 230, 0);
}

.card:hover {
  cursor: pointer;
}

.mega-menu {
  position: absolute;
  width: 100%;
  height: 35%;
  left: 0;
  right: 0;
  top: 5rem;
  background-color: white; /* Change as per your design */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Optional */
  z-index: 100;
}

.photo-row {
  padding: 3rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: space-evenly;
  align-items: center;
  color: black;

  .card {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  .image {
    height: 12rem;
    width: 18rem;
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
