<template>
  <div class="backbox_home" id="home">
    <transport />
    <listtype />
    <customService />
  </div>
</template>

<script setup lang="ts">
import customService from "./components/customService.vue";
import transport from "./components/transport.vue";
import listtype from "./components/listtype.vue";
import { ref, reactive } from "vue";
</script>

<style lang="scss" scoped>
.backbox_home {
  display: flex;
  flex-direction: column;
}
</style>
