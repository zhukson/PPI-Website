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
    backgroundImage="automotive.png"
    titleEN="Automotive Component"
    titleCN="汽车零部件"
    solutionTitleEN="Our Solution"
    solutionTitleCN="我们的解决方案"
    keyProductsTitleEN="Key Products"
    keyProductsTitleCN="关键产品"
  >
    <template #solutionContentCN>
      {{
        "PPI 工程集团专注于高质量的汽车紧固解决方案，提供广泛的组件，如螺栓、螺柱、螺母和螺钉，专为各种车辆应用量身定制。我们专注于创新和可靠性，我们的产品提高了车辆的性能、安全性和耐用性。我们为包括底盘、内部系统和照明在内的关键车辆区域提供基本的紧固技术，确保汽车制造商的卓越结构完整性和设计标准。信赖 PPI 工程集团，提供先进、高效且可靠的汽车工程解决方案。"
      }}
      <div class="container">
        <img src="../../../assets/solutions/carCN.png" class="image" />
      </div>
    </template>
    <template #solutionContentEN>
      {{
        "PPI Engineering Group specializes in high-quality automotive fastening solutions, offering a broad range of components such as bolts, studs, nuts, and screws tailored for various vehicle applications. With a focus on innovation and reliability, our products enhance vehicle performance, safety, and durability. We provide essential fastening technologies for critical vehicle areas including the chassis, interior systems, and lighting, ensuring superior structural integrity and design standards for automotive manufacturers. Trust PPI Engineering Group for advanced, efficient, and dependable automotive engineering solutions."
      }}
      <div class="container">
        <img src="../../../assets/solutions/carEN.png" class="image" />
      </div>
    </template>

    <template #productsContentsCN>
      <div class="container">
        <Card class="card">
          <template #header>
            <img
              alt="user header"
              src="../../../assets/solutions/bolt.png"
              class="card-image"
            />
          </template>
          <template #title>螺栓</template>
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
              src="../../../assets/solutions/weldBolt.png"
              class="card-image"
            />
          </template>
          <template #title>焊接螺栓</template>
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
        <Card class="card">
          <template #header>
            <img
              alt="user header"
              src="../../../assets/solutions/stud.png"
              class="card-image"
            />
          </template>
          <template #title>螺柱</template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button
                :label="lang === 'CN' ? '查看详情' : 'Detail'"
                outlined
                class="w-full"
                @click="router.push({ path: '/products/stud' })"
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
              src="../../../assets/solutions/bolt.png"
              class="card-image"
            />
          </template>
          <template #title>Bolt</template>
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
              src="../../../assets/solutions/weldBolt.png"
              class="card-image"
            />
          </template>
          <template #title>Weld Bolt</template>
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
        <Card class="card">
          <template #header>
            <img
              alt="user header"
              src="../../../assets/solutions/stud.png"
              class="card-image"
            />
          </template>
          <template #title>Stud</template>
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
