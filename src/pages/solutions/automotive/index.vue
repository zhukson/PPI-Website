<script setup>
import Button from "primevue/button";
import { lang } from "../../../helpers/language";
import Solutions from "../../../components/Solutions.vue";
import Card from "primevue/card";
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
          <template #content>
            <p class="m-0">用于连接和固定汽车的各种部件，例如引擎和底盘。</p>
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
              src="../../../assets/solutions/weldBolt.png"
              class="card-image"
            />
          </template>
          <template #title>焊接螺栓</template>
          <template #content>
            <p class="m-0">
              通过焊接固定在金属表面，用于车身和框架的坚固连接。
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
              src="../../../assets/solutions/stud.png"
              class="card-image"
            />
          </template>
          <template #title>螺柱</template>
          <template #content>
            <p class="m-0">
              通常用于需要强度和稳定性的地方，例如轮毂和引擎部件。
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
              src="../../../assets/solutions/bolt.png"
              class="card-image"
            />
          </template>
          <template #title>Bolt</template>
          <template #content>
            <p class="m-0">
              Used to connect and secure various parts of a car, such as the
              engine and chassis.
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
              src="../../../assets/solutions/weldBolt.png"
              class="card-image"
            />
          </template>
          <template #title>Weld Bolt</template>
          <template #content>
            <p class="m-0">
              Welded to metal surfaces for strong connections in car bodies and
              frames.
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
              src="../../../assets/solutions/stud.png"
              class="card-image"
            />
          </template>
          <template #title>Stud</template>
          <template #content>
            <p class="m-0">
              Typically used in areas requiring strength and stability, such as
              wheel hubs and engine components.
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
