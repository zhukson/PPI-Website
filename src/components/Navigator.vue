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
            <div
              class="card"
              @click="router.push({ path: '/solutions/electronics' })"
            >
              <img src="../assets/navigator/electronic.png" class="image" />
              <div class="deco">
                {{ lang === "EN" ? "Consuming Electronics" : "消费电子产品" }}
              </div>
            </div>
            <div
              class="card"
              @click="router.push({ path: '/solutions/electronics' })"
            >
              <img src="../assets/navigator/industry.png" class="image" />
              <div class="deco">
                {{ lang === "EN" ? "Industry" : "工业产品" }}
              </div>
            </div>
            <div
              class="card"
              @click="router.push({ path: '/solutions/telecom' })"
            >
              <img src="../assets/navigator/telecom.png" class="image" />
              <div class="deco">
                {{ lang === "EN" ? "Telecommunication" : "通信" }}
              </div>
            </div>
            <div
              class="card"
              @click="router.push({ path: '/solutions/automotive' })"
            >
              <img src="../assets/navigator/automotive.png" class="image" />
              <div class="deco">
                {{ lang === "EN" ? "Automotive Component" : "汽车零部件" }}
              </div>
            </div>
            <div
              class="card"
              @click="router.push({ path: '/solutions/industry' })"
            >
              <img src="../assets/navigator/industry.png" class="image" />
              <div class="deco">
                {{ lang === "EN" ? "Medical" : "医疗" }}
              </div>
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

.item:hover,
.item-dropdown:hover {
  cursor: pointer;
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
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 100;
  opacity: 0; /* Initially hidden */
  visibility: hidden; /* Make the menu not interactable when hidden */
  transition: opacity 0.6s ease, visibility 0.6s; /* Smooth transition for visibility and opacity */
}

.item-dropdown:hover .mega-menu {
  opacity: 1;
  visibility: visible; /* Make the menu visible and interactable on hover */
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
  }

  .image {
    height: 12rem;
    width: 18rem;
  }
}

.deco {
  position: relative;
  padding: 5px;
  cursor: pointer;
  overflow: hidden;
}

.deco::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3rem;
  height: 10px;
  background-color: yellow;
  transition: width 0.5s ease;
}

.card:hover .deco::after {
  width: 100%;
}

.item-dropdown:hover .mega-menu,
.mega-menu:hover {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s ease, visibility 0s; /* No delay when showing */
}

@media (max-width: 768px) {
  .box {
    flex-direction: column;
    height: auto;
    .logo {
      margin-bottom: 1rem;
    }
    .options {
      flex-direction: column;
      margin-right: 0;
      gap: 1rem;
    }
  }
}
</style>
