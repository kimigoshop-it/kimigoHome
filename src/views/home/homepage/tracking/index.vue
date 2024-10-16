<template>
    <div>
        <div class="navbox a">
            <Rout :val="route.query.val" />
        </div>
        <main>
            <div class="w tabsty">
                <TabList :val="route.query.val" />
            </div>
            <div class="w aaa">
                <List :val="route.query.val" />
            </div>
        </main>
    </div>
</template>
<script setup lang="ts">
import TabList from "./components/tabindex.vue";
import List from "./components/list.vue";
import Rout from "./components/rout.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="scss" scoped>
.navbox {
    height: 145px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
}

main {
    min-height: calc(100vh - 500px);
    padding: 1rem 0;
    position: relative;

    > div {
        background: #f6f6f6;
    }

    .tabsty {
        height: 62px;
        border-radius: 8px;
        background: #ffffff;
    }

    .aaa {
        margin-bottom: 0px;
    }
}

@media (max-width: 999px) {
    .navbox {
        padding: 0rem 1.5rem;
    }

    main .tabsty {
        height: fit-content;
        min-height: 3.875rem;
    }
}
</style>
