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
    backgroundImage="electronic.png"
    titleEN="Consuming Electronics"
    titleCN="消费电子产品"
    solutionTitleEN="Our Solution"
    solutionTitleCN="我们的解决方案"
    keyProductsTitleEN="Key Products"
    keyProductsTitleCN="关键产品"
  >
    <template #solutionContentCN>
      PPI
      工程集团专注于为消费电子行业提供高质量的紧固解决方案。我们的产品范围包括机加工螺钉、自攻螺钉、销钉和螺母，所有产品都专门针对电子设备的特定需求量身定制。我们注重精度和可靠性，确保我们的组件为各种消费电子产品提供结构完整性和最佳性能，从智能手机和平板电脑到家用电器和可穿戴技术。信赖
      PPI
      工程集团，提供先进、高效且可靠的紧固解决方案，提升您的电子产品的功能和耐用性。
      <div class="container">
        <img src="../../../assets/solutions/electronicEN.png" class="image" />
      </div>
    </template>
    <template #solutionContentEN>
      PPI Engineering Group specializes in providing high-quality fastening
      solutions for the consumer electronics industry. Our product range
      includes machining screws, self-tapping screws, pins, and nuts, all
      tailored to meet the specific needs of electronic devices. With a focus on
      precision and reliability, our components ensure the structural integrity
      and optimal performance of a wide variety of consumer electronics, from
      smartphones and tablets to home appliances and wearable technology. Trust
      PPI Engineering Group to deliver advanced, efficient, and dependable
      fastening solutions that enhance the functionality and durability of your
      electronic products.
      <div class="container">
        <img src="../../../assets/solutions/electronicEN.png" class="image" />
      </div>
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
              src="../../../assets/solutions/tappingScrew.png"
              class="card-image"
            />
          </template>
          <template #title>自攻螺钉</template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button
                :label="lang === 'CN' ? '查看详情' : 'Detail'"
                outlined
                class="w-full"
                @click="router.push({ path: '/products/screw' })"
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
              src="../../../assets/solutions/tappingScrew.png"
              class="card-image"
            />
          </template>
          <template #title>Tapping Screw</template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button
                :label="lang === 'CN' ? '查看详情' : 'Detail'"
                outlined
                class="w-full"
                @click="router.push({ path: '/products/screw' })"
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
