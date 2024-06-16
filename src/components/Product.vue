<script setup>
import { defineProps, ref, computed } from "vue";
import Image from "primevue/image";
import { lang } from "../helpers/language";
import Card from "primevue/card";

const props = defineProps({
  imgPath: {
    type: String,
  },
  module: {
    type: String,
  },
  titleEN: {
    type: String,
  },
  titleCN: {
    type: String,
  },
});
const getImageUrl = (imagePath) => {
  return new URL(
    `../assets/products/${props.module}/${props.imgPath}`,
    import.meta.url
  ).href;
};
const resolvedBackgroundImage = computed(() =>
  getImageUrl(props.backgroundImage)
);
</script>

<template>
  <div class="container">
    <Card class="card">
      <template #header>
        <div style="padding: 1rem">
          <Image
            :src="resolvedBackgroundImage"
            alt="background"
            class="p-image"
            width="100%"
            height="200rem"
          />
        </div>
      </template>
      <template #title>
        <div class="title">
          {{ lang === "CN" ? titleCN : titleEN }}
        </div>
      </template>
    </Card>
  </div>
</template>

<style>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: larger;
}

.p-card {
  width: 80%;
}
</style>
