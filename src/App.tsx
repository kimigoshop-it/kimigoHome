import { defineComponent, onMounted, reactive } from "vue";
import HelloWorld from "@components/HelloWorld.tsx";
import {
  useRouter,
  Router,
  useRoute,
  RouteLocationNormalizedLoaded,
} from "vue-router";
import { useGlobalEvents } from "@/composables/events";
import GlobalBackTop from "@/components/GlobalBackTop/index.vue";
import { zhCN, dateZhCN } from "naive-ui";
export default defineComponent({
  components: {
    HelloWorld,
  },
  setup(): Function {
    const router: Router = useRouter();
    const route: RouteLocationNormalizedLoaded = useRoute();
    const state = reactive({
      show: false,
    });
    useGlobalEvents();
    onMounted(() => {
      state.show = true;
    });
    return () => (
      <div class="app">
        <n-message-provider>
          <router-view />
        </n-message-provider>
        <GlobalBackTop />
      </div>
    );
  },
});
