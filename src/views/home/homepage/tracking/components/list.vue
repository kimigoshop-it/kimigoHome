<!-- @format -->

<template>
  <div class="boxconten">
    <div class="w warningsty" v-if="remarkRef">
    <svg-icon name="exclamation-circle"/>
    <p>{{ remarkRef }}</p>
    </div>
    <div v-if="!state" class="nosearchsty">
      <img :src="nosearch" alt=""/>
      <p>{{ $t('home.nosearchsty') }}</p>
    </div>
    <guijim ref="guijimRef" :val="inputValue" v-if="inputValue && inputValue.startsWith('KR')" @updateListVueState="handleZUpdateState" @updateRemark="handleRemark"></guijim>
    <guiji ref="guijiRef" :val="inputValue" v-if="inputValue && !inputValue.startsWith('KR')" @updateListVueState="handleNiUpdateState" @updateRemark="handleRemark"></guiji>
    <div class="doottit" v-if="state">
      <div>
        <div></div>
        <span>{{ $t('home.track.no_more') }}</span>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, reactive, getCurrentInstance, watch} from "vue";
import {QueryOfficialWebsiteCustomerOrderDetail} from "@/service";
import BusClass from "@/utils/eventBus";
import nosearch from "@/assets/image/gis/nosearch.png";
import dottedline from "@/assets/image/gis/dottedline.png";
import guiji from "@/views/home/homepage/tracking/components/guiji.vue";
import guijim from "@/views/home/homepage/tracking/components/guijim.vue";
import {useAppStore} from "~/src/store/app";
import {useI18n} from "vue-i18n";
import LanguageChange from "~/src/components/lang/LanguageChange.vue";
import { LanguageServiceMode } from "typescript";
import { useRouter, useRoute } from "vue-router";
const app = useAppStore();

const {t} = useI18n();
const lang = computed(() => app.lang); // 获取当前语言
const router = useRouter(); // 获取路由实例
const route = useRoute(); // 获取当前路由


const langstring = (() => {
  switch (lang.value) {
    case 0:
      return "001";//中文
    case 1:
      return "003";//俄文
    case 2:
      return "004";//哈文
    case 3:
      return "005";//MN文
    case 4:
      return "002";//英文
    default:
      return "unknown"; // 默认值
  }
})();

console.log("打印文类====",langstring);

// 处理回传的数据
const handleZUpdateState = (data: any) => {
  console.log("接收到 guijim 的数据：", data);
  state.value = data;
};
const handleRemark = (remark: any) => {
  console.log("接收到 guijim  remark 的数据：", remark);
  remarkRef.value = remark;
  // 在这里处理回传的数据，例如更新列表
};

// 处理回传的数据
const handleNiUpdateState = (data: any) => {
  console.log("接收到 guijim 的数据：", data);
  state.value = data;
  // 在这里处理回传的数据，例如更新列表
};

const props = defineProps({
  val: {
    type: String as any,
    default: "",
  },
});
const tabdata = ref(-1);
const options = ref([
  {
    label: "已下单",
    value: 0,
  },
  {
    label: "已收件",
    value: 1,
  },
  {
    label: "运输中",
    value: 2,
  },
  {
    label: "待取件",
    value: 3,
  },
  {
    label: "已取件",
    value: 4,
  },
  {
    label: "已下单",
    value: 5,
  },
  {
    label: "已取消",
    value: 6,
  },
  {
    label: "已拒收",
    value: 7,
  },
]);
const proxy = getCurrentInstance()?.proxy as any;
const unfoldclick = (index: number) => {
  lists.value.data[index].show = !lists.value.data[index].show;
};
const state = ref(false);
const lists = ref([]) as any;
let remarkRef = ref("");
const inputValue = ref(""); // 输入框绑定的值
// 初始化 inputValue
// 修改初始化 inputValue 的逻辑，确保始终是字符串
const inputQuery = route.query.input;
inputValue.value = typeof inputQuery === 'string' ? inputQuery : (inputQuery?.[0] || "");


const guijiRef = ref<InstanceType<typeof guiji> | null>(null);
const guijimRef = ref<InstanceType<typeof guijim> | null>(null);

//搜索按钮点击事件
BusClass.on("on-click", async (flag: string) => {
  //判断输入内容是否以“KR”开头
  console.log("flag======",flag);
  if(flag.startsWith('KR')){
    guijimRef.value?.getdata(flag);
  } else {
    guijiRef.value?.getdata(flag);
  }
  inputValue.value = flag;   
  console.log("BusClass.on======");
  // getdata(flag, tabdata.value);
});

watch(
    () => props.val,
    (val) => {
      inputValue.value = val;
    },
    {immediate: true}
);

// 监听输入框内容的变化
watch(
  () => inputValue.value,
  (newValue, oldValue) => {
    console.log("输入框内容变化：", oldValue, "=>", newValue);
    // 在这里处理输入框内容变化的逻辑
    if(newValue.startsWith('KR')){
      guijimRef.value?.getdata(newValue);
    } else {
      guijiRef.value?.getdata(newValue);
    }
     // 更新地址栏参数
     router.push({
      path: router.currentRoute.value.path, // 保持当前路径
      query: { ...router.currentRoute.value.query, val: newValue }, // 更新 query 参数
    });
    
  }
);

</script>
<style lang="scss" scoped>
.boxconten {
  height: 100%;
}

.doottit {
  position: absolute;
  bottom: 22px;

  > div {
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      width: 100px;
      height: 1px;
      background: #b3b3b3;
      margin: 0 10px;
    }

    span {
      font-family: 思源黑体;
      font-size: 14px;
      font-weight: normal;
      line-height: normal;
      font-feature-settings: "kern" on;
      color: #7f7f7f;
    }
  }
}

.nosearchsty {
  border-radius: 0.75rem;
  background: #ffffff;
  box-shadow: 0rem 0.0625rem 0.625rem 0rem rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Source Han Sans CN;
  font-size: 0.875rem;
  font-weight: normal;
  color: #666666;
  padding: 4.25rem 0 13rem;

  img {
    width: 10.625rem;
    height: 10.625rem;
  }
}

.warningsty {
  height: 3rem;
  border-radius: 0.5rem;
  background: rgba(255, 209, 55, 0.1);
  box-sizing: border-box;
  border: 0.0625rem solid #f4bc00;
  margin-top: 1rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
  }
}

.guiji {
  border-radius: 0.75rem;
  box-shadow: 0rem 0.0625rem 0.625rem 0rem rgba(0, 0, 0, 0.1);
  margin-top: 1rem;

  .toptit {
    display: flex;
    align-items: center;
    padding: 0.75rem 2.5rem 0.75rem 2.0625rem;
    justify-content: space-between;
    position: relative;
    cursor: pointer;

    .postion {
      position: absolute;
      left: 0;
      width: 0.875rem;
      height: 4.75rem;
      opacity: 0.1;
      background: #4077ff;
      border-radius: 0 0.625rem 0.625rem 0;
    }

    .childone {
      display: flex;
      flex-direction: column;

      > :nth-child(1) {
        display: flex;
        align-items: center;

        span {
          display: block;
          width: 0.25rem;
          height: 1rem;
          border-radius: 1.25rem;
          background: #4077ff;
          margin-right: 0.6875rem;
        }
      }

      > :nth-child(2) {
        display: flex;
        margin-left: 1rem;
        align-items: center;
        margin-top: 4px;

        > svg {
          width: 3.625rem;
          height: 0.5rem;
        }

        span {
          font-family: Source Han Sans CN;
          font-size: 1.125rem;
          font-weight: 500;
          line-height: 1.5rem;
          font-feature-settings: "kern" on;
          color: #262626;
        }
      }
    }

    .childtwo {
      height: 5rem;
      display: inline-flex;

      > :nth-child(1) {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: flex-end;
        padding: 0.5rem 0;
        border-right: 0.0625rem solid #d9d9d9;
        padding-right: 1.75rem;

        span {
          font-family: 思源黑体;
          font-size: 0.875rem;
          font-weight: normal;
          line-height: 1.5rem;
          font-feature-settings: "kern" on;
          color: #000000;
        }
      }

      > :nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 2.5rem;

        svg {
          transform: rotate(-180deg);
        }
      }
    }
  }

  .boxtrins {
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    > :nth-child(1) {
      width: 45%;
      margin: 0 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 85%;
      }
    }

    > :nth-child(2) {
      width: 55%;
      box-sizing: border-box;
      padding: 1.1875rem 1.25rem 1rem 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .statesty {
        display: flex;

        .rightsty {
          display: flex;
          flex-direction: column;

          .rightlist {
            display: flex;

            .iconsty {
              position: relative;
              width: 2.625rem;
              display: flex;
              justify-content: center;

              > svg {
                z-index: 11 !important;
                position: absolute;
                top: 0;
                left: 0;
                margin-bottom: 10px;
              }

              > img {
                width: 0.125rem;
                height: 67px;
                padding-top: 7px;
              }
            }

            > .particulars {
              display: flex;
              margin-left: 12px;
              margin-top: 10px;
              font-feature-settings: "kern" on;
              font-family: Source Han Sans CN;
              flex-direction: column;

              > div {
                font-size: 0.875rem;
                font-weight: 500;
                color: #000000;
              }

              span {
                font-size: 0.75rem;
                font-weight: normal;
                color: #8c8c8c;
              }
            }
          }
        }

        .n-button {
          height: 1.5625rem;
          font-family: Source Han Sans CN;
          font-size: 0.75rem;
          font-weight: 500;
          font-feature-settings: "kern" on;
          color: #d99038;
          margin-top: 8px;
          // text-wrap: wrap;
          // width: 8rem;
          margin-right: 0.75rem;
        }
      }
    }
  }
}

.searchdatasty {
  border-radius: 0.75rem;
  background: #ffffff;
  box-shadow: 0rem 0.0625rem 0.625rem 0rem rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  height: 28.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.aa {
  transition: all 300ms;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}

.go {
  transform: rotate(-180deg);
  transition: all 300ms;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
