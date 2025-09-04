import { defineConfig,loadEnv } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { createViteProxy} from './build';
import { getServiceEnvConfig } from './.env-config';
import px2rem from 'postcss-px2rem'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig(
  configEnv => { 
    // 配置基本大小
  const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 16,
  });
    const viteEnv = loadEnv(configEnv.mode, process.cwd());
    const isOpenProxy = viteEnv.VITE_HTTP_PROXY === 'Y';
    const envConfig = getServiceEnvConfig(viteEnv);
    return {
      base: viteEnv.VITE_BASE_URL,
      plugins: [
        vue(), 
        vueJsx(),
        createSvgIconsPlugin({
      		// 这个是自己配置的图标路径，指出来（自己咋配置的咋来）
          iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
          // 这个表示id，按这个来就对了
          symbolId: 'icon-[dir]-[name]',
        }),
        AutoImport({
          imports: [
            'vue',
            {
              'naive-ui': [
                'useDialog',
                'useMessage',
                'useNotification',
                'useLoadingBar'
              ]
            }
          ]
        }),
        Components({
          resolvers: [NaiveUiResolver()]
        })
      ],
      server: {
        host: '0.0.0.0',
        port: 3200,
        open: true,
        proxy: createViteProxy(isOpenProxy, envConfig)
      },
      resolve: {
        alias: [
          {
            find: "@",
            replacement: resolve(__dirname, "./src")
          },{
            find: "@components",
            replacement: resolve(__dirname, "./src/components")
          },{
            find: "@assets",
            replacement: resolve(__dirname, "./src/assets")
          },{
            find: "@views",
            replacement: resolve(__dirname, "./src/views")
          },
          {
            find: "~",
            replacement: resolve(__dirname)
          }
        ]
      },
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
          },
        },
        postcss: {
          plugins: [postcss],
        },
      },
  }
})
