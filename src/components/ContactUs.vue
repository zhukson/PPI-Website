<script setup>
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import { lang } from "../helpers/language";
import { ref } from "vue";

const name = ref();
const email = ref();
const message = ref();
</script>

<template>
  <div class="total">
    <div class="left" v-if="lang === 'EN'">
      <div class="one">Contact Us</div>
      <div class="two">
        Our Technology, Your Best Solutions. Leave us a message and get in
        touch.
      </div>
      <img src="../assets/logo2.png" class="three" />
    </div>

    <div class="left" v-if="lang === 'CN'">
      <div class="one">联系我们</div>
      <div class="two">我们的技术是您最好的解决方案！请与我们保持联系。</div>
      <img src="../assets/logo2.png" class="three" />
    </div>

    <div class="right">
      <InputText v-model="name" placeholder="Steven Chen"></InputText>
      <InputText v-model="email" placeholder="you@email.com"></InputText>
      <Textarea
        v-model="message"
        :placeholder="lang === 'EN' ? 'Your Message' : '邮件信息'"
        class="area"
      ></Textarea>
      <Button>{{ lang === "EN" ? "Submit" : "提交" }}</Button>
    </div>
  </div>
  <div class="line"></div>
  <div class="social">
    <div class="text">©2024 PPI Engineering.</div>
    <div class="text">All Rights Reserved.</div>
    <div class="social-icons">
      <img src="../assets/linkedin.png" class="icon" />
      <img src="../assets/x.png" class="icon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.total {
  background: black;
  height: auto; // 设置为auto以适应内容高度
  display: flex;
  flex-direction: row;
  padding: 1rem;
  .left {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 2rem;
    width: 50%;
    .one {
      color: rgb(3, 137, 174);
      font-size: 1rem;
      font-weight: bold;
    }
    .two {
      color: white;
      font-size: 1.5rem;
    }
    .three {
      height: auto;
      width: 60%;
      object-fit: contain; // 保证图片比例不失真
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 1rem;
    input,
    .area {
      width: 100%; // 使用百分比代替固定像素
      max-width: 40rem; // 最大宽度限制
      background-color: black;
    }

    .area {
      height: 5rem;
    }

    button {
      background-color: white;
      color: black;
      border: none;
      padding: 0.5rem 1rem; // 增加按钮内边距
    }
  }
}
.line {
  height: 0.1rem;
  background-color: white;
}

.social {
  background-color: black;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  .text {
    color: white;
  }
  .social-icons {
    display: flex;
    gap: 1rem;

    .icon {
      height: 2rem;
      width: 2rem;
    }
  }
}

@media (max-width: 768px) {
  .total {
    flex-direction: column; // 在小屏幕上改为垂直布局
    .left,
    .right {
      width: 100%; // 小屏幕上宽度全屏
    }
    .right input,
    .right .area {
      max-width: none; // 移除最大宽度限制
    }
  }
}
</style>
