<template>
  <!-- 底部无交互的一些图片搭配与组合 -->
  <div class="map" ref="mapFlag">
    <div class="content w">
      <div class="bgMap">
        <img src="@/assets/image/map.png" alt="" />
      </div>
      <div class="fjhclc">
        <img src="@/assets/image/fjhclc.png" alt="" />
      </div>
      <div class="topTitle">
        <div class="left">
          {{ t("home.pickup.Globaldelivery") }}
        </div>
        <span class="topWieth" v-if="isShow">
          <count-up :end-val="60"></count-up>+
        </span>
        <div class="item1" v-else>xxx</div>

        <div class="left2">{{ t("home.pickup.state") }}</div>
        <span class="topWieth" v-if="isShow">
          <count-up :end-val="300">+</count-up>
        </span>
        <div class="item1" v-else>xxx</div>

        <div class="left3">{{ t("home.pickup.region") }}</div>
      </div>
      <div class="contentLeft">
        <div class="top">
          <div class="item1" v-if="isShow">
            <count-up :end-val="4"></count-up>大
          </div>
          <div class="item1" v-else>xxx</div>
          <div class="item2">{{ t("home.pickup.warehouse") }}</div>
        </div>
        <div class="bottom">
          <div class="item1" v-if="isShow">
            <count-up :end-val="70000"></count-up>+
          </div>
          <div class="item1" v-else>xxx</div>

          <div class="item2">{{ t("home.pickup.squaremeter") }}</div>
        </div>
      </div>
      <div class="contentRight">
        <div class="top">
          <div class="item1" v-if="isShow">
            <count-up :end-val="8000"></count-up>+
          </div>
          <div class="item1" v-else>xxx</div>

          <div class="item2">{{ t("home.pickup.serveclients") }}</div>
        </div>
        <div class="bottom">
          <div class="item1" v-if="isShow">
            <count-up :end-val="10000"></count-up>+
          </div>
          <div class="item1" v-else>xxx</div>

          <div class="item2">{{ t("home.pickup.Helpbrand") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CountUp from "vue-countup-v3";
import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";
const { t } = useI18n();
import { useIntersection } from "@/hooks/scooll.ts";

const mapFlag = ref(null);
let isShow = ref(false);
const { isIntersecting, stopObserving } = useIntersection(mapFlag, {
  threshold: 0.5,
});
watch(isIntersecting, (newValue, oldValue) => {
  isShow.value = newValue as Boolean;
});
// // 当组件进入或离开视窗时触发的逻辑
// onMounted(async () => {
//   await nextTick(); // 等待DOM更新后再执行回调函数
//   if (isIntersecting.value) {
//     console.log("组件进入视窗");
//     // 在这里添加显示的逻辑
//   } else {
//     console.log("组件离开视窗");
//     // 在这里添加隐藏的逻辑
//   }
// });

// onUnmounted(() => {
//   stopObserving();
// });
</script>

<style lang="scss" scoped>
.map {
  background: #fafafa;
  padding-top: 16.4rem;
  padding-bottom: 85px;

  .content {
    .bgMap {
      display: flex;
      justify-content: center;

      img {
        width: 58.1875rem;
        height: 413.25.8606rem;
      }
    }

    position: relative;

    .fjhclc {
      position: absolute;
      top: 106px;
      left: 302px;
      width: 496px;
      height: 292px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .topTitle {
      position: absolute;
      top: 2.5625rem;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 2.1875rem;
      display: flex;
      white-space: nowrap;
      justify-content: center;
      color: #333333;
      width: 100%;

      .left {
        height: 30px;
        margin-right: 10px;
      }

      .left2 {
        height: 30px;
        margin-left: 10px;
        margin-right: 20px;
      }

      .left3 {
        height: 30px;
        margin-left: 10px;
        margin-right: 20px;
      }

      /* 8 */
      color: #333333;

      .topWieth {
        font-family: Source Han Sans CN;
        font-size: 36px;
        font-weight: 500;
        height: 30px;
        line-height: 30px;
        text-align: center;
        display: flex;
        align-items: center;
        letter-spacing: 0em;

        /* 60+ */
        color: #606aff;
        vertical-align: middle;
      }
    }

    .contentLeft {
      position: absolute;
      top: 152px;
      right: 880px;
      text-align: right;

      .item1 {
        font-family: Source Han Sans CN;
        font-size: 24px;
        font-weight: 700;
        line-height: 24px;
        display: flex;
        justify-content: flex-end;
        letter-spacing: 0em;
        margin-bottom: 7px;
        color: #5358a5;
      }

      .item2 {
        font-family: Source Han Sans CN;
        font-size: 14px;
        line-height: 24px;

        color: #7f7f7f;
      }

      .bottom {
        margin-top: 74px;
      }
    }

    .contentRight {
      position: absolute;
      top: 152px;
      width: 11rem;
      right: 103px;
      text-align: left;

      .item1 {
        font-family: Source Han Sans CN;
        font-size: 24px;
        font-weight: 700;
        line-height: 24px;
        display: flex;
        letter-spacing: 0em;
        margin-bottom: 7px;
        color: #5358a5;
      }

      .item2 {
        font-family: Source Han Sans CN;
        font-size: 14px;
        line-height: 24px;

        color: #7f7f7f;
      }

      .bottom {
        margin-top: 74px;
      }
    }
  }
}
</style>
