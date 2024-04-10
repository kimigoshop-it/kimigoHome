<!-- @format -->

<template>
  <!-- 底部无交互的一些图片搭配与组合 -->
  <div class="">
    <div class="bktZj" id="jjfa">
      <div class="ysfw">
        <div class="bg"><img src="@/assets/image/ysfw.png" alt="" /></div>
        <div class="topTitle">
          <div class="logof">
            <img src="@/assets/image/logof.png" alt="" />
          </div>
          <div class="title">
            {{ t("home.pickup.Dominantservice") }}
          </div>
          <div class="titleInglish">Advantage Of Service</div>
        </div>
        <div class="items w">
          <div class="itemBktZj">
            <div class="image">
              <img src="@/assets/image/kfys.png" alt="" />
            </div>
            <div class="title">
              <span
                >{{ t("home.pickup.Warehouseadvantage") }}
                <div class="hoversty"></div>
              </span>
            </div>
            <div class="content">
              {{ t("home.pickup.Warehouseadvantagetit") }}
            </div>
          </div>
          <div class="itemBktZj">
            <div class="image">
              <img src="@/assets/image/znhxt.png" alt="" />
            </div>
            <div class="title">
              <span
                >{{ t("home.pickup.intelligentize") }}
                <div class="hoversty"></div>
              </span>
            </div>
            <div class="content">
              {{ t("home.pickup.intelligentizetit") }}
            </div>
          </div>
          <div class="itemBktZj">
            <div class="image">
              <img src="@/assets/image/dzfw.png" alt="" />
            </div>
            <div class="title">
              <span
                >{{ t("home.pickup.Multipleservices") }}
                <div class="hoversty"></div>
              </span>
            </div>
            <div class="content">
              {{ t("home.pickup.Multipleservicestit") }}
            </div>
          </div>
        </div>
      </div>
      <mapFlag />
      <div class="item w" id="gywm">
        <div class="image">
          <img src="@/assets/image/zjbkt.png" alt="" />
        </div>
        <div class="content">
          <div class="top">
            <div class="title">{{ t("home.pickup.walkintobkt") }}</div>
            <!-- <div class="readMore">
              <span class="ckgd">{{ t("home.pickup.viewmodel") }}</span>
              <svg-icon name="ckgd" />
            </div> -->
          </div>
          <div class="contentTxt">
            {{ t("home.pickup.details") }}
          </div>
          <div class="icons">
            <div class="item">
              <div class="top"><svg-icon name="aq" /></div>
              <div class="title">{{ t("home.pickup.safe") }}</div>
            </div>
            <div class="item">
              <div class="top"><svg-icon name="pz" /></div>
              <div class="title">{{ t("home.pickup.quality") }}</div>
            </div>
            <div class="item">
              <div class="top"><svg-icon name="sh" /></div>
              <div class="title">{{ t("home.pickup.materialbenefit") }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="item2 w">
        <div class="content">
          <div class="top">
            <div class="title">{{ t("home.pickup.Dedicatedcustomer") }}</div>
            <div class="readMore"></div>
          </div>
          <div class="contentTxt">
            {{ t("home.pickup.bazaartit") }}
          </div>
          <div class="icons">
            <div class="item">
              <div class="top"><svg-icon name="zs" /></div>
              <div class="title">{{ t("home.pickup.exclusive") }}</div>
            </div>
            <div class="item">
              <div class="top"><svg-icon name="qth" /></div>
              <div class="title">{{ t("home.pickup.allweather") }}</div>
            </div>
            <div class="item">
              <div class="top"><svg-icon name="jz" /></div>
              <div class="title">{{ t("home.pickup.accurate") }}</div>
            </div>
          </div>
        </div>
        <div class="image">
          <img src="@/assets/image/zskf.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import mapFlag from "./utilsItem/mapFlag.vue";
</script>

<style lang="scss" scoped>
.bktZj {
  height: 100%;

  .ysfw {
    // margin-bottom: 173px;
    .bg {
      img {
        width: 100%;
        height: 330px;
      }
    }

    position: relative;

    .items {
      position: absolute;
      width: 100%;
      top: 175px;
      display: flex;
      justify-content: center;

      .itemBktZj {
        cursor: pointer;
        /* 矩形 91 */
        margin: 0 25px;
        width: 350px;
        // height: 285px;
        border-radius: 12px;
        opacity: 1;

        background: #ffffff;

        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.08);

        box-shadow: 0rem 0rem 20px 0rem rgba(0, 0, 0, 0.08);

        .image {
          width: 314px;
          height: 137px;
          margin: 18px;
          overflow: hidden;

          img {
            /* 矩形 92 */
            width: 314px;
            height: 137px;
            opacity: 1;
            transition: transform 0.3s ease-in-out;
          }
        }

        .title {
          /* 库房优势 */
          width: 100%;
          z-index: 111;
          font-size: 16px;
          font-weight: 700;
          line-height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          letter-spacing: 0em;
          color: #3d3d3d;

          span {
            .hoversty {
              width: 0;
              height: 0;
            }
          }
        }

        .content {
          /* 海关监管库总占地面积近70.000平方米，具备独立海关监管功能。为进出口商品提供快捷出境通道。 */

          width: 290px;
          // height: 40px;
          opacity: 1;
          margin-left: 30px;
          margin-top: 8px;
          margin-bottom: 32px;
          font-family: Source Han Sans CN;
          font-size: 12px;
          font-weight: normal;
          line-height: 20px;
          text-align: center;
          display: flex;
          align-items: center;
          letter-spacing: 0em;

          color: #7f7f7f;
        }
      }

      .itemBktZj:hover {
        .image {
          img {
            /* 矩形 92 */
            transform: scale(1.2);
          }
        }

        .content {
          color: #000;
        }

        .title {
          color: #606aff;

          span {
            position: relative;
            z-index: 1;

            .hoversty {
              width: 100%;
              position: absolute;
              bottom: 7px;
              height: 8px;
              opacity: 0.5;
              z-index: -1;
              background: #ffd137;
              padding: 0 0.375rem;
              left: -6px;
            }
          }
        }
      }
    }

    .topTitle {
      position: absolute;
      width: 100%;
      top: 47px;
      display: flex;
      justify-content: center;

      .logof {
        opacity: 0.3;

        img {
          width: 208px;
        }
      }

      .title {
        position: absolute;
        font-family: Source Han Sans CN;
        font-size: 28px;
        font-weight: bold;
        line-height: 4px;
        text-align: center;
        display: flex;
        align-items: center;
        letter-spacing: 0em;
        color: #ffffff;
        margin-top: 1.425rem;
      }

      .titleInglish {
        /* Advantage Of Service */

        position: absolute;
        top: 62px;

        opacity: 1;

        font-size: 14px;
        font-weight: normal;
        line-height: 24px;
        text-align: center;
        display: flex;
        align-items: center;
        letter-spacing: 0.5em;

        color: #ffffff;
      }
    }

    // background: url("@/assets/image/ysfw.png") no-repeat center center fixed;
    // background-size: cover;
  }

  > .item {
    display: flex;
    margin-top: 3.75rem;

    .image {
      img {
        /* 矩形 108 */

        width: 520px;
        height: 324px;
        border-radius: 12px;
        opacity: 1;
      }
    }

    .content {
      // width: 520px;
      margin-left: 60px;

      .top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-content: center;

        .title {
          height: 30px;
          opacity: 1;
          font-size: 24px;
          font-weight: bold;
          line-height: 30px;
          text-align: center;
          display: flex;
          align-items: center;
          letter-spacing: 0em;

          color: #4d4d4d;
        }

        .readMore {
          .ckgd {
            margin-right: 11px;
          }

          /* 查看更多 */
          .svg-icon {
            width: 24px !important;
            height: 24px !important;
            transition: all 0.5s;
          }

          // width: 128px;
          height: 30px;
          opacity: 1;

          font-size: 12px;
          font-weight: normal;
          line-height: 31.6px;
          text-align: right;
          display: flex;
          align-items: center;
          letter-spacing: 0em;
          cursor: pointer;
          /* 4 */
          color: #999999;
          transition: all 0.5s;
        }

        .readMore:hover {
          /* 查看更多 */
          /* 4 */
          color: #454545;

          .svg-icon {
            width: 24.8px !important;
            height: 24.8px !important;
          }
        }
      }

      .contentTxt {
        margin-top: 40px;

        width: 520px;
        opacity: 1;

        font-family: Source Han Sans CN;
        font-size: 14px;
        font-weight: 500;
        line-height: 30px;

        letter-spacing: 0em;

        color: #666666;

        .hx {
          color: #5358a5;
          cursor: pointer;
        }
      }

      .icons {
        margin-top: 25px;
        display: flex;

        .item {
          margin-right: 61px;
          width: 55.2px;
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          justify-content: center;
          align-items: center;

          .top {
            width: 50px;
            height: 50px;
            border: 2.76px solid #606aff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .svg-icon {
            width: 83.33% !important;
            height: 91.67% !important;
          }

          .title {
            /* 安全 */
            margin-top: 0.5rem;
            height: 28px;
            opacity: 1;
            font-size: 16px;
            font-weight: normal;
            line-height: 28px;
            text-align: center;
            display: flex;
            align-items: center;
            letter-spacing: 0em;
            color: #3641e5;
          }
        }
      }
    }
  }

  .item2 {
    margin-top: 110px;
    margin-bottom: 120px;
    display: flex;

    .image {
      margin-left: 60px;

      img {
        /* 矩形 108 */

        width: 520px;
        height: 324px;
        border-radius: 12px;
        opacity: 1;
      }
    }

    .content {
      .top {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .title {
          height: 24px;
          opacity: 1;
          font-size: 24px;
          font-weight: bold;
          line-height: 1.875rem;
          text-align: left;
          display: flex;
          align-items: center;
          letter-spacing: 0em;
          color: #4d4d4d;
        }

        .readMore {
          .ckgd {
            margin-right: 11px;
          }

          /* 查看更多 */
          .svg-icon {
            width: 24px !important;
            height: 24px !important;
            transition: all 0.5s;
          }

          // width: 128px;
          height: 30px;
          opacity: 1;

          font-size: 12px;
          font-weight: normal;
          line-height: 31.6px;
          text-align: right;
          display: flex;
          align-items: center;
          letter-spacing: 0em;
          cursor: pointer;
          /* 4 */
          color: #999999;
          transition: all 0.5s;
        }

        .readMore:hover {
          /* 查看更多 */
          /* 4 */
          color: #454545;

          .svg-icon {
            width: 24.8px !important;
            height: 24.8px !important;
          }
        }
      }

      .contentTxt {
        margin-top: 40px;

        width: 520px;
        opacity: 1;

        font-family: Source Han Sans CN;
        font-size: 14px;
        font-weight: 500;
        line-height: 30px;

        letter-spacing: 0em;

        color: #666666;

        .hx {
          color: #5358a5;
          cursor: pointer;
        }
      }

      .icons {
        margin-top: 40px;
        display: flex;

        .item {
          margin-right: 61px;
          // width: 55.2px;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-content: center;
          justify-content: center;
          align-items: center;

          .top {
            width: 50px;
            height: 50px;
            border: 2.76px solid #606aff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .svg-icon {
            width: 83.33% !important;
            height: 91.67% !important;
          }

          .title {
            /* 安全 */
            margin-top: 0.5rem;
            height: 28px;
            opacity: 1;
            font-size: 16px;
            font-weight: normal;
            line-height: 30px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 0em;
            color: #3641e5;
          }
        }
      }
    }
  }
}
</style>
