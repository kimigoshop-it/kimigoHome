import {  useAppStore } from '@/store';
/** 全局事件 */
export function useGlobalEvents() {
  const app = useAppStore();

  // 语言初始化
  const obj = {
    zh: 0,
    rs: 1,
    kh: 2
  };  
  app.langChange(obj[localStorage.getItem('lang') || 'zh']);
}
