import AxiosService from '../../../axios/AxiosService.tsx';
import { IActionsFormat, IRegisterDTO, IUser } from '../../../types/commonTypes.ts';
import { API_REGISTER } from '../../../common/constants/api.ts';
import { AxiosResponse } from 'axios';

export const register = async (
  dto: IRegisterDTO,
): Promise<IActionsFormat<AxiosResponse<IUser, any> | null>> => {
  try {
    const { data } = await AxiosService.POST<IUser>(API_REGISTER, {
      data: dto,
    });
    console.log(data?.data);

    return { data, ok: true };
  } catch (e) {
    return { data: null, ok: false };
  }
};
