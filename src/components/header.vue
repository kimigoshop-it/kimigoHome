<template>
    <div class="headers">
        <header class="headerTop w">
            <img :src="logo" />
            <div class="routesty">
                <div>
                    <router-link
                        v-for="(item, index) in routerdata"
                        :key="item.id"
                        :to="item.path"
                        :class="active === index ? 'bott' : ''"
                        :style="{ borderBottom: routerjjfaFlag ? 'none' : '' }"
                        @click="clickactive(index)"
                    >
                        {{ item.name }}
                    </router-link>
                </div>
                <div class="select">
                    <LanguageChange />
                </div>
            </div>
        </header>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import LanguageChange from "./lang/LanguageChange.vue";
import { ref, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import logo from "@/assets/image/logo.png";
const route = useRoute();
const router = useRouter();
let routerjjfaFlag = ref(false);

watch(
    () => router.currentRoute.value.path,
    (toPath) => {
        //要执行的方法
        routerjjfaFlag.value = toPath == "/home/index/tracking";
    },
    { immediate: true, deep: true }
);
const active = ref(0);
const selectval = ref("简体中文");
const time = ref<any>(null);
const options = ref([
    { name: "简体中文", id: 0 },
    { name: "哈文", id: 1 },
    { name: "俄语", id: 2 },
]);
const routerdata = computed(() => {
    return [
        { path: "#home", name: t("home.pickup.pickup"), id: 0 },
        { path: "#jjfa", name: t("home.pickup.solution"), id: 1 },
        { path: "#gywm", name: t("home.pickup.aboutus"), id: 2 },
        { path: "#lxwm", name: t("home.pickup.contactus"), id: 3 },
    ];
});

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // 遍历锚点元素，判断是否在可视区域内
    routerdata.value.forEach((element, index) => {
        const anchorElement = document.querySelector(element.path) as Element;
        if (anchorElement) {
            const elementPosition = anchorElement.getBoundingClientRect();
            if (
                elementPosition.top >= 0 &&
                elementPosition.top < windowHeight * 0.5
            ) {
                active.value = index;
            }
        }
    });
};
onMounted(() => {
    router.afterEach((to, from) => {
        if (to.hash) {
            const element = document.querySelector(to.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    });

    // 注册滚动事件监听器
    window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
    // 移除滚动事件监听器
    window.removeEventListener("scroll", handleScroll);
});
const clickactive = (index: any) => {
    const pathList = [
        "/home/index#home",
        "/home/index#jjfa",
        "/home/index#gywm",
        "/home/index#lxwm",
    ];
    router.push(pathList[index]);
    active.value = index;
    window.removeEventListener("scroll", handleScroll);
    if (time.value !== null) {
        clearTimeout(time.value);
    }
    time.value = setTimeout(() => {
        window.addEventListener("scroll", handleScroll);
    }, 500);
};
</script>

<style lang="scss" scoped>
.headers {
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: #ffff;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.302);

    .headerTop {
        img {
            margin-top: 20px;
            width: 120px;
            height: 33px;
        }
    }
}

header {
    height: 4.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    image {
        width: 120px;
        height: 33px;
    }

    .routesty {
        display: flex;
        font-family: Source Han Sans CN;
        font-weight: normal;
        justify-content: flex-end;
        color: #4d4d4d;
        position: relative;
        margin-top: 1.5rem;

        > div:nth-child(1) {
            margin-right: 48px;

            > a {
                margin-left: 48px;
                padding-bottom: 10px;
                color: #4d4d4d;
                font-size: 16px;
                transition: all 0.2s;
            }

            > a:hover {
                color: #5358a5 !important;
            }
        }
    }
}

.bott {
    border-bottom: 4px solid #5358a5;
    border-radius: 3px;
    line-height: 18px;
    color: #5358a5 !important;
}

a:visited,
a:focus {
    outline: none;
    color: inherit;
    text-decoration: none;
}

.select {
    width: 2.1875rem;
    height: 1.5625rem;
    border-radius: 71px;
    display: flex;
    right: -250px;
}

@media (max-width: 999px) {
    header {
        align-items: center;
        position: relative;
        padding-inline-start: 1.5rem;
        padding-inline-end: 1.5rem;
    }

    .headers .headerTop img {
        margin-top: inherit;
    }

    header .routesty > div:nth-child(1) {
        // display: none;
        padding: 0.75rem 0;
        margin-right: 0;
        border-radius: 1rem;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        position: fixed;
        left: 50%;
        bottom: 1.5rem;
        transform: translateX(-50%);
        background-color: hsla(0, 0%, 100%, 0.9);
        backdrop-filter: saturate(60%) blur(20px);
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

        width: calc(100% - 3rem);
    }

    header .routesty > div:nth-child(1) > a {
        margin-left: 0;
        padding-bottom: 0;
        white-space: nowrap;
    }

    header .routesty {
        margin-top: inherit;
        flex-direction: column-reverse;
    }

    .select {
        width: fit-content;
    }
}
</style>
