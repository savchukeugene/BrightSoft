import AxiosService from '../../../axios/AxiosService.tsx';
import { IActionsFormat, ILoginDTO, IUser } from '../../../types/commonTypes.ts';
import { AxiosResponse } from 'axios';
import { API_LOGIN } from '../../../common/constants/api.ts';

export const loginBazevich = async (
  dto: ILoginDTO,
): Promise<IActionsFormat<AxiosResponse<IUser, any> | null>> => {
  try {
    const { data } = await AxiosService.POST<IUser>(API_LOGIN, {
      data: dto,
    });

    return { data, ok: true };
  } catch (e) {
    return { data: null, ok: false };
  }
};
