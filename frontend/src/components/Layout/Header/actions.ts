import AxiosService from '../../../axios/AxiosService';
import { API_REGISTER } from '@common/constants/api';
import { IRegisterUserDTOOut } from '../../../types/userTypes';

export const registerUser = async (dto: IRegisterUserDTOOut) => {
  try {
    const { data } = await AxiosService.POST(API_REGISTER, {
      data: dto,
    });
  } catch (e) {
    return null;
  }
};
