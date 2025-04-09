import AxiosService from '../../axios/AxiosService';
import { API_GET_STARS, API_WHO_AM_I } from '@common/constants/api';
import { IAccessToken, IActionsFormat, IUserData } from '../../types/commonTypes';
import { isNil } from 'lodash';
import { parseJwt } from '@common/utils/jwt';
import { IUserStore } from '../../store/userStore';

export const getStars = async (id: string): Promise<IActionsFormat<number | null>> => {
  try {
    const { data } = await AxiosService.POST<number>(API_GET_STARS, {
      data: {
        id,
      },
    });

    if (isNil(data?.data)) {
      throw new Error();
    }
    return { data: data?.data, ok: true };
  } catch (e) {
    return { data: null, ok: false };
  }
};

export const getUserInfo = async (
  access_token: string,
  set: (
    partial:
      | IUserStore
      | Partial<IUserStore>
      | ((state: IUserStore) => IUserStore | Partial<IUserStore>),
    replace?: false,
  ) => void,
) => {
  const parsedJwt: IAccessToken = parseJwt(access_token);
  const { data } = await AxiosService.POST<IUserData>(API_WHO_AM_I, {
    data: { userId: parsedJwt.id ?? access_token },
  });

  if (!isNil(localStorage.getItem('access_token'))) {
    localStorage.removeItem('access_token');
  }

  localStorage.setItem('access_token', access_token);
  set(() => ({
    user: data?.data?.id,
    role: parsedJwt.role,
    stars: data?.data?.stars,
  }));
};
