<template>
  <section>
    <p class="text_secondary">ДРУГИЕ МЕДИЦИНСКИЕ УСЛУГИ</p>

    <div v-if="isMobile" class="services-list">
      <span v-for="service in mobileServices" :key="service.id" class="service">
        {{ service.title }}
        <template v-if="service.highlight">
          <span class="text_highlight">– {{ service.highlight }}</span>
        </template>
      </span>
    </div>

    <div v-else class="services-list">
      <span
        v-for="(service, index) in desktopServices"
        :key="service.id"
        class="service"
        :class="{ 'service_no-divider': isLineBreak(index) }"
      >
        {{ service.title }}
        <template v-if="service.highlight">
          <span class="text_highlight">– {{ service.highlight }} </span>
        </template>
      </span>
    </div>

    <a href="/" class="link_green">
      {{
        isMobile
          ? "Все медуслуги Гемотест (35)"
          : "Все медицинские услуги Гемотест (35)"
      }}
      <span class="icon"
        ><img src="/src/assets/icons/arrow.svg" aria-hidden="true" />
      </span>
    </a>
  </section>
</template>

<script setup lang="ts">
import { useDevice } from "@/composables/useDevice";

const { isMobile } = useDevice();

const desktopServices = [
  { id: 1, title: "УЗИ" },
  { id: 2, title: "УЗИ дома", highlight: "бесплатный выезд" },
  { id: 3, title: "ЭКГ" },
  { id: 4, title: "ЭКГ дома", highlight: "бесплатный выезд" },
  { id: 5, title: "Лечение Сургитрон" },
  { id: 6, title: "Кольпоскопия" },
];

const mobileServices = [
  { id: 1, title: "УЗИ дома", highlight: "бесплатный выезд" },
  { id: 2, title: "ЭКГ дома", highlight: "бесплатный выезд" },
  { id: 3, title: "Кольпоскопия" },
  { id: 4, title: "Лечение Сургитрон" },
];
const isLineBreak = (index: number) => index === 3 || index === 5;
</script>

<style scoped>
.services-list {
  max-width: 642px;
  margin-bottom: 18px;
  line-height: var(--line-height-lg);
}
.service {
  display: block;
  font-size: 13px;
}

.text_highlight {
  color: var(--color-primary);
}

.text_secondary {
  margin-bottom: 20px;
}

.icon img {
  width: 14px;
  box-sizing: content-box;
  font-weight: bold;
  padding-left: 4px;
  vertical-align: middle;
  fill: var(--color-secondary);
  translate: 0 -1px;
}

@media (min-width: 1024px) {
  .other-services {
    line-height: var(--line-height-xl);
  }
  .text_secondary {
    margin-bottom: 16px;
  }
  .services-list {
    margin-bottom: 16px;
    line-height: var(--line-height-xl);
  }
  .service {
    font-size: 16px;
    display: inline-block;
    padding-right: 20px;
    margin-right: 12px;
    position: relative;
  }
  .service::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 5px;
    height: 5px;
    background-color: #eaeaeb;
    border-radius: 50%;
    transform: translateY(-50%);
  }
  .service_no-divider {
    padding: 0;
    margin: 0;
  }
  .service:last-child::after,
  .service_no-divider::after {
    content: none;
  }
}
</style>
