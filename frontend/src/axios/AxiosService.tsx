import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import { ArgsProps } from 'antd/es/notification';
import {notification} from "antd";

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
        return this.fetchData<T>(url, 'GET', {})
    }

    public static POST<T>(url: AxiosRequestConfig['url']) {
        return this.fetchData<T>(url, 'POST', {})
    }

    public static PUT<T>(url: AxiosRequestConfig['url']) {
        return this.fetchData<T>(url, 'PUT', {})
    }

    public static fetchData<T>(url: AxiosRequestConfig['url'], method: string, config: RequestConfig<T>) {
        return axios.request({url, method, ...config})
            .then(() => {
                notification.success({
                    message: 'Запрос успешен'
                })
            })
            .catch((e: AxiosError) => {
                notification.error({
                    message: e.message
                })
            } )
    }

}