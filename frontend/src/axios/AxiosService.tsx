import { notification } from 'antd';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IAxiosConfig } from '../types/commonTypes';

export class AxiosService {
  public static POST<T, D>(url: AxiosRequestConfig['url'], config: IAxiosConfig<T>) {
    return this.fetchData<T, D>(url, 'POST', config);
  }

  public static DELETE<T, D>(url: AxiosRequestConfig['url'], config?: IAxiosConfig<T>) {
    return this.fetchData<T, D>(url, 'DELETE', config);
  }

  public static GET<T>(url: AxiosRequestConfig['url'], config?: AxiosRequestConfig) {
    return this.fetchData<AxiosRequestConfig, T>(url, 'GET', config);
  }

  public static PULL<T, D>(url: AxiosRequestConfig['url'], config: IAxiosConfig<T>) {
    return this.fetchData<T, D>(url, 'PUT', config);
  }

  public static fetchData<T, D>(
    url: AxiosRequestConfig['url'],
    method: AxiosRequestConfig['method'],
    config?: IAxiosConfig<T> | AxiosRequestConfig,
  ): Promise<AxiosResponse<D, any>> {
    const token = localStorage.getItem('token');

    return axios
      .request({
        url,
        method,
        ...config,
        withCredentials: true,
        headers: {
          ...(config?.headers || {}),
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      })
      .then((data: AxiosResponse['data']): AxiosResponse<D, any> => {
        return data;
      })
      .catch((e: AxiosError) => {
        notification.error({
          message: 'Произошла ошибка при выполнении запроса!',
          description: e.message,
        });

        throw e;
      });
  }
}
