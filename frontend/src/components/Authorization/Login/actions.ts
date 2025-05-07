import { ILoginDTO, ISuccessLoginDTO } from '../../../types/commonTypes';
import { API_LOGIN, API_LOGOUT } from '@common/constants/api';
import { AxiosService } from '../../../axios/AxiosService';
import { notification } from 'antd';

export const login = async (dto: ILoginDTO): Promise<ISuccessLoginDTO | void> => {
  try {
    const data = await AxiosService.POST<ILoginDTO, ISuccessLoginDTO>(API_LOGIN, {
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

export const logout = async (after: any): Promise<void> => {
  try {
    await AxiosService.POST<null, void>(API_LOGOUT, { data: null });
    after?.();
  } catch (e) {
  } finally {
    after?.();
  }
};
