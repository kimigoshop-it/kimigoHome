/**
 * 不同请求服务的环境配置
 *
 * @format
 */
const serviceEnv = {
  dev: {
    // url: 'http://10.100.20.97:5072/',
    // url: 'http://106.14.254.197:8081/',
    // url: 'http://114.55.176.141:8081',
    // url: "http://10.100.20.11:5181",
    url: "https://admapi.prod.kimigoshop.com/",
    // url: "http://10.100.10.49:7160/",
    // url: "http://192.168.3.35:7160",
    urlPattern: "/url-pattern",
    secondUrl: "http://106.14.254.197:8081/",
    secondUrlPattern: "/second-url-pattern",
  },
  test: {
    url: "https://admapi.prod.kimigoshop.com/",
    urlPattern: "/url-pattern",
    secondUrl: "http://106.14.254.197:8081/",
    secondUrlPattern: "/second-url-pattern",
  },
  prod: {
    url: "https://admapi.prod.kimigoshop.com/",
    urlPattern: "/url-pattern",
    secondUrl: "http://106.14.254.197:8081/",
    secondUrlPattern: "/second-url-pattern",
  },
};

/**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
export function getServiceEnvConfig(env) {
  const { VITE_SERVICE_ENV = "dev" } = env;

  const config = serviceEnv[VITE_SERVICE_ENV];

  return config;
}
