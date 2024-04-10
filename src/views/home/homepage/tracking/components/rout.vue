<template>
    <div class="w">
        <div>
            <svg-icon name="maorigin" width="1.125rem" height="1.25rem" />
            当前位置：<p @click="routeclick">首页</p> &nbsp;>&nbsp;
            <span>单号追踪</span>
            <img :src="kache" alt="">
        </div>
        <div>
            <n-input :allow-input="noSideSpace" v-model:value="officialWebsiteOrders" clearable
                :onafterpaste="officialWebsiteOrders = officialWebsiteOrders.replace(/，/g, ',')"
                :οnkeyup="officialWebsiteOrders = officialWebsiteOrders.replace(/，/g, ',')"
                placeholder="请输入查询单号，一次最多输入30条，用逗号隔开" @keydown.enter="cliSearch">
                <template #suffix>
                    <n-button type="info" @click="cliSearch" color="#606AFF" :disabled="!officialWebsiteOrders">
                        <div :style="`transform: translateX(${left + 'px'
                            }) translateY(${-left + 'px'});`" style="transition: all .5s;">
                            <svg-icon name="search" width="1.375rem" height="1.375rem" />
                            查询
                        </div>
                    </n-button>
                </template>
            </n-input>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch, defineProps } from "vue";
import kache from '@/assets/image/kache.png'
import { useRouter } from 'vue-router';
import BusClass from '@/utils/eventBus'

const props = defineProps({
    val: {
        type: String as any,
        default: ''
    }
})
// const message = useMessage()
const router = useRouter();
const officialWebsiteOrders = ref('') as any
let left = ref(0)

const cliSearch = async () => {
    if (officialWebsiteOrders) {
        if (officialWebsiteOrders.value.charAt(officialWebsiteOrders.value.length - 1) === ',') {
            officialWebsiteOrders.value = officialWebsiteOrders.value.slice(0, -1);
        }
        BusClass.emit('on-click', officialWebsiteOrders.value)
        left.value = -5
        setTimeout(() => {
            left.value = 0
        }, 200);
    }

}

const routeclick = () => {
    router.push({
        path: '/home/index',
    });
}

//
const noSideSpace = (value: string) => {
    return !value.startsWith(' ') && !value.endsWith(' ')
};
watch(() => props.val,
    (val) => {
        officialWebsiteOrders.value = val
    },
    { immediate: true }
)

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

    >:nth-child(1) {
        font-feature-settings: "kern" on;
        font-size: .875rem;
        display: flex;
        align-items: center;
        color: #999999;
        position: relative;
        cursor: pointer;

        svg {
            margin-right: .25rem;
        }

        span {
            color: #3D3D3D;
        }

        >img {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 0;
        }

        >p:hover {
            color: #606AFF;
        }
    }

    >:nth-child(2) {
        height: 3.375rem;

        .n-button {
            width: 7.1875rem;
            font-family: 思源黑体;
            font-size: 1rem;
            line-height: 22px;
            font-feature-settings: "kern" on;
            color: #BFBFBF;
        }
    }
}

:deep(.n-button) {
    height: 3.375rem;
    color: #fff !important;
}

:deep(.n-input) {
    background: #F6F6F6;
    height: 3.375rem;
    font-family: 思源黑体;
    font-size: 1rem;
    font-feature-settings: "kern" on;
    color: #BFBFBF;
    border-radius: .5rem;
    --n-border-hover: none !important;
    --n-border-focus: none !important;
    --n-box-shadow-focus: none !important;
    --n-border: none !important;


    .n-input__input-el {
        height: 3.375rem;

    }
}

:deep(.n-input--focus) {
    background-color: #F6F6F6 !important;

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