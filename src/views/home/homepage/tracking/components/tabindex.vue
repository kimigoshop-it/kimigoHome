<template>
    <div class="box">
        <div v-for="item in tablist" :key="item.id" @click="clickactive(item)" :class="active === item.id ? 'checked' : ''">
            <div class="aa"></div>
            <p>{{$t('home.track.tab_'+item.id)}}<span>({{ item.num }})</span></p>
            <img :src="amplifying" alt="">
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, defineProps, watch, defineEmits } from "vue";
import amplifying from "@/assets/image/amplifying.png";
import BusClass from '@/utils/eventBus'
import { QueryOfficialWebsiteCustomerOrderCount } from '@/service';

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const props = defineProps({
    val: {
        type: String as any,
        default: ''
    }
})
const emits = defineEmits(['proptab'])
const obj = ref('')
const active = ref(1)
const tablist = ref([
    { name: '全部', id: 1, num: 0, state: -1 },
    { name: '已下单', id: 2, num: 0, state: 5 },
    { name: '已收件', id: 3, num: 0, state: 1 },
    { name: '运输中', id: 4, num: 0, state: 2 },
    { name: '待取件', id: 5, num: 0, state: 3 },
    { name: '已取件', id: 6, num: 0, state: 4 },
    { name: '已取消', id: 7, num: 0, state: 6 },
    { name: '已拒收', id: 8, num: 0, state: 7 },
])
const getdata = async (val: string) => {
    obj.value = val
    const { data } = await QueryOfficialWebsiteCustomerOrderCount({ officialWebsiteOrders: val, pageIndex: 1, pageSize: 30 })
    tablist.value[1].num = data.data.orderPlaced
    tablist.value[2].num = data.data.received
    tablist.value[3].num = data.data.inTransit
    tablist.value[4].num = data.data.awaitingPickup
    tablist.value[5].num = data.data.pickedUp
    tablist.value[6].num = data.data.cancel
    tablist.value[0].num = 0
    for (let key in data.data) {
        tablist.value[0].num = Number(tablist.value[0].num) + Number(data.data[key])
    }
}

BusClass.on('on-click', async (flag: string) => {
    getdata(flag)
})

const clickactive = (val: any) => {
    active.value = val.id
    console.log(111, props.val);
    console.log(111, obj.value);
    BusClass.emit('on-tabclick', val.state, obj.value)
}

watch(() => props.val,
    (val) => {
        getdata(val)
    },
    { immediate: true, deep: true }
)


</script>
<style lang="scss" scoped>
.box {
    display: flex;
    align-items: center;
    cursor: pointer;


    >div {
        box-sizing: border-box;
        width: calc(100% / 5);
        border-radius: 8px;
        height: 62px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Source Han Sans CN;
        font-size: 14px;
        font-weight: normal;
        text-align: center;
        font-feature-settings: "kern" on;
        color: #333333;
        overflow: hidden;
        position: relative;

        .aa {
            width: 0;
            height: 5px;
            background: #606AFF;
            position: absolute;
            left: 50%;
            top: 0;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: all .5s ease-out;
        }

        img {
            opacity: 0;
            position: absolute;
            left: -16px;
            bottom: -20px;
        }
    }

    .checked>div:first-child {
        transform-origin: left center;
    }

    .checked>div:last-child {
        transform-origin: right center;
    }

    .checked {
        background: #f6f6ff;
        font-weight: bold;
        color: #606AFF;

        >img {
            opacity: 1;
        }

        >.aa {
            opacity: 1;
            width: 100%;
        }

    }
}
</style>