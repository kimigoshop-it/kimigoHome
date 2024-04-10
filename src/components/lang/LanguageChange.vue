<template>
  <div class="w-1.25rem h-full lang">
    <selectHz v-model:model-key="app.lang" :menu-items="options" @update="updateOpention">
      <template #title>
        <div class="selectLang">
          <div>
            <div v-if="app.lang === 0">
              <svg width="42" height="48" viewBox="0 0 960 640" transform="scale(1)">
                <rect x="0" y="0" width="768" height="512" fill="red" />
                <path d="M160,79
        L112.3894,225.5304
        L237.0356,134.9696
        L82.9644,134.9696
        L207.6106,225.5304
        Z" fill="yellow" />
                <path d="M292.5602,80.4639
        L351.8765,66.8091
        L295.8626,42.9908
        L327.1787,95.1844
        L332.522,34.5518
        Z" fill="yellow" />
                <path d="M352.3216,132.5255
        L406.9683,105.7187
        L378.5148,159.5264
        L369.9069,99.2705
        L412.2884,142.9589
        Z" fill="yellow" />
                <path d="M353.2312,215.2089
        L403.7252,249.1976
        L382.8547,192.0206
        L366.1311,250.5462
        L414.0597,213.0267
        Z" fill="yellow" />
                <path d="M295.0122,268.0098
        L351.9655,289.485
        L293.2665,305.5875
        L331.2902,258.0579
        L328.4656,318.8599
        Z" fill="yellow" />
              </svg>
            </div>
            <div v-if="app.lang === 1">
              <svg t="1687664536610" class="icon" viewBox="0 0 1544 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="7950" width="30" height="36">
                <path
                  d="M10.052 1017.718H1529.09V7.538H10.052v1010.18z m1521.55 2.513v-3.77 3.77zM3.77 1024V0h1531.603v1022.744H3.769z"
                  fill="#353636" p-id="7951"></path>
                <path d="M6.282 680.991h1525.32v339.24H6.282z" fill="#E51F1F" p-id="7952"></path>
                <path d="M6.282 343.009h1525.32v339.239H6.282z" fill="#232B8C" p-id="7953"></path>
                <path d="M6.282 3.77h1525.32v339.239H6.282z" fill="#FFFFFF" p-id="7954"></path>
              </svg>
            </div>
          </div>
          <div class="xl">
            <svg-icon name="xl" />
          </div>
        </div>
      </template>
    </selectHz>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { useAppStore } from "~/src/store/app";
import selectHz from "@/components/select/selectHz.vue";
const { locale } = useI18n();
const app = useAppStore();

const options = [
  {
    label: "中文",
    key: 0,
    render: (item) =>
      `<div style="display:flex;align-items: center;">    <svg width="16" height="16" viewBox='0 0 960 640' transform="scale(1)" >
        <rect x='0' y='0' width='960' height='640' fill='red'/>
        <path d="M160,79
        L112.3894,225.5304
        L237.0356,134.9696
        L82.9644,134.9696
        L207.6106,225.5304
        Z" fill='yellow'/>
        <path d="M292.5602,80.4639
        L351.8765,66.8091
        L295.8626,42.9908
        L327.1787,95.1844
        L332.522,34.5518
        Z" fill='yellow'/>
        <path d="M352.3216,132.5255
        L406.9683,105.7187
        L378.5148,159.5264
        L369.9069,99.2705
        L412.2884,142.9589
        Z" fill='yellow'/>
        <path d="M353.2312,215.2089
        L403.7252,249.1976
        L382.8547,192.0206
        L366.1311,250.5462
        L414.0597,213.0267
        Z" fill='yellow'/>
        <path d="M295.0122,268.0098
        L351.9655,289.485
        L293.2665,305.5875
        L331.2902,258.0579
        L328.4656,318.8599
        Z" fill='yellow'/>

    </svg><div style="margin-left:.625rem">${item}</div></div>`,
  },
  // {
  //   label: 'қазақ',
  //   key: 1,
  //   render: item =>
  //     `<div style="display:flex;align-items: center;"><svg  t="1687664536610" class="icon" viewBox="0 0 1544 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7950" width="16" height="16"><path d="M10.052 1017.718H1529.09V7.538H10.052v1010.18z m1521.55 2.513v-3.77 3.77zM3.77 1024V0h1531.603v1022.744H3.769z" fill="#353636" p-id="7951"></path><path d="M6.282 680.991h1525.32v339.24H6.282z" fill="#E51F1F" p-id="7952"></path><path d="M6.282 343.009h1525.32v339.239H6.282z" fill="#232B8C" p-id="7953"></path><path d="M6.282 3.77h1525.32v339.239H6.282z" fill="#FFFFFF" p-id="7954"></path></svg><div style="margin-left:.625rem">${item}</div></div>`
  // },
  {
    label: "Русский",
    key: 1,
    render: (item) =>
      `<div style="display:flex;align-items: center;"><svg  t="1687664536610" class="icon" viewBox="0 0 1544 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7950" width="16" height="16"><path d="M10.052 1017.718H1529.09V7.538H10.052v1010.18z m1521.55 2.513v-3.77 3.77zM3.77 1024V0h1531.603v1022.744H3.769z" fill="#353636" p-id="7951"></path><path d="M6.282 680.991h1525.32v339.24H6.282z" fill="#E51F1F" p-id="7952"></path><path d="M6.282 343.009h1525.32v339.239H6.282z" fill="#232B8C" p-id="7953"></path><path d="M6.282 3.77h1525.32v339.239H6.282z" fill="#FFFFFF" p-id="7954"></path></svg><div style="margin-left:.625rem">${item}</div></div>`,
  },
];
const obj = {
  0: "zh",
  1: "rs",
  2: "kh",
};
const updateOpention = (row) => {
  locale.value = obj[row];
  localStorage.setItem("lang", obj[row]);
  app.langChange(row);
  location.reload();
};
// defineOptions({ name: "LanguageChange" });

// const { isFullscreen, toggle } = useFullscreen();
// const theme = useThemeStore();
</script>

<style scoped lang="scss">
.selectLang {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 59.2px;
  height: 36px;
  align-content: center;
  justify-content: space-between;

  >div {
    >div {
      width: 2.125rem;
      height: 1.4375rem;
      display: flex;
      align-items: center;
      justify-content: center;

      >svg {
        width: 100%;
        height: 100%;

      }

      rect {
        width: 100%;
        height: 100%;
      }
    }
  }

  .xl {
    // margin-left: 8px;
    // margin-bottom: 4.8px;

    .svg-icon {
      width: 12.8px !important;
      height: 12.8px !important;
    }
  }
}

.lang:hover {
  .xl {
    transform: rotate(180deg);
    transition: transform 0.1s ease;
  }
}

.lang {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
