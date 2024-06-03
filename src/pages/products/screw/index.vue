<script setup>
import Button from "primevue/button";
import { useRouter } from "vue-router";
import { lang } from "../../../helpers/language";

const router = useRouter();
</script>

<template>
  <div class="total">
    <div class="seg"></div>
    <div class="description" v-if="lang === 'EN'">
      <div class="title">
        <u class="deco">Screw</u> /Tapping screw/ Bolt (Class 8.8~12.9)
      </div>
      <div class="detail">
        <img src="../../../assets/products/screw1_EN.png" class="img" />
        <img src="../../../assets/products/screw2_EN.png" class="img" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.total {
  display: flex;
  flex-direction: column;
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
</style>
