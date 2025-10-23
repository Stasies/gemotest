import { ref, onMounted, onUnmounted } from "vue";

const isMobile = ref(false);

function updateIsMobile() {
  isMobile.value = window.innerWidth < 1024;
}

export function useDevice() {
  onMounted(() => {
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateIsMobile);
  });

  return { isMobile };
}
