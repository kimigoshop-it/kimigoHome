// index.ts 文件内容

import { createI18n } from 'vue-i18n';
import ZH from './zh-CN';
import RS from './rs'; // 俄语
import kh from './kh'; // 哈语
import mn from './mn'; // 蒙古
import en from './zh-EN'; // 蒙古
import kg from './kg'; //吉尔吉斯斯坦

const message = {
  zh: {
    ...ZH
  },
  rs: {
    ...RS
  },
  kh: {
    ...kh
  },
  mn: {
    ...mn
  },
  en: {
    ...en
  },
  kg: {
    ...kg
  },
  mt:{//配置一个马耳他指向英文文件
    ...en
  }
};

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: (localStorage.getItem('lang') as string) || 'zh',
  messages: message
});

export default i18n;
