<script setup>
import { useRoute, useRouter } from "vue-router";
import Navigator from "../src/components/Navigator.vue";
import ContactUs from "../src/components/ContactUs.vue";

const router = useRouter();
const route = useRoute();
</script>

<template>
  <div class="main">
    <Navigator></Navigator>
    <RouterView></RouterView>
    <ContactUs></ContactUs>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}
</style>
