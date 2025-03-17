import { create } from 'zustand';
import { defineUserRole } from '../common/utils/helpers.tsx';
import AxiosService from '../axios/AxiosService.tsx';
import { API_WHO_AM_I } from '../common/constants/api.ts';
import { parseJwt } from '../common/utils/jwt.ts';
import { IAccessToken, IUserInfo } from '../types/commonTypes.ts';

const userRoles = ['administrator', 'user', 'support'] as const;
export type IUserRoles = (typeof userRoles)[number];

interface IUser {
  user: IUserInfo | null;
  role: IUserRoles;
}

export interface IUserStore extends IUser {
  setUser: (id: string) => void;
  logoutUser: () => void;
}

export const useUserStore = create<IUserStore>((set) => {
  const savedToken = localStorage.getItem('access_token');

  const getUserInfo = async (access_token: string) => {
    const parsedJwt: IAccessToken = parseJwt(access_token);
    const { data } = await AxiosService.POST<IUser>(API_WHO_AM_I, {
      data: { userId: parsedJwt.sub ?? access_token },
    });

    localStorage.setItem('access_token', access_token);
    set(() => ({
      user: data?.data?.user,
      role: defineUserRole(parsedJwt.role),
    }));
  };

  return {
    user: savedToken ? parseJwt(savedToken) : null,
    role: savedToken ? defineUserRole(parseJwt(savedToken).role) : 'user',
    setUser: getUserInfo,
    logoutUser: (): void => {
      localStorage.removeItem('brightSoftAuthToken');
      set(() => ({ user: null, role: 'user' }));
    },
  };
});
