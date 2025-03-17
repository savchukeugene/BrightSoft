import AxiosService from '../../../axios/AxiosService.tsx';
import { IActionsFormat, IRegisterDTO, IUserInfo } from '../../../types/commonTypes.ts';
import { API_REGISTER } from '../../../common/constants/api.ts';
import { AxiosResponse } from 'axios';

export const register = async (
  dto: IRegisterDTO,
): Promise<IActionsFormat<AxiosResponse<IUserInfo, any> | null>> => {
  try {
    const { data } = await AxiosService.POST<IUserInfo>(API_REGISTER, {
      data: dto,
    });
    console.log(data?.data);

    return { data, ok: true };
  } catch (e) {
    return { data: null, ok: false };
  }
};
