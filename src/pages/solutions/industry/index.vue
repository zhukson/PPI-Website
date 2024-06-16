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
    backgroundImage="industry.png"
    titleEN="Industry"
    titleCN="工业产品"
    solutionTitleEN="Our Solution"
    solutionTitleCN="我们的解决方案"
    keyProductsTitleEN="Key Products"
    keyProductsTitleCN="关键产品"
  >
    <template #solutionContentCN>
      PPI
      工程集团在工业领域提供高质量的紧固解决方案。我们的全面产品系列包括机加工螺钉、自攻螺钉、组合螺钉、嵌件和螺母，所有产品都旨在满足工业应用的严格要求。我们专注于精密工程和可靠性，确保我们的紧固件在各种工业环境中提供卓越的性能和耐用性。从重型机械和制造设备到装配线和基础设施项目，PPI
      工程集团的先进紧固技术被行业领导者信赖，以提升运营效率和结构完整性。
      <div class="container">
        <img src="../../../assets/solutions/industryEN.png" class="image" />
      </div>
    </template>
    <template #solutionContentEN
      >`` PPI Engineering Group excels in delivering high-quality fastening
      solutions for the industrial sector. Our comprehensive product lineup
      includes machining screws, tapping screws, SEM screws, inserts, and nuts,
      all designed to meet the rigorous demands of industrial applications. Our
      focus on precision engineering and reliability ensures that our fasteners
      provide exceptional performance and durability in various industrial
      environments. From heavy machinery and manufacturing equipment to assembly
      lines and infrastructure projects, PPI Engineering Group's advanced
      fastening technologies are trusted by industry leaders to enhance
      operational efficiency and structural integrity.
      <div class="container">
        <img src="../../../assets/solutions/industryEN.png" class="image" />
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

        <Card class="card">
          <template #header>
            <img
              alt="user header"
              src="../../../assets/solutions/insert.png"
              class="card-image"
            />
          </template>
          <template #title>嵌件</template>

          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button
                :label="lang === 'CN' ? '查看详情' : 'Detail'"
                outlined
                class="w-full"
                @click="router.push({ path: '/products/insert' })"
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

        <Card class="card">
          <template #header>
            <img
              alt="user header"
              src="../../../assets/solutions/insert.png"
              class="card-image"
            />
          </template>
          <template #title>Insert</template>

          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button
                :label="lang === 'CN' ? '查看详情' : 'Detail'"
                outlined
                class="w-full"
                @click="router.push({ path: '/products/insert' })"
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
