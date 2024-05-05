<script setup>
import Button from "primevue/button";
import { lang } from "../../helpers/language";
</script>

<template>
  <div class="total">
    <div class="image-container">
      <img src="../../assets/about/bg.png" alt="background" class="bg" />
      <div class="centered-content">
        <p class="title" v-if="lang === 'EN'">About Us</p>
        <p class="title" v-else-if="lang === 'CN'">关于我们</p>
      </div>
    </div>
    <div class="image-container2">
      <div class="left-content">
        <p class="title" v-if="lang === 'EN'">
          <u class="deco">Our</u> Mission
        </p>
        <p class="title" v-else-if="lang === 'CN'">
          <u class="deco">PPI</u>的使命
        </p>
      </div>
      <div class="right-content">
        <p class="title" v-if="lang === 'EN'">
          Committed to becoming a customers' preferred supplier of efficient,
          precise, safe and reliable fastener solutions.
        </p>
        <p class="title" v-else-if="lang === 'CN'">
          致力成为客户高效、精密&安全可靠的紧固件解决方案的首选供应商。
        </p>
      </div>
    </div>
    <div class="description" v-if="lang === 'EN'">
      <div class="title"><u class="deco">Who</u> We Are</div>
      <div class="detail">
        PPI Engineering was established on April 18, 2016. The company
        specializes in the products of M0.6~M24 precision & high-strength screws
        & bolts. The factory area is 7,000 square meters. We total have more
        than 200 sets of high-precision cold forming machine, thread maching,
        CNC & auto lathe…etcs, and the production capacity can achieve more than
        350 million pieces /month.
      </div>
      <div class="detail">
        The company provide: high-precision screws, electronic screws,
        combination screws, home appliance screws, automotive standard parts,
        non-standard parts, customized parts, and high-strength & high-grade
        fasteners. All products comply with JIS (Japanese standard), GB
        (national standard), ANSI (American standard), DIN (German standard) and
        other standards. Currently, the company's products are widely used in
        various consumer electronics products (telephones, communications, LED,
        LCD), automobile industry, medical equipment, electronic equipment,
        instrumentation, industrial control Equipment, home appliances, etc.
        Currently, the company has production bases in Wuxi, Kunshan, and
        Zhongshan to provide customers with high-quality products and services.
      </div>
    </div>
    <div class="description" v-else-if="lang === 'CN'">
      <div class="title"><u class="deco">PPI</u> 简介</div>
      <div class="detail">
        PPI Engineering
        成立于2016年4月18日，公司专业生产M0.6~M24精密及高强度螺丝&螺栓，厂房面积7000平方，目前拥有高精密螺丝生产设备、数控车削设备&加工中心及辅助设备合计200台套，月产能3.5亿件以上。
      </div>
      <div class="detail">
        公司为高精密螺丝、电子螺丝、组合螺丝、家电螺丝，汽车标件、非标件、异形件、高强度高等级紧固件之制造商，产品执行JIS（日标）、GB(国标)、ANSI（美标）、DIN（德标）等各类标准,
        公司产品广泛用于各类消费电子产品（收机、通讯、LED、LCD）、汽车工业、医疗设备、电子设备、仪器仪表、工控设备、家电等。目前公司分别在无锡、昆山、中山有生产基地为客户提供优质产品和服务。
      </div>
    </div>

    <div class="description" v-if="lang === 'EN'">
      <div class="title"><u class="deco">Whe</u>re We Are</div>
      <div class="where">
        <img src="../../assets/about/locations.png" class="locations" />
      </div>
    </div>
    <div class="description" v-if="lang === 'CN'">
      <div class="title"><u class="deco">公司</u>地址</div>
      <div class="where">
        <img src="../../assets/about/locations.png" class="locations" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.deco {
  text-decoration-line: underline;
  text-decoration-color: yellow;
  text-decoration-thickness: 1rem;
}
.total {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.image-container {
  position: relative;
  width: 100%;
  height: 25rem;
  animation: slideUp 0.5s ease-out forwards;
}

.image-container2 {
  position: relative;
  width: 100%;
  height: 25rem;
  animation: slideUp 0.5s ease-out forwards;
  background-color: black;
  .left-content {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    color: white;
    .title {
      text-align: left;
      font-weight: bolder;
      margin: 0.2rem;
      font-size: 5rem;
    }
  }

  .right-content {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    color: white;
    .title {
      text-align: center;
      font-weight: bold;
      margin: 0.2rem;
      font-size: 1.5rem;
      line-height: 3rem;
    }
  }
}

.bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.locations {
  width: 80%;
  height: 90%;
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

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
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

.where {
  display: flex;
  align-items: center;
  justify-content: center;
}

// 媒体查询
@media (max-width: 768px) {
  .image-container {
    height: 30rem; // 调整较小屏幕的高度
  }
  .title {
    font-size: 3rem; // 减小标题字号
  }
  button {
    width: 50%; // 调整按钮宽度
    font-size: 0.8rem; // 减小字号
  }
}
</style>
