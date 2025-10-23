<template>
  <div class="service-card">
    <picture class="service-image">
      <source media="(max-width: 1023px)" :srcset="service.images?.mobile" />
      <source :srcset="service.images?.desktop" />
      <img loading="lazy" :src="service.fallback" :alt="service.title" />
    </picture>
    <h2 class="service-card-title">
      {{
        service.title_mobile && isMobile ? service.title_mobile : service.title
      }}
    </h2>
    <div class="content">
      <div class="service-card-text">{{ service.text }}</div>
      <Tag>{{ service.tag }}</Tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from "./ui/Tag.vue";
import type { Service } from "@/types";
import { useDevice } from "@/composables/useDevice";

const { isMobile } = useDevice();
defineProps<{
  service: Service;
}>();
</script>

<style scoped>
.service-card {
  border-radius: 4px;
  height: 240px;
  aspect-ratio: 2.16/2.4;
  flex: 0 0 calc(84%);
  padding: 28px 32px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  white-space: pre-line;
}
.service-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
.service-image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.service-card-title {
  font-size: 15px;
  line-height: var(--line-height-sm);
  color: var(--color-white);
  margin-bottom: 24px;
  font-weight: var(--font-weight-semi-bold);
}
.service-card-text {
  font-size: 12px;
  color: var(--color-white);
  line-height: var(--line-height-sm);
  margin-bottom: 20px;
}
@media (min-width: 1024px) {
  .service-card {
    width: 100%;
    height: 280px;
    padding: 32px 40px 40px;
  }
  .service-card-title {
    font-size: 24px;
    line-height: var(--line-height-lg);
  }
  .service-card-text {
    line-height: var(--line-height-md);
    font-size: 16px;
    margin-bottom: 24px;
  }
}
</style>
