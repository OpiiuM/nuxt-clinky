import type { FetchOptions, FetchError } from 'ofetch';

// import type {
//   ApiSuccessResponseInterface,
//   ApiPaginatedResponseInterface,
//   ApiErrorResponseInterface,
//   RequestInterface,
//   ApiConfirmPhoneResponseInterface,
// } from '@/interfaces';
// import { HttpMethodEnum } from '@/enums';
// import { isClient } from '@vueuse/core';
// eslint-disable-next-line import/no-cycle
// import { useUserStore } from '@/store/user';
// import { useCookieStorage } from '@/use/cookie-storage';


export const enum ResponseStatusesEnum {
  Success = 'success',
  Error = 'error',
  ValidationError = 'validationError',
  ConfirmPhone = 'confirmPhone',
  PaymentLink = 'paymentLink',
}

export enum HttpMethodEnum {
  Get = 'GET',
  Post = 'POST',
  Patch = 'PATCH',
  Put = 'PUT',
  Delete = 'DELETE',
}

export interface ApiResponseInterface {
  data: Record<string, unknown>;
  status: `${ResponseStatusesEnum}`;
}

export interface ApiSuccessResponseInterface extends ApiResponseInterface {
  data: Record<string, unknown>;
  status: ResponseStatusesEnum.Success;
}

export interface ApiErrorResponseInterface {
  data: Record<string, unknown>;
  status: ResponseStatusesEnum.Error;
  message: string;
}

export interface RequestInterface {
  get(url: string, options?: FetchOptions): Promise<ApiSuccessResponseInterface | ApiErrorResponseInterface>;
  post(url: string, options?: FetchOptions): Promise<ApiSuccessResponseInterface | ApiErrorResponseInterface>;
  refresh(url: string, options?: FetchOptions): Promise<ApiSuccessResponseInterface | ApiErrorResponseInterface>;
  put(url: string, options?: FetchOptions): Promise<ApiSuccessResponseInterface | ApiErrorResponseInterface>;
  patch(url: string, options?: FetchOptions): Promise<ApiSuccessResponseInterface | ApiErrorResponseInterface>;
  delete(url: string, options?: FetchOptions): Promise<ApiSuccessResponseInterface | ApiErrorResponseInterface>;
}


class Request implements RequestInterface {
  protected _baseUrl!: string;

  public get baseUrl() {
    if (!this._baseUrl) {
      this._baseUrl = globalThis.process?.env?.API_URL ?? API_BASE_URL;
    }

    return 'https://jsonplaceholder.typicode.com';
  }

  private async getHeaders(optionHeaders: Record<string, string> = {}, isRefresh: boolean = false) {
    const headers = optionHeaders;

    // if (isClient && !isRefresh) {
    //   const user = useUserStore();
    //   const cookie = useCookieStorage();

    //   const mindboxDeviceUuid = cookie.getItem('mindboxDeviceUUID');

    //   if (mindboxDeviceUuid) {
    //     headers['Mindbox-Device-Uuid'] = mindboxDeviceUuid;
    //   }

    //   if (user.user?.id && user.tokens?.accessToken.length) {
    //     if (user.tokens.expiresAt.getTime() <= (new Date()).getTime()) {
    //       await user.refresh();
    //     }

    //     headers.Authorization = `Bearer ${user.tokens.accessToken}`;
    //   }
    // }

    return headers;
  }

  // private async handleUserAuthErrors(response: Response) {
  //   const user = useUserStore();

  //   if (response.status === 401 && user.tokens?.refreshToken) {
  //     user.tokens.accessToken = '';
  //     const success = await user.refresh();

  //     if (!success) {
  //       user.logout();
  //     }
  //   }
  // }

  public async get(url: string, options?: FetchOptions<'json'>): Promise<ApiSuccessResponseInterface | ApiErrorResponseInterface> {
    // TODO: Поправить подстановку хедеров - реализовать через composable
    const headers = await this.getHeaders(options?.headers as Record<string, string>);
    // @ts-ignore
    return $fetch<ApiSuccessResponseInterface>(url, {
        baseURL: this.baseUrl,
        ...options,
        headers,
        // onResponseError : async ({ response }: { response: Response }) => {
        //   // TODO: оптимизировать для паралельных запросов
        //   await this.handleUserAuthErrors(response);
        // },
      },
    ).catch((error: FetchError) => error.data);
  }

  public async post(url: string, options?: FetchOptions<'json'>): Promise<ApiSuccessResponseInterface | ApiErrorResponseInterface> {
    const headers = await this.getHeaders(options?.headers as Record<string, string>);

    // @ts-ignore
    return $fetch<ApiSuccessResponseInterface>(url, {
        baseURL: this.baseUrl,
        ...options,
        headers,
        method: HttpMethodEnum.Post,
      },
    ).catch((error: FetchError): ApiErrorResponseInterface => error.data);
  }

  public async refresh(url: string, options?: FetchOptions<'json'>): Promise<ApiSuccessResponseInterface | ApiErrorResponseInterface> {
    const headers = await this.getHeaders(options?.headers as Record<string, string>, true);

    // @ts-ignore
    return $fetch<ApiSuccessResponseInterface>(url, {
        baseURL: this.baseUrl,
        ...options,
        headers,
        method: HttpMethodEnum.Post,
      },
    ).catch((error: FetchError): ApiErrorResponseInterface => error.data);
  }

  public async put(url: string, options?: FetchOptions<'json'>): Promise<ApiSuccessResponseInterface | ApiErrorResponseInterface> {
    const headers = await this.getHeaders(options?.headers as Record<string, string>);

    // @ts-ignore
    return $fetch<ApiSuccessResponseInterface | ApiConfirmPhoneResponseInterface>(url, {
      baseURL: this.baseUrl,
      ...options,
      headers,
      method: HttpMethodEnum.Put,
    }).catch((error: FetchError): ApiErrorResponseInterface => error.data);
  }

  public async patch(url: string, options?: FetchOptions<'json'>): Promise<ApiSuccessResponseInterface | ApiErrorResponseInterface> {
    const headers = await this.getHeaders(options?.headers as Record<string, string>);

    // @ts-ignore
    return $fetch<ApiSuccessResponseInterface>(url, {
      baseURL: this.baseUrl,
      ...options,
      headers,
      method: HttpMethodEnum.Patch,
    }).catch((error: FetchError): ApiErrorResponseInterface => error.data);
  }

  public async delete(url: string, options?: FetchOptions<'json'>): Promise<ApiSuccessResponseInterface | ApiErrorResponseInterface> {
    const headers = await this.getHeaders(options?.headers as Record<string, string>);

    // @ts-ignore
    return $fetch<ApiSuccessResponseInterface>(url, {
      baseURL: this.baseUrl,
      ...options,
      headers,
      method: HttpMethodEnum.Delete,
    }).catch((error: FetchError): ApiErrorResponseInterface => error.data);
  }
}

export default new Request();
