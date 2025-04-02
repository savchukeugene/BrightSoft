import AxiosService from '../../../axios/AxiosService';
import { IActionsFormat, IRegisterDTO, IUserInfo } from '../../../types/commonTypes';
import { API_REGISTER } from '../../../common/constants/api';
import { AxiosResponse } from 'axios';

export const register = async (
  dto: IRegisterDTO,
): Promise<IActionsFormat<AxiosResponse<IUserInfo, any> | null>> => {
  try {
    const { data } = await AxiosService.POST<IUserInfo>(API_REGISTER, {
      data: dto,
    });

    return { data, ok: true };
  } catch (e) {
    return { data: null, ok: false };
  }
};
