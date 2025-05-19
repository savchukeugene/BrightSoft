import { API_GET_STARS, API_GET_USER_COURSES, API_WHO_AM_I } from '@common/constants/api';
import { IAccessToken, IActionsFormat, IUserData } from '../../types/commonTypes';
import { isNil } from 'lodash';
import { parseJwt } from '@common/utils/jwt';
import { IUserStore } from '../../store/userStore';
import { AxiosService } from '../../axios/AxiosService';

export const getStars = async (id: string): Promise<IActionsFormat<number | null>> => {
  try {
    const data = await AxiosService.POST<{ id: string }, number>(API_GET_STARS, {
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
  set?: (
    partial:
      | IUserStore
      | Partial<IUserStore>
      | ((state: IUserStore) => IUserStore | Partial<IUserStore>),
    replace?: false,
  ) => void,
) => {
  const parsedJwt: IAccessToken = parseJwt(access_token);
  const data = await AxiosService.GET<IUserData>(API_WHO_AM_I, {
    params: { userId: parsedJwt.id ?? access_token },
  });

  if (!set) {
    return;
  }

  if (!data) {
    return set(() => ({
      user: null,
      role: 'unauthorized',
      stars: 0,
    }));
  }

  if (!isNil(localStorage.getItem('access_token'))) {
    localStorage.removeItem('access_token');
  }

  localStorage.setItem('access_token', access_token);
  set(() => ({
    user: data.data.id,
    role: parsedJwt.role,
    stars: data.data.stars,
  }));
};

export const getUserCourses = async (id: string): Promise<string[]> => {
  const data = await AxiosService.GET<string[]>(API_GET_USER_COURSES, {
    params: { id },
  });
  return data.data;
};
