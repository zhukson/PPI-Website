<script setup>
import Button from "primevue/button";
import { lang } from "../../../helpers/language";
</script>

<template>
  <div class="total">
    <div class="image-container">
      <img
        src="../../../assets/navigator/automotive.png"
        alt="background"
        class="bg"
      />
      <div class="centered-content">
        <p class="title" v-if="lang === 'EN'">Automotive Component</p>
        <p class="title" v-else-if="lang === 'CN'">汽车零部件</p>
      </div>
    </div>
    <div class="description" v-if="lang === 'EN'">
      <div class="title"><u class="deco">Our</u> Solution</div>
      <div class="detail">
        PPI Engineering Group specializes in high-quality automotive fastening
        solutions, offering a broad range of components such as bolts, studs,
        nuts, and screws tailored for various vehicle applications. With a focus
        on innovation and reliability, our products enhance vehicle performance,
        safety, and durability. We provide essential fastening technologies for
        critical vehicle areas including the chassis, interior systems, and
        lighting, ensuring superior structural integrity and design standards
        for automotive manufacturers. Trust PPI Engineering Group for advanced,
        efficient, and dependable automotive engineering solutions.
      </div>
    </div>
    <div class="description" v-if="lang === 'EN'">
      <div class="title"><u class="deco">Key</u> Products</div>
      <div class="detail">
        PPI Engineering Group specializes in high-quality automotive fastening
        solutions, offering a broad range of components such as bolts, studs,
        nuts, and screws tailored for various vehicle applications. With a focus
        on innovation and reliability, our products enhance vehicle performance,
        safety, and durability. We provide essential fastening technologies for
        critical vehicle areas including the chassis, interior systems, and
        lighting, ensuring superior structural integrity and design standards
        for automotive manufacturers. Trust PPI Engineering Group for advanced,
        efficient, and dependable automotive engineering solutions.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-container {
  position: relative;
  width: 100%;
  height: 25rem;
  animation: slideUp 0.5s ease-out forwards;
  .bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .centered-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    .title {
      text-align: left;
      font-weight: bolder;
      margin: 0.2rem;
      font-size: 5rem;
    }
  }
}

.description {
  width: 90vw;
  height: auto;
  margin: 2rem;

  .title {
    text-align: left;
    font-weight: bolder;
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  .detail {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}

.deco {
  text-decoration-line: underline;
  text-decoration-color: yellow;
  text-decoration-thickness: 1rem;
}
</style>
