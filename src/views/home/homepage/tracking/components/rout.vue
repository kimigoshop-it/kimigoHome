<template>
    <div class="w">
        <div>
            <svg-icon name="maorigin" width="1.125rem" height="1.25rem" />
            {{ $t("home.current_location") }}
            <p @click="routeclick">{{ $t("home.home") }}</p>
            &nbsp;>&nbsp;
            <span>{{ $t("home.order_track") }}</span>
            <img :src="kache" alt="" />
        </div>
        <div>
            <n-input :allow-input="noSideSpace" v-model:value="officialWebsiteOrders" clearable
                :onafterpaste="officialWebsiteOrders = officialWebsiteOrders.replace(/，/g, ',')"
                :οnkeyup="officialWebsiteOrders = officialWebsiteOrders.replace(/，/g, ',')"
                 @keydown.enter="cliSearch">
                <template #suffix>
                    <n-button
                        type="info"
                        @click="cliSearch"
                        color="#606AFF"
                        :disabled="!officialWebsiteOrders"
                    >
                        <div
                            :style="`transform: translateX(${
                                left + 'px'
                            }) translateY(${-left + 'px'});`"
                            style="transition: all 0.5s"
                        >
                            <svg-icon
                                name="search"
                                width="1.375rem"
                                height="1.375rem"
                            />
                            {{ $t("home.query") }}
                        </div>
                    </n-button>
                </template>
            </n-input>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch, defineProps } from "vue";
import kache from "@/assets/image/kache.png";
import { useRouter } from "vue-router";
import BusClass from "@/utils/eventBus";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const props = defineProps({
    val: {
        type: String as any,
        default: "",
    },
});
// const message = useMessage()
const router = useRouter();
const officialWebsiteOrders = ref("") as any;
let left = ref(0);
let placeholder = t("home.placeholder");

const cliSearch = async () => {
    if (officialWebsiteOrders) {
        if (
            officialWebsiteOrders.value.charAt(
                officialWebsiteOrders.value.length - 1
            ) === ","
        ) {
            officialWebsiteOrders.value = officialWebsiteOrders.value.slice(
                0,
                -1
            );
        }
        BusClass.emit("on-click", officialWebsiteOrders.value);
        left.value = -5;
        setTimeout(() => {
            left.value = 0;
        }, 200);
    }
};

const routeclick = () => {
    router.push({
        path: "/home/index",
    });
};

//
const noSideSpace = (value: string) => {
    return !value.startsWith(" ") && !value.endsWith(" ");
};
watch(
    () => props.val,
    (val) => {
        officialWebsiteOrders.value = val;
    },
    { immediate: true }
);
</script>
<style lang="scss" scoped>
:deep(.n-base-clear__clear) {
    width: 40px !important;
    height: 40px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
}

.w {
    padding: 1.375rem 0 1.75rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    > :nth-child(1) {
        font-feature-settings: "kern" on;
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        color: #999999;
        position: relative;
        cursor: pointer;

        svg {
            margin-right: 0.25rem;
        }

        span {
            color: #3d3d3d;
        }

        > img {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 0;
        }

        > p:hover {
            color: #606aff;
        }
    }

    > :nth-child(2) {
        height: 3.375rem;

        .n-button {
            width: 7.1875rem;
            font-family: 思源黑体;
            font-size: 1rem;
            line-height: 22px;
            font-feature-settings: "kern" on;
            color: #bfbfbf;
        }
    }
}

:deep(.n-button) {
    height: 3.375rem;
    color: #fff !important;
}

:deep(.n-input) {
    background: #f6f6f6;
    height: 3.375rem;
    font-family: 思源黑体;
    font-size: 1rem;
    font-feature-settings: "kern" on;
    color: #bfbfbf;
    border-radius: 0.5rem;
    --n-border-hover: none !important;
    --n-border-focus: none !important;
    --n-box-shadow-focus: none !important;
    --n-border: none !important;

    .n-input__input-el {
        height: 3.375rem;
    }
}

:deep(.n-input--focus) {
    background-color: #f6f6f6 !important;
}

:deep(.n-input-wrapper) {
    padding-right: 0 !important;
}

:deep(.n-base-clear) {
    .n-base-clear__clear {
        font-size: 20px;
    }
}
</style>
