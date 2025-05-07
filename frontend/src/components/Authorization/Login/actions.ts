import AxiosService from '../../../axios/AxiosService';
import { IActionsFormat, ILoginDTO, ISuccessLoginDTO } from '../../../types/commonTypes';
import { AxiosResponse } from 'axios';
import { API_LOGIN, API_LOGOUT } from '@common/constants/api';

export const login = async (
  dto: ILoginDTO,
): Promise<IActionsFormat<AxiosResponse<ISuccessLoginDTO, any> | null>> => {
  try {
    const { data } = await AxiosService.POST<ISuccessLoginDTO>(API_LOGIN, {
      data: dto,
      exceptionHandler: {
        404: {
          message: 'Пользователь не найден!',
          description:
            'Пожалуйста, проверьте Ваш логин или восстановите пароль, если забыли его!',
        },
        403: {
          message: 'Неверный пароль!',
          description:
            'Пожалуйста, проверьте Ваш пароль или восстановите его, если забыли!',
        },
      },
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
