import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ArgsProps } from 'antd/es/notification';
import { notification } from 'antd';
import { messages } from '../common/constants/messages.ts';
import { IActionsFormat, INestErrorMessage } from '../types/commonTypes.ts';

interface ErrorDetails {
  message: ArgsProps['message'];
  description: ArgsProps['description'];
  btn?: ArgsProps['btn'];
}
interface ErrorObject {
  [key: number]: ErrorDetails;
}
interface RequestConfig<T> extends Omit<AxiosRequestConfig, 'method' | 'url'> {
  onOk?: (data: AxiosResponse<T, any>) => void;
  mapper?: (data: T) => any;
  exceptionHandler?: ErrorObject;
}

export default class AxiosService {
  public static GET<T>(url: AxiosRequestConfig['url']) {
    return this.fetchData<T>(url, 'GET');
  }

  public static POST<T>(
    url: AxiosRequestConfig['url'],
    config: AxiosRequestConfig['data'] = {},
  ) {
    return this.fetchData<T>(url, 'POST', config);
  }

  public static PUT<T>(
    url: AxiosRequestConfig['url'],
    config: AxiosRequestConfig['data'] = {},
  ) {
    return this.fetchData<T>(url, 'PUT', config);
  }

  public static fetchData<T>(
    url: AxiosRequestConfig['url'],
    method: string,
    config: RequestConfig<T> = {},
  ): Promise<IActionsFormat<AxiosResponse<T, any> | null>> {
    return axios
      .request({ url, method, ...config })
      .then((data): IActionsFormat<AxiosResponse<T, any>> => {
        notification.success({
          message: messages.requests.success,
          description: data?.data,
        });
        return { data, ok: true };
      })
      .catch((e: AxiosError): IActionsFormat<null> => {
        if (e.response && e.response.data) {
          const responseData: INestErrorMessage = e.response.data as INestErrorMessage;
          console.log(responseData.message);

          notification.error({
            message: messages.notification.error.invalidData,
            description:
              responseData.message?.join('\n') ||
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
