// 选择用类而不是函数是因为类的封装性更强

import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface EruRequestInterceptors {
  // 问号代表可选
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  reponseInterceptor?: (config: AxiosResponse) => AxiosRequestConfig;
  reponseInterceptorCatch?: (error: any) => any;
}

interface EruRequestConfig extends AxiosRequestConfig {
  intercepors?: EruRequestInterceptors;
}

class EruRequest {
  // 可选链！！！
  instance: AxiosInstance;
  interceptors?: EruRequestInterceptors;
  constructor(config: EruRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.intercepors;
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.reponseInterceptor,
      this.interceptors?.reponseInterceptorCatch
    );
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res);
    });
  }
  // get() {}
}
export default EruRequest;
