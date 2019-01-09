import { AxiosResponse } from 'axios';
import { JsonBody, makeRequest } from './requestBuilder';

export type RequestBody = JsonBody | FormData;

export type RequestMethod = () =>
    (url: string, body?: RequestBody) => Promise<AxiosResponse['data']>;

export interface ApiWrapper {
    get: RequestMethod;
    post: RequestMethod;
    put: RequestMethod;
    delete: RequestMethod;
}

export const API: ApiWrapper = {
    get: () => (url: string) =>
        makeRequest({
            method: 'get',
            url,
        }),

    post: () => (url: string, body?: JsonBody) =>
        makeRequest({
            method: 'post',
            body,
            url,
        }),

    put: () => (url: string, body?: JsonBody) =>
        makeRequest({
            method: 'put',
            body,
            url,
        }),

    delete: () => (url: string) =>
        makeRequest({
            method: 'delete',
            url,
        }),
};
