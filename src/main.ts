import { createApp } from "vue";
import App from "./App";
import router from "@/router/index";
import { setupStore } from "./store";
import "@assets/common/ui.scss";
import i18n from "@/lang/index";
import "./rem";
import "virtual:svg-icons-register";
import SvgIcon from "./components/SvgIcon/index.vue";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import { ElLoading } from "element-plus";
import "./assets/css/myloading.css";
async function setupApp() {
  const app = createApp(App);
  app.component("SvgIcon", SvgIcon);
  // store plugin: pinias
  setupStore(app);

  app.config.globalProperties.$loading = ElLoading.service;
  app.use(router).use(i18n).mount("#app");
}
setupApp();
