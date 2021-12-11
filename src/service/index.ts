// service 统一出口
import EruRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";

const eruRequest = new EruRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  intercepors: {
    requestInterceptor: (config) => {
      console.log("请求成功拦截");
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log("请求失败拦截");
      return err;
    },
    reponseInterceptor: (config) => {
      console.log("响应成功拦截");
      return config;
    },
    reponseInterceptorCatch: (err) => {
      console.log("响应错误拦截");
      return err;
    }
  }
});

export default eruRequest;
