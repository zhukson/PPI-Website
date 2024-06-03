<script setup>
import { defineProps, ref, computed } from "vue";
import Image from "primevue/image";

const props = defineProps({
  lang: {
    type: String,
  },
  backgroundImage: {
    type: String,
    required: true,
  },
  titleEN: {
    type: String,
  },
  titleCN: {
    type: String,
  },
  solutionTitleEN: {
    type: String,
  },
  solutionContentEN: {
    type: String,
  },
  solutionTitleCN: {
    type: String,
  },
  solutionContentCN: {
    type: String,
  },
  keyProductsTitleEN: {
    type: String,
  },
  keyProductsContentEN: {
    type: String,
  },
  keyProductsTitleCN: {
    type: String,
  },
  keyProductsContentCN: {
    type: String,
  },
});

const getImageUrl = (imagePath) => {
  return new URL(`../assets/navigator/${imagePath}`, import.meta.url).href;
};

const resolvedBackgroundImage = computed(() =>
  getImageUrl(props.backgroundImage)
);
</script>

<template>
  <div class="total">
    <div class="image-container">
      <Image
        :src="resolvedBackgroundImage"
        alt="background"
        class="p-image"
        width="100%"
        height="100%"
      />
      <div class="centered-content">
        <p class="title" v-if="lang === 'EN'">{{ props.titleEN }}</p>
        <p class="title" v-else-if="lang === 'CN'">{{ props.titleCN }}</p>
      </div>
      <div class="p-image-preview-container">
        <div class="p-image-preview-indicator">
          <i class="pi pi-search-plus p-image-preview-icon"></i>
        </div>
      </div>
    </div>
    <div class="description" v-if="lang === 'EN'">
      <div class="title">
        <u class="deco">{{ props.solutionTitleEN }}</u>
      </div>
      <div class="detail">
        <slot name="solutionContentEN">
          {{ props.solutionContentEN }}
        </slot>
      </div>
    </div>
    <div class="description" v-else-if="lang === 'CN'">
      <div class="title">
        <u class="deco">{{ props.solutionTitleCN }}</u>
      </div>
      <div class="detail">
        <slot name="solutionContentCN">
          {{ props.solutionContentCN }}
        </slot>
      </div>
    </div>
    <div class="description" v-if="lang === 'EN'">
      <div class="title">
        <u class="deco">{{ props.keyProductsTitleEN }}</u>
      </div>
      <div class="detail">
        <slot name="productsContentsEN">
          {{ props.keyProductsContentEN }}
        </slot>
      </div>
    </div>
    <div class="description" v-else-if="lang === 'CN'">
      <div class="title">
        <u class="deco">{{ props.keyProductsTitleCN }}</u>
      </div>

      <div class="detail">
        <slot name="productsContentsCN">
          {{ props.keyProductsContentCN }}
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-container {
  position: relative;
  width: 100%;
  height: 25rem;
  animation: slideUp 0.5s ease-out forwards;
  .p-image {
    width: 30%;
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
}

.description {
  width: 90%;
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

.deco {
  text-decoration-line: underline;
  text-decoration-color: yellow;
  text-decoration-thickness: 1rem;
}
</style>
