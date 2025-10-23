<template>
  <div class="tag">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.tag {
  width: fit-content;
  box-sizing: border-box;
  height: 32px;
  border-radius: 20px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  background-color: var(--color-primary);
  font-weight: var(--font-weight-semi-bold);
  font-size: 12px;
}
@media (min-width: 1024px) {
  .tag {
    font-size: 13px;
    letter-spacing: 0.4px;
  }
}
</style>
