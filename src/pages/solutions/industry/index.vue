<script setup>
import Button from "primevue/button";
import { lang } from "../../../helpers/language";
import Solutions from "../../../components/Solutions.vue";
import Card from "primevue/card";
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
    <template #solutionContentEN>
      PPI Engineering Group excels in delivering high-quality fastening
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
          <template #content>
            <p class="m-0">
              与螺栓配合使用，提供牢固的紧固，应用于各种连接部位。
            </p>
          </template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button label="Detail" outlined class="w-full" />
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
          <template #content>
            <p class="m-0">能够自行切割螺纹，广泛用于塑料和薄金属件的固定。</p>
          </template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button label="Detail" outlined class="w-full" />
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
          <template #content>
            <p class="m-0">
              常用于软材料（如塑料或木材）中，以提供牢固的螺纹连接。嵌件可以通过压入、嵌入或热熔等方式安装。
            </p>
          </template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button label="Detail" outlined class="w-full" />
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
          <template #content>
            <p class="m-0">
              Used in conjunction with bolts to provide secure fastening,
              applied in various connection points.
            </p>
          </template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button label="Detail" outlined class="w-full" />
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
          <template #content>
            <p class="m-0">
              Can cut its own threads, widely used for securing plastic and thin
              metal parts.
            </p>
          </template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button label="Detail" outlined class="w-full" />
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
          <template #content>
            <p class="m-0">
              Threaded inserts are commonly used in soft materials such as
              plastic, wood, or aluminum. They are designed to provide a strong
              threaded anchor for screws and bolts, improving the material’s
              load-bearing capacity and wear resistance.
            </p>
          </template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button label="Detail" outlined class="w-full" />
            </div>
          </template>
        </Card>
      </div>
    </template>
  </Solutions>
</template>

<style>
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
</style>
