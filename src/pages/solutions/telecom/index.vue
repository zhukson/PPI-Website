<script setup>
import Button from "primevue/button";
import { lang } from "../../../helpers/language";
import Solutions from "../../../components/Solutions.vue";
import { useRoute, useRouter } from "vue-router";
import Card from "primevue/card";

const router = useRouter();
const route = useRoute();
</script>

<template>
  <Solutions
    :lang="lang"
    backgroundImage="telecom.png"
    titleEN="Telecommunication"
    titleCN="通信"
    solutionTitleEN="Our Solution"
    solutionTitleCN="我们的解决方案"
    keyProductsTitleEN="Key Products"
    keyProductsTitleCN="关键产品"
  >
    <template #solutionContentCN>
      PPI工程集团专注于为电信行业提供高质量的紧固解决方案，提供各种转动螺钉和螺母等组件。我们的产品设计满足电信应用的严格要求，确保关键基础设施的可靠和安全连接。
    </template>
    <template #solutionContentEN>
      PPI Engineering Group specializes in providing high-quality fastening
      solutions for the telecommunication industry, offering a wide range of
      components such as turning screws and nuts. Our products are designed to
      meet the stringent demands of telecommunication applications, ensuring
      reliable and secure connections for critical infrastructure.
    </template>

    <template #productsContentsCN>
      <div class="container">
        <Card class="card">
          <template #header>
            <img
              alt="user header"
              src="../../../assets/solutions/nut.png"
              class="card-image"
            />
          </template>
          <template #title>螺母</template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button
                :label="lang === 'CN' ? '查看详情' : 'Detail'"
                outlined
                class="w-full"
                @click="router.push({ path: '/products/nuts' })"
              />
            </div>
          </template>
        </Card>

        <Card class="card">
          <template #header>
            <img
              alt="user header"
              src="../../../assets/products/stud/turningScrew.png"
              class="card-image"
            />
          </template>
          <template #title>紧定螺丝</template>

          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button
                :label="lang === 'CN' ? '查看详情' : 'Detail'"
                outlined
                class="w-full"
                @click="router.push({ path: '/products/turningScrew' })"
              />
            </div>
          </template>
        </Card>
      </div>
    </template>
    <template #productsContentsEN>
      <div class="container">
        <Card class="card">
          <template #header>
            <img
              alt="user header"
              src="../../../assets/solutions/nut.png"
              class="card-image"
            />
          </template>
          <template #title>Nut</template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button
                :label="lang === 'CN' ? '查看详情' : 'Detail'"
                outlined
                class="w-full"
                @click="router.push({ path: '/products/nuts' })"
              />
            </div>
          </template>
        </Card>

        <Card class="card">
          <template #header>
            <img
              alt="user header"
              src="../../../assets/products/stud/turningScrew.png"
              class="card-image"
            />
          </template>
          <template #title>Turning Screw</template>

          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button
                :label="lang === 'CN' ? '查看详情' : 'Detail'"
                outlined
                class="w-full"
                @click="router.push({ path: '/products/turningScrew' })"
              />
            </div>
          </template>
        </Card>
      </div>
    </template>
  </Solutions>
</template>

<style scoped>
.image {
  width: 100%;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-evenly;
}

.card {
  width: 30%;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 20rem;
}

.p-button {
  border-color: black;
  color: black;
}
</style>
