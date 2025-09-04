<template>
    <div>
        <div class="navbox a">
            <Rout :val="route.query.val" />
        </div>
        <main>
            <!-- <div class="w tabsty">
                <TabList :val="route.query.val" />
            </div> -->
            <div class="w aaa">
                <List :val="route.query.val" />
            </div>
        </main>
    </div>
</template>
<script setup lang="ts">
import TabList from './components/tabindex.vue'
import List from './components/list.vue'
import Rout from './components/rout.vue'
import { useRoute } from 'vue-router';


const route = useRoute()

</script>

<style lang="scss" scoped>
.navbox {
    height: 145px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
}

main {
    min-height: calc(100vh - 500px);
    padding: 1rem 0;
    position: relative;

    >div {
        background: #F6F6F6
    }

    .tabsty {
        height: 62px;
        border-radius: 8px;
        background: #FFFFFF;
    }

    .aaa {
        margin-bottom: 63px;
    }
}
</style>