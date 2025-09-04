<template>
    <div class="boxconten">

      <div class="guiji" v-for="(item, index) in lists.data" :key="index">
        <div
            class="toptit"
            :style="{ borderBottom: !item.show ? '' : '.0625rem solid #e7e7e7' }"
            @click="unfoldclick(index)"
        >
          <div class="postion"></div>
          <div class="childone">
            <div><span></span>{{ item.kyInStorageNumber }}</div>
            <div v-if="item.customerCode != '10008' &&item.customerCode != '10009' && item.customerCode != '10004' && item.customerCode != '10010'">
              <span>{{ $t('home.ky_in_storage') }}</span>
              <svg-icon
                  name="arrowhead"
                  width="3.625rem"
                  height=".5rem"
                  style="margin: 0 1.25rem"
              />
              <span>{{ $t('home.terminal_in_storage') }}</span>
            </div>
            <div v-if="item.customerCode == '10004'">
              <span>KZ</span>
              <svg-icon
                  name="arrowhead"
                  width="3.625rem"
                  height=".5rem"
                  style="margin: 0 1.25rem"
              />
              <span>CN</span>
            </div>
            <div v-if="item.customerCode =='10008'">
              <span>MT</span>
              <svg-icon
                  name="arrowhead"
                  width="3.625rem"
                  height=".5rem"
                  style="margin: 0 1.25rem"
              />
              <span>CN</span>
            </div>
            <div v-if="item.customerCode =='10009'">
              <span>MN</span>
              <svg-icon
                  name="arrowhead"
                  width="3.625rem"
                  height=".5rem"
                  style="margin: 0 1.25rem"
              />
              <span>CN</span>
            </div>
            <div v-if="item.customerCode =='10010'">
              <span>KG</span>
              <svg-icon
                  name="arrowhead"
                  width="3.625rem"
                  height=".5rem"
                  style="margin: 0 1.25rem"
              />
              <span>CN</span>
            </div>
          </div>
          <div class="childtwo">
            <div>
              <n-button
                  :style="{ opacity: item.officialWebsiteOrder === 4 ? '1' : '0' }"
                  strong
                  secondary
                  type="warning"
                  size="small"
                  color="#fff"
                  style="
                  background: linear-gradient(270deg, #faad14 0%, #ff7300 97%);
                "
              >
                {{ $t('home.track.picked_up') }}
              </n-button>
              <span
                  :style="{ opacity: item.officialWebsiteOrder === 4 ? '1' : '0' }"
              >{{ item.pickUpDatetime }}</span
              >
            </div>
            <div :class="[item.show ? 'go' : 'aa']">
              <svg-icon name="doubleright1"/>
            </div>
          </div>
        </div>
        <div
            class="boxtrins"
            :style="{
            height: !item.show ? '0px' : '22.5rem',
            transition: 'all .5s',
          }"
        >
          <div>
            <img :src="item.officialWebsiteUrl" v-if="item.customerCode != '10009' && item.customerCode != '10008'  && item.officialWebsiteUrl !== null"/>
          </div>
          <div>
            <n-scrollbar style="max-height: 306px">
              <div
                  class="statesty"
                  v-for="(
                  childitema, indexitem
                ) in item.officialWebsiteRoutingEntities"
                  :key="childitema"
              >
                <n-button secondary type="warning">
                  <!-- {{ options[childitema.officialWebsiteOrderStatus].label }} -->
                  {{ $t('home.track.options_type_' + options[childitema.officialWebsiteOrderStatus].value) }}
                </n-button>
                <div class="rightsty">
                  <div
                      class="rightlist"
                      v-for="(
                      childite, index
                    ) in childitema.customerOrderRoutingEntities"
                      :key="childite"
                  >
                    <div class="iconsty">
                      <!-- 经过 -->
                      <svg-icon
                          :name="`goby4`"
                          style="width: 20px; height: 20px; left: 10px; top: 10px"
                          v-if="index !== 0"
                      />
                      <!-- 已过大图标 -->
                      <svg-icon
                          :name="`goby0`"
                          style="width: 20px; height: 20px; left: 10px; top: 10px"
                          v-if="
                          index === 0 &&
                          childitema.officialWebsiteOrderStatus === 0
                        "
                      />
                      <svg-icon
                          :name="`goby1`"
                          style="width: 20px; height: 20px; left: 10px; top: 10px"
                          v-if="
                          index === 0 &&
                          childitema.officialWebsiteOrderStatus === 1
                        "
                      />
                      <svg-icon
                          :name="`goby2`"
                          style="width: 20px; height: 20px; left: 10px; top: 10px"
                          v-if="
                          index === 0 &&
                          childitema.officialWebsiteOrderStatus === 2
                        "
                      />
                      <svg-icon
                          :name="`goby3`"
                          style="width: 20px; height: 20px; left: 10px; top: 10px"
                          v-if="
                          index === 0 &&
                          childitema.officialWebsiteOrderStatus === 3
                        "
                      />
                      <!-- 最后一个高亮 -->
                      <svg-icon
                          :name="`highlight${childitema.officialWebsiteOrderStatus}`"
                          v-if="index === 0 && indexitem === 0"
                          style="width: 20px; height: 20px; left: 10px; top: 10px"
                      />
                      <!-- 已拒收 -->
                      <svg-icon
                          :name="`highlight6`"
                          style="width: 20px; height: 20px; left: 10px; top: 10px"
                          v-if="childitema.officialWebsiteOrderStatus === 7"
                      />
                      <!-- 已取消 -->
                      <svg-icon
                          :name="`highlight5`"
                          style="width: 20px; height: 20px; left: 10px; top: 10px"
                          v-if="childitema.officialWebsiteOrderStatus === 6"
                      />
                      <!-- 已取件 -->
                      <svg-icon
                          :name="`highlight4`"
                          style="width: 20px; height: 20px; left: 10px; top: 10px"
                          v-if="childitema.officialWebsiteOrderStatus === 4"
                      />
                      <img
                          :src="dottedline"
                          alt=""
                          v-if="childitema.officialWebsiteOrderStatus !== 0"
                      />
                    </div>
                    <div class="particulars">
                      <div v-if="lang==0">{{ childite.customerRoutingNodeChineseName }}</div>
                      <!-- <div v-if="lang==1">{{ childite.customerRoutingNodeRussiaName }}</div> -->
                      <!-- <div v-if="lang==2">{{ childite.customerRoutingNodeKazakhstanName }}</div> -->
                      <!-- <div v-if="lang==3">{{ childite.customerRoutingNodeMongoliaName }}</div> -->
                      <div v-if="lang==4">{{ childite.customerRoutingNodeEnglishName }}</div>
                      <div v-if="lang==1">{{ childite.customerRoutingNodeLanguageName }}</div>
                      <div v-if="lang==2">{{ childite.customerRoutingNodeLanguageName }}</div>
                      <div v-if="lang==3">{{ childite.customerRoutingNodeLanguageName }}</div>
                      <span>{{ childite.operateDatetime }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </n-scrollbar>
          </div>
        </div>
      </div>

    </div>
  </template>

<script setup lang="ts">
import {ref, reactive, getCurrentInstance, watch} from "vue";
import {QueryHomeIndexReturnOfficialCustomerOrderDetail} from "@/service";
// import BusClass from "@/utils/eventBus";
import dottedline from "@/assets/image/gis/dottedline.png";
import { defineEmits } from "vue";
import {useAppStore} from "~/src/store/app";
import nosearch from "@/assets/image/gis/nosearch.png";

const app = useAppStore();

import {useI18n} from "vue-i18n";

const {t} = useI18n();

const lang = computed(() => {
  return app.lang
})

// 定义事件
const emit = defineEmits(["updateListVueState","updateRemark"]);

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
const remark = ref("");

const getdata = async (strval: string) => {
  const loading = proxy?.$loading({
    lock: true,
    text: t('home.track.tnquiring'),
    background: "rgba(0, 0, 0, 0.9)",
  });

  try {
    const { data } = await QueryHomeIndexReturnOfficialCustomerOrderDetail({
      officialWebsiteOrders: strval,
      LanguageCode: langstring,
      pageIndex: 1,
      pageSize: 30,
    });

    console.log("打印数据======", data);

    // 检查 data 和 data.data 是否存在
    if (data && data.data && data.data.data) {
    //   state.value = true;
      emit('updateListVueState', true);
      data.data.data.forEach((item: any) => {
        item.officialWebsiteRoutingEntities.push({
          officialWebsiteOrderStatus: 0,
          customerOrderRoutingEntities: [
          {
              customerRoutingNodeChineseName: "客户下单成功",
              customerRoutingNodeLanguageName: item.customerCode === "10008" ? "Order placed successfully" : item.customerCode === "10009" ?  "Захиалга амжилттай" : item.customerCode === "10004"  ? "Тапсырыс сәтті орналастырылды" : "Order placed successfully",
              customerRoutingNodeRussiaName: "Клиент успешно разместил заказ",
              customerRoutingNodeKazakhstanName: "Тапсырыс сәтті орналастырылды",
              customerRoutingNodeEnglishName: "Order placed successfully",
              customerRoutingNodeMongoliaName: "Захиалга амжилттай",
            },
          ],
        });

        if (item.officialWebsiteOrder === 5) {
          item.officialWebsiteUrl =
            "https://newkybuket.oss-cn-hangzhou.aliyuncs.com/exampledir/国内仓-1697472000.png";
        }

        // 拒收
        // if (item.officialWebsiteOrder === 7) {
        //   item.officialWebsiteUrl =
        //     "https://newkybuket.oss-cn-hangzhou.aliyuncs.com/exampledir/包裹店-1697472000.png";
        //   item.officialWebsiteRoutingEntities.unshift({
        //     officialWebsiteOrderStatus: item.officialWebsiteOrder,
        //     customerOrderRoutingEntities: [
        //       {
        //         customerRoutingNodeChineseName: t('home.track.order_was_rejected'),
        //         customerRoutingNodeLanguageName: t('home.track.order_was_rejected'),
        //         customerRoutingNodeRussiaName: t('home.track.order_was_rejected'),
        //         customerRoutingNodeKazakhstanName: t('home.track.order_was_rejected'),
        //         customerRoutingNodeEnglishName: t('home.track.order_was_rejected'),
        //         customerRoutingNodeMongoliaName: t('home.track.order_was_rejected'),
        //         operateDatetime: item.rejectDatetime,
        //       },
        //     ],
        //   });
        // } 
        if (item.officialWebsiteOrder === 6) {
          // 取消
          item.officialWebsiteUrl =
            "https://newkybuket.oss-cn-hangzhou.aliyuncs.com/exampledir/国内仓-1697472000.png";
          item.officialWebsiteRoutingEntities.unshift({
            officialWebsiteOrderStatus: item.officialWebsiteOrder,
            customerOrderRoutingEntities: [
              {
                customerRoutingNodeChineseName: t('home.track.order_was_cancelled'),
                customerRoutingNodeLanguageName: t('home.track.order_was_cancelled'),
                customerRoutingNodeRussiaName: t('home.track.order_was_cancelled'),
                customerRoutingNodeKazakhstanName: t('home.track.order_was_cancelled'),
                customerRoutingNodeEnglishName: t('home.track.order_was_cancelled'),
                customerRoutingNodeMongoliaName: t('home.track.order_was_cancelled'),
                operateDatetime: item.cancelTime,
              },
            ],
          });
        }
        item.show = false;
      });

      // 默认已下单数据
      lists.value = data.data;
      lists.value.data[0].show = true;   
      emit('updateRemark', data.data?.remark || "");
    } else {
      // 如果 data.data 不存在
      lists.value = [];
      //   state.value = false;
      emit('updateListVueState', false);
      emit('updateRemark', data.data?.remark || "");
    }
  } catch (error) {
    console.error("获取数据失败：", error);
    lists.value = [];
    emit('updateListVueState', false);

    // state.value = false;
  } finally {
    loading.close();
  }
};

watch(
    () => props.val,
    (val) => {
      getdata(val);
    },
    {immediate: true}
);

defineExpose({ getdata }); 
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
  background: #ffffff;
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

    // > :nth-child(1) {
    //   width: 45%;
    //   margin: 0 1rem;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;

    //   img {
    //     width: 100%;
    //     height: 85%;
    //   }
    // }

    > :nth-child(2) {
      width: 100%;
      box-sizing: border-box;
      padding: 1.1875rem 1.25rem 1rem 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .statesty {
        display: flex;
        justify-content: left;

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
              margin-left: 32px;
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
          text-align:right;
          text-wrap: wrap;
          width: 15rem;
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