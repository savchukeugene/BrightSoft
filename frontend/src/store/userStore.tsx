import { create } from 'zustand';
import AxiosService from '../axios/AxiosService';
import { API_WHO_AM_I } from '@common/constants/api';
import { parseJwt } from '@common/utils/jwt';
import { IAccessToken, IUserData } from '../types/commonTypes';

const userRoles = ['administrator', 'user', 'support'] as const;
export type IUserRoles = (typeof userRoles)[number];

interface IUser {
  user: string | null;
  role: IUserRoles;
  stars: number | null;
}

export interface IUserStore extends IUser {
  setUser: (id: string) => void;
  logoutUser: () => void;
  setStars: (amount: number | null) => void;
}

export const useUserStore = create<IUserStore>((set) => {
  const savedToken = localStorage.getItem('access_token');

  const getUserInfo = async (access_token: string) => {
    const parsedJwt: IAccessToken = parseJwt(access_token);
    const { data } = await AxiosService.POST<IUserData>(API_WHO_AM_I, {
      data: { userId: parsedJwt.id ?? access_token },
    });
    localStorage.setItem('access_token', access_token);
    set(() => ({
      user: data?.data?.id,
      role: parsedJwt.role,
      stars: data?.data?.stars,
    }));
  };

  return {
    user: savedToken ? parseJwt(savedToken).id : null,
    role: savedToken ? parseJwt(savedToken).role : 'user',
    stars: savedToken ? parseJwt(savedToken).stars : 0,
    setUser: getUserInfo,
    setStars: (amount) => {
      if (amount !== null) {
        return set(() => ({
          stars: amount,
        }));
      }
    },
    logoutUser: (): void => {
      localStorage.removeItem('access_token');
      set(() => ({ user: null, role: 'user' }));
    },
  };
});
