import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ArgsProps } from 'antd/es/notification';
import { notification } from 'antd';
import { messages } from '@common/constants/messages';
import { IActionsFormat, INestErrorMessage } from '../types/commonTypes';

interface ErrorDetails {
  message: ArgsProps['message'];
  description: ArgsProps['description'];
  btn?: ArgsProps['btn'];
}
interface ErrorObject {
  [key: number]: ErrorDetails;
}
interface RequestConfig<T> extends Omit<AxiosRequestConfig, 'method' | 'url'> {
  mapper?: (data: T) => any;
  exceptionHandler?: ErrorObject;
}

export default class AxiosService {
  public static GET<T>(url: AxiosRequestConfig['url']) {
    return this.fetchData<T>(url, 'GET');
  }

  public static DELETE<T>(url: AxiosRequestConfig['url'], config: RequestConfig<T> = {}) {
    return this.fetchData<T>(url, 'DELETE', config);
  }

  public static POST<T>(url: AxiosRequestConfig['url'], config: RequestConfig<T> = {}) {
    return this.fetchData<T>(url, 'POST', config);
  }

  public static PUT<T>(url: AxiosRequestConfig['url'], config: RequestConfig<T> = {}) {
    return this.fetchData<T>(url, 'PUT', config);
  }

  public static PATCH<T>(url: AxiosRequestConfig['url'], config: RequestConfig<T> = {}) {
    return this.fetchData<T>(url, 'PATCH', config);
  }

  private static fetchData<T>(
    url: AxiosRequestConfig['url'],
    method: AxiosRequestConfig['method'],
    config?: RequestConfig<T>,
  ): Promise<IActionsFormat<AxiosResponse<T, any> | null>> {
    return axios
      .request({ url, method, ...config, withCredentials: true })
      .then((data): IActionsFormat<AxiosResponse<T, any>> => {
        if (
          data?.data?.status === undefined ||
          data?.data?.status === 200 ||
          data?.status === 200
        ) {
          return { data, ok: true };
        } else {
          throw new Error(
            'Произошла ошибка при обработке данных. Пожалуйста, повторите ваш запрос позже.',
          );
        }
      })
      .catch((e: AxiosError): IActionsFormat<null> => {
        if (e.response && e.response.data) {
          String.prototype.join = function (): string {
            return this.toString();
          };
          const responseData: INestErrorMessage = e.response.data as INestErrorMessage;
          notification.error({
            message: messages.notification.error.invalidData,
            description:
              responseData?.message?.join('\n') ??
              messages.notification.error.unknownError,
          });
        } else {
          notification.error({
            message: messages.notification.error.invalidData,
            description: messages.notification.error.unknownError,
          });
        }

        return { data: null, ok: false };
      });
  }
}
