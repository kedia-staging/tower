import axios, {
    AxiosError,
    AxiosPromise,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';

export type HTTPMethod =
    'get'
    | 'post'
    | 'delete'
    | 'put'
    | 'patch';

export interface JsonBody {
    // tslint:disable-next-line
    [key: string]: any;
}

export interface Request {
    method: HTTPMethod;
    url: string;
    body?: JsonBody;
}

export interface ApiVariety {
    gateway: string;
}

const api: ApiVariety = {
    gateway: 'http://www.app.local',
};

const buildRequest = (request: Request) => {
    const { body, method, url } = request;

    const contentType = body instanceof FormData
        ? 'multipart/form-data'
        : 'application/json';

    const headers = {
        'content-type': contentType,
    };

    const apiUrl = api['gateway'];

    const requestConfig: AxiosRequestConfig = {
        baseURL: apiUrl,
        data: body,
        headers,
        method,
        url,
    };

    return requestConfig;
};

const defaultResponse: Partial<AxiosError['response']> = {
    status: 500,
    statusText: 'Server Error',
};

const formatError = (responseError: AxiosError) => {
    const response = responseError.response || defaultResponse;
    return {
        code: response.status,
        message: response.statusText,
    };
};

export const makeRequest = async (request: Request) => {
    const requestConfig = buildRequest(request);

    return new Promise((resolve, reject) => {
        const axiosRequest: AxiosPromise = axios(requestConfig);
        axiosRequest
            .then((response: AxiosResponse) => resolve(response.data))
            .catch((error: AxiosError) => {
                reject(formatError(error));
            });
    });
};
