<template>
  <div class="back">
    <img :src="lang === 0 ? titchina : titha" alt="">
    <houselist />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { useAppStore } from "~/src/store/app";
const app = useAppStore();

import houselist from "./houselist.vue";
import titchina from "@/assets/image/titchina.png";
import titha from "@/assets/image/titha.png";

const lang = computed(() => {
  return app.lang
})

</script>

<style lang="scss" scoped>
.border {
  border: none !important;
}

.back {
  box-sizing: border-box;
  width: 100%;
  height: 29.6875rem;
  display: flex;
  align-items: center;
  background-size: 100% 100%;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: url('@/assets/image/banner.png');
  background-size: cover;

  >img {
    width: 60rem;
    height: 14.3125rem;
  }
}
</style>
