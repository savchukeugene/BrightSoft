import AxiosService from '../../../axios/AxiosService.tsx';
import {
  IActionsFormat,
  ILoginDTO,
  ISuccessLoginDTO,
} from '../../../types/commonTypes.ts';
import { AxiosResponse } from 'axios';
import { API_LOGIN } from '../../../common/constants/api.ts';

export const loginBazevich = async (
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
