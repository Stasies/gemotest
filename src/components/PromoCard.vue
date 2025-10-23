<template>
  <div class="promo-card">
    <div class="promo-img">
      <img :src="promo.img" alt="" />
    </div>
    <div v-if="isMobile" v-html="promo.text.mobile" class="promo-text"></div>
    <div v-else v-html="promo.text.desktop" class="promo-text"></div>
  </div>
</template>

<script setup lang="ts">
import type { Promo } from "@/types";
import { useDevice } from "@/composables/useDevice";

const { isMobile } = useDevice();

defineProps<{ promo: Promo }>();
</script>

<style scoped>
.promo-card:nth-child(2n + 1) {
  background-color: var(--color-yellow);
}
.promo-card:nth-child(2n) {
  background-color: var(--color-yellow-light);
}
.promo-card {
  width: 100%;
  padding: 16px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.promo-img {
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.promo-text {
  font-size: 12px;
  line-height: var(--line-height-sm);
}
@media (max-width: 1023px) {
  .promo-card:nth-child(3) img {
    width: 64px;
    height: 64px;
  }
}
@media (min-width: 1024px) {
  .promo-card {
    flex-direction: column;
    gap: 20px;
    padding: 28px 0 40px;
    justify-content: center;
  }
  .promo-card .promo-img {
    width: 80px;
    height: 80px;
    margin: 0 auto;
  }
  .promo-text {
    font-size: 14px;
    text-align: center;
    line-height: var(--line-height-md);
  }
}
</style>
