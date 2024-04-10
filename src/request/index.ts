import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getServiceEnvConfig } from "~/.env-config";
const { url, urlPattern, secondUrl, secondUrlPattern } = getServiceEnvConfig(
  import.meta.env
);
const showStatus: Function = (status: number): string => {
  let message = "";
  switch (status) {
    case 400:
      message = "请求错误(400)";
      break;
    case 401:
      message = "未授权，请重新登录(401)";
      break;
    case 403:
      message = "拒绝访问(403)";
      break;
    case 404:
      message = "请求出错(404)";
      break;
    case 408:
      message = "请求超时(408)";
      break;
    case 500:
      message = "服务器错误(500)";
      break;
    case 501:
      message = "服务未实现(501)";
      break;
    case 502:
      message = "网络错误(502)";
      break;
    case 503:
      message = "服务不可用(503)";
      break;
    case 504:
      message = "网络超时(504)";
      break;
    case 505:
      message = "HTTP版本不受支持(505)";
      break;
    default:
      message = `连接出错(${status})!`;
  }
  return `${message}，请检查网络或联系管理员！`;
};

const service = axios.create({
  timeout: 15 * 1000,
  baseURL: url,
  // headers: {
  //     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  // }
});

service.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    // let token = sessionStorage.getItem('token');
    // if(token){
    //     config.headers['Authorization'] = `${token}`;
    // }
    return config;
  },
  (error): Promise<string> => {
    // 错误抛到业务代码
    error.data = {};
    error.data.msg = "服务器异常，请联系管理员！";
    return Promise.resolve(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const status = response.status;
    let msg = "";
    if (status < 200 || status >= 300) {
      response.data = {
        msg,
      };
    } else {
      response.data.msg = msg;
    }
    return response;
  },
  (error): Promise<string> => {
    return Promise.resolve(error);
  }
);

export default service;
