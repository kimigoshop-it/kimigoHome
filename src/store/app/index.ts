import { defineStore } from 'pinia';

interface AppState {
  lang:Number
}

export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({
    lang: 0
  }),

  actions: {
    // 设置语言
    langChange(s) {
      this.lang = s;

    },
  }
});
