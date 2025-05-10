import { AxiosService } from '../../../axios/AxiosService';
import { IRegisterDTO, IUserInfo } from '../../../types/commonTypes';
import { API_REGISTER } from '@common/constants/api';
import { notification } from 'antd';

export const register = async (dto: IRegisterDTO): Promise<IUserInfo | void> => {
  try {
    const data = await AxiosService.POST<IRegisterDTO, IUserInfo>(API_REGISTER, {
      data: dto,
    });

    if (!data) {
      throw new Error();
    }

    return data.data;
  } catch (e) {
    notification.error({
      message: 'Произошла ошибка',
      description: 'Произошла неизвестная ошибка! Пожалуйста, обратитесь в техподдержку',
    });
  }
};
