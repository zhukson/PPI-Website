<script setup>
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import { ref } from "vue";

const name = ref();
const email = ref();
const message = ref();
</script>

<template>
  <div class="total">
    <div class="left">
      <div class="one">Contact Us</div>
      <div class="two">
        Our Technology, Your Best Solutions. Leave us a message and get in
        touch.
      </div>
      <img src="../assets/logo2.png" class="three" />
    </div>
    <div class="right">
      <InputText v-model="name" placeholder="Steven Chen"></InputText>
      <InputText v-model="email" placeholder="you@email.com"></InputText>
      <Textarea
        v-model="message"
        placeholder="Your Message"
        class="area"
      ></Textarea>
      <Button>Submit</Button>
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
  height: 20rem;
  display: flex;
  flex-direction: row;
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
      height: 7rem;
      width: 60%;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 1rem;
    input {
      width: 40rem;
      background-color: black;
    }

    .area {
      width: 40rem;
      height: 5rem;
      background-color: black;
    }

    button {
      background-color: white;
      color: black;
      border: 0cap;
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
</style>
