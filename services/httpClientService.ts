/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosStatic } from "axios";

import EventEmitter from "events";

class HttpClient {
  private client: AxiosInstance;
  private rawClient: AxiosStatic;
  private emitter: EventEmitter;

  constructor({ config, emitter }: { config?: AxiosRequestConfig; emitter: EventEmitter }) {
    this.client = axios.create(config);
    this.rawClient = axios;
    this.emitter = emitter;
    this.interception();
  }

  get<T, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    return this.client.get<T>(url, config);
  }

  post<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
    return this.client.post<T>(url, data, config);
  }

  put<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
    return this.client.put<T>(url, data, config);
  }

  patch<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
    return this.client.patch<T>(url, data, config);
  }

  delete<T, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    return this.client.delete<T>(url, config);
  }

  isHttpError(error: unknown): error is AxiosError {
    return this.rawClient.isAxiosError(error);
  }

  private interception() {
    this.client.interceptors.response.use(null, error => {
      if (this.isHttpError(error)) {
        this.emitter.emit("error", error);
      }

      return error;
    });
  }
}

export default HttpClient;
