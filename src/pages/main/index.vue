<script setup>
import Button from "primevue/button";
</script>

<template>
  <div class="total">
    <div class="image-container">
      <img src="../../assets/main/background.png" alt="背景图片" class="bg" />
      <div class="centered-content">
        <p class="title">Profession,</p>
        <p class="title">Precision,</p>
        <p class="title">Innovation</p>
        <Button>Explore PPI >>></Button>
      </div>
    </div>
    <div class="description">
      <div class="title">Our Technology, Your Best Solution!</div>
      <div class="text">
        PPI offers a full range of fasteners and non-standard hardware to meet
        your needs
      </div>
      <div class="detail">Learn Who We Are</div>
    </div>
  </div>
  <
</template>

<style scoped lang="scss">
.total {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.image-container {
  position: relative;
  width: 100%;
  height: 50rem;
  animation: slideUp 0.5s ease-out forwards;
}

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
}

button {
  background-color: white;
  color: black;
  border: none;
  width: 40%;
  font-size: 1rem;
}

.title {
  text-align: left;
  font-weight: bolder;
  margin: 0.2rem;
  font-size: 5rem;
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
  height: 30rem;
  background-color: yellow;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  .title {
    font-size: 3rem;
    font-weight: bold;
  }
  .text {
    font-size: 2rem;
    font-family: "Times New Roman", Times, serif;
  }

  .detail {
    font-size: 1.5rem;
    height: 5rem;
    width: 20rem;
    font-weight: bold;
    border-style: solid;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .detail:hover {
    cursor: pointer;
  }
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
