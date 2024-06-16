<script setup>
import { useRouter } from "vue-router";
import { lang } from "../../../helpers/language";
import Product from "../../../components/Product.vue";
import { washersList } from "../../../helpers/productsConfig";

const router = useRouter();
</script>

<template>
  <div class="total">
    <div class="seg"></div>
    <div class="description">
      <div class="title">
        {{ lang === "CN" ? washersList.titleCN : washersList.titleEN }}
      </div>
      <div class="productBoard">
        <Product
          v-for="imageInfo of washersList.list"
          :imgPath="imageInfo.img"
          :module="washersList.module"
          :titleEN="imageInfo.nameEN"
          :titleCN="imageInfo.nameCN"
          :key="imageInfo.id"
        >
        </Product>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.total {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .seg {
    width: 100%;
    height: 0.2rem;
    background-color: yellow;
  }

  .description {
    width: 90%;
    height: auto;
    margin: 2rem;

    .title {
      text-align: left;
      font-weight: bolder;
      font-size: 3rem;
      margin-bottom: 3rem;
    }

    .detail {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .img {
        height: 60%;
        width: 60%;
      }
    }
  }

  .deco {
    text-decoration-line: underline;
    text-decoration-color: yellow;
    text-decoration-thickness: 1rem;
  }
}

.productBoard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.productBoard > * {
  box-sizing: border-box;
}
</style>
