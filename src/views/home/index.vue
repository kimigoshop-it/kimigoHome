<template>
  <div class="box">
    <Header></Header>
    <main style="margin-top: 4.5rem">
      <router-view />
    </main>
    <fotter />
  </div>
</template>

<script setup lang="ts">
import fotter from "@/components/footer/footer.vue";
import Header from "@/components/header.vue";
import { QueryAppPackageManagement } from "@/service";

const get = async () => {
  await QueryAppPackageManagement({});
};
</script>

<style scoped lang="scss">
@import "./index.scss";

.box {
  position: relative;

  >main {
    min-height: calc(100vh - 350px);

    >div {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
