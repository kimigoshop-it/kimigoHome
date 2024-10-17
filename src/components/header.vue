<template>
    <div
        class="headers"
        :class="{
            'menu-expanded': menuShow,
        }"
    >
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
                <div
                    class="menu-container"
                    :class="{
                        'menu-active': menuShow,
                    }"
                    @click="menuShow = !menuShow"
                >
                    <div class="menu-item">
                        <div class="menu-sub__item"></div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-sub__item"></div>
                    </div>
                </div>
            </div>
        </header>
        <div class="menu-wrapper">
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
    </div>
</template>

<script setup lang="ts">
import logo from "@/assets/image/logo.png";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import LanguageChange from "./lang/LanguageChange.vue";
const { t } = useI18n();
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
const menuShow = ref(false);
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
    menuShow.value = false;
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

.menu-wrapper {
    display: none;
}

@media (max-width: 999px) {
    .headers {
        height: 72px;
        transition: height 0.5s ease-in-out;
    }

    .menu-wrapper {
        height: 0px;
        overflow: hidden;
        transition: height 0.5s ease-in-out;
    }

    header {
        align-items: center;
        position: relative;
        padding-inline-start: 1.5rem;
        padding-inline-end: 1.5rem;
    }

    .menu-expanded {
        height: 100vh;
    }

    .menu-wrapper {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .menu-expanded .menu-wrapper {
        height: 100%;
    }

    .menu-wrapper .router-link-active {
        margin: 0px 24px;
        padding: 12px 0px;
    }

    .headers .headerTop img {
        margin-top: inherit;
    }

    header .routesty > div:nth-child(1) {
        display: none;
    }

    header .routesty {
        align-items: center;
        margin-top: inherit;
    }

    .select {
        width: fit-content;
    }

    .menu-container {
        width: 44px;
        height: 44px;
        position: relative;
        margin-left: 12px;
    }

    .menu-item {
        height: 20px;
        left: 13px;
        pointer-events: none;
        position: absolute;
        top: 12px;
        transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        width: 20px;
        z-index: 1;
    }

    .menu-sub__item {
        background-color: black;
        border-radius: 1px;
        display: block;
        height: 2px;
        position: absolute;
        transition: transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
            0.1008s;
        width: 20px;
        z-index: 1;
    }

    .menu-container .menu-item:first-child .menu-sub__item {
        top: 9px;
        transform: translateY(-4px);
    }

    .menu-container .menu-item:last-child .menu-sub__item {
        bottom: 9px;
        transform: translateY(4px);
    }

    .menu-container.menu-active .menu-item {
        height: 24px;
        left: 10px;
        top: 11px;
        transition: transform 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96)
            0.1008s;
        width: 24px;
    }

    .menu-container.menu-active .menu-item:first-child {
        transform: rotate(-45deg);
    }

    .menu-container.menu-active .menu-item:last-child {
        transform: rotate(45deg);
    }

    .menu-container.menu-active .menu-item .menu-sub__item {
        transform: translateY(0);
        transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        width: 24px;
    }

    .menu-container.menu-active .menu-item:first-child .menu-sub__item {
        top: 11px;
    }

    .menu-container.menu-active .menu-item:last-child .menu-sub__item {
        bottom: 11px;
    }
}
</style>
