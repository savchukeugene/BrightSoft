import AxiosService from '../../../axios/AxiosService.tsx';
import {
  IActionsFormat,
  ILoginDTO,
  ISuccessLoginDTO,
} from '../../../types/commonTypes.ts';
import { AxiosResponse } from 'axios';
import { API_LOGIN, API_LOGOUT } from '../../../common/constants/api.ts';

export const login = async (
  dto: ILoginDTO,
): Promise<IActionsFormat<AxiosResponse<ISuccessLoginDTO, any> | null>> => {
  try {
    const { data } = await AxiosService.POST<ISuccessLoginDTO>(API_LOGIN, {
      data: dto,
    });

    return { data, ok: true };
  } catch (e) {
    return { data: null, ok: false };
  }
};

export const logout = async (after: any): Promise<void> => {
  try {
    await AxiosService.POST(API_LOGOUT);
    after?.();
  } catch (e) {
  } finally {
    after?.();
  }
};
