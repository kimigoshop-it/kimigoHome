<!-- @format -->

<template>
  <div class="seachbox w">
    <div class="one">
      <div
        style="height: 140px"
        @mouseenter="handleMouseEnter(1)"
        class="isShow"
      >
        <template v-if="1 !== is.isShowIndex">
          <div class="icons">
            <svg-icon name="text" />
          </div>
          <div class="content">
            {{ $t("home.pickup.singleNumberTracking") }}
          </div>
        </template>
        <div class="isShowContent" v-else>
          <div class="top">
            <div>
              <div class="left"><svg-icon name="text" /></div>
              <div class="right">
                {{ $t("home.pickup.singleNumberTracking") }}
              </div>
            </div>
            <div v-if="showval">
              <svg-icon
                name="exclamationcircle"
                style="width: 20px; height: 20px"
              />
              <div class="redstyle">{{ $t("home.pickup.ydhSearch") }}</div>
            </div>
          </div>
          <div class="bottom">
            <n-input
              style="width: 42.125rem; height: 40px"
              type="text"
              v-model:value="valdata"
              :placeholder="$t('home.pickup.singleNumberTrackingInput')"
              @keydown.enter="clicksearch"
              :onafterpaste="(valdata = valdata.replace(/，/g, ','))"
              :οnkeyup="(valdata = valdata.replace(/，/g, ','))"
            >
            </n-input>
            <n-button color="#606AFF" size="large" @click="clicksearch">
              <svg-icon style="width: 1.5rem; height: 1.5rem" name="search" />
            </n-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const valdata = ref("");
const router = useRouter();
const showval = ref(false);
let is = reactive({
  isShowIndex: 1,
});
const handleMouseEnter = (index: any) => {
  is.isShowIndex = index;
};
const options = reactive({
  test: [],
});
const formData = reactive({
  value1: null,
});
const showModal = ref<boolean>(false);

const getshow = () => {
  console.log("11111111");
  showModal.value = true;
};

const clicksearch = async () => {
  if (valdata.value) {
    router.push({
      path: "/home/index/tracking",
      query: {
        val: valdata.value,
      },
    });
  } else {
    showval.value = true;
  }
};
const clearshowmodel = () => {
  showModal.value = false;
};
</script>

<style lang="scss" scoped>
.n-input-wrapper:focus {
  outline: none;
  border: 0.125rem solid red;
}

::v-deep .n-base-selection-label {
  background: #f6f6f6;
  border-radius: 0.5rem !important;
}

::v-deep .n-button {
  border-radius: 0.5rem !important;
  width: 3.5rem;
}

::v-deep .n-base-selection {
  border-radius: 0.5rem !important;
}

::v-deep .n-input {
  border-radius: 0.5rem !important;
}

::v-deep .n-base-selection {
  &:hover {
    .n-base-selection__state-border {
      border: 1px solid #606aff;
    }
  }
}

:deep(.n-base-selection) {
  --n-border-active: 1px solid #606aff !important;
  --n-border-focus: 1px solid #606aff !important;
  --n-box-shadow-active: 0 0 0 2px rgb(96 106 255, 0.2) !important;
  --n-box-shadow-focus: 0 0 0 2px rgb(96 106 255, 0.2) !important;
  --n-border: none !important;
}

:deep(.n-input) {
  --n-border-active: 1px solid #606aff !important;
  --n-border-focus: 1px solid #606aff !important;
  --n-box-shadow-active: 0 0 0 2px rgb(96 106 255, 0.2) !important;
  --n-box-shadow-focus: 0 0 0 2px rgb(96 106 255, 0.2) !important;
}

::v-deep .n-input {
  &:hover {
    .n-input__state-border {
      border: 1px solid #606aff;
    }
  }
}

::v-deep .n-input__border {
  display: none !important;
}

::v-deep .n-input-wrapper {
  background: #f6f6f6;
  border-radius: 0.5rem !important;
  align-items: center !important;
}

.seachbox {
  position: absolute;
  bottom: -5rem;
  display: flex;
  justify-content: center;
  cursor: pointer;

  .one,
  .two {
    display: flex;

    > div {
      box-sizing: border-box;
      transition: all 0.4s;
      width: 9.375rem;
      border-radius: 0.75rem;
      background: #ffffff;
      margin-right: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.875rem;
      box-shadow: 0rem 0rem 1.25rem 0rem rgba(0, 0, 0, 0.15);

      .icons {
        > svg {
          width: 52px !important;
          height: 52px !important;
          margin-bottom: 0.5rem;
        }
      }

      .content {
        font-family: Source Han Sans CN;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.25rem;
        letter-spacing: 0em;
        padding: 0 0.625rem;
        max-width: 8.75rem;
        min-width: 8.75rem;
        word-wrap: break-word;
        text-align: center;
        color: #333333;
      }
    }
  }

  .one {
    width: 49.25rem;
  }

  .two {
    width: 19.5rem;

    :last-child {
      margin: 0;
    }
  }

  .isShow {
    width: 48.375rem !important;
    transition: all 0.4s;
    padding: 1.25rem !important;
  }

  .isShowContent {
    width: 100%;

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > div {
        display: flex;
        align-items: center;

        .redstyle {
          margin-left: 8px;
          font-family: Source Han Sans CN;
          font-size: 14px;
          font-weight: normal;
          line-height: 20px;
          text-align: right;
          display: flex;
          align-items: center;
          font-feature-settings: "kern" on;
          color: #ea0000;
        }
      }

      .left {
        .svg-icon {
          width: 1.75rem !important;
          height: 1.75rem !important;
          margin-right: 3px;
        }
      }

      // .right {
      //   margin-left: .8125rem;
      //   font-family: Source Han Sans CN;
      //   font-size: 1.25rem;
      //   font-weight: 700;
      //   line-height: 1.25rem;
      //   display: flex;
      //   align-items: center;
      //   letter-spacing: 0em;
      //   position: relative;

      //   &::after {
      //     content: "";
      //     position: absolute;
      //     bottom: .1875rem;
      //     border-radius: .625rem;
      //     width: 100%;
      //     height: 8px;
      //     background: rgba($color: #606aff, $alpha: 0.5);
      //   }
      // }
    }

    .bottom {
      margin-top: 1rem;
      display: flex;
      height: 20px;

      > div {
        margin-right: 0.5rem;
        height: 2.5rem;
      }
    }
  }
}
</style>
