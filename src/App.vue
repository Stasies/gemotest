<template>
  <main>
    <h1>{{ isMobile ? "Мед. услуги" : "Медицинские услуги" }}</h1>
    <section class="services">
      <ServiceCard
        v-for="card in services"
        :key="card.id"
        :service="card"
      ></ServiceCard>
    </section>
    <OtherServices></OtherServices>
    <section class="promo">
      <PromoCard v-for="card in promo" :promo="card" :key="card.id"></PromoCard>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useDevice } from "@/composables/useDevice";
import { api } from "@/services/api";
import ServiceCard from "@/components/ServiceCard.vue";
import PromoCard from "./components/PromoCard.vue";
import OtherServices from "./components/OtherServices.vue";

const { isMobile } = useDevice();

const services = ref([]);
const promo = ref([]);

//имитация запросов к серверу
const fetchData = async () => {
  try {
    const [servicesRes, promoRes] = await Promise.all([
      api.getServices(),
      api.getPromo(),
    ]);

    services.value = servicesRes;
    promo.value = promoRes;
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.services {
  display: flex;
  overflow: scroll;
  gap: 8px;
  width: calc(100% + 64px);
  margin-left: -32px;
  padding: 0 32px;
}

.promo {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
}

@media (min-width: 1024px) {
  .services {
    overflow: hidden;
    margin-left: 0;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 0;
  }
  .promo {
    flex-direction: row;
  }
}
</style>
