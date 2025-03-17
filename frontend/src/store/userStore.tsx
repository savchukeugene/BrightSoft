import { create } from 'zustand';
import { defineUserRole } from '../common/utils/helpers.tsx';
import AxiosService from '../axios/AxiosService.tsx';
import { API_WHO_AM_I } from '../common/constants/api.ts';
import { parseJwt } from '../common/utils/jwt.ts';
import { IAccessToken } from '../types/commonTypes.ts';

const userRoles = ['administrator', 'user', 'support'] as const;
export type IUserRoles = (typeof userRoles)[number];

interface IUser {
  user: string | null;
  role: IUserRoles;
}

export interface IUserStore extends IUser {
  setUser: (id: string) => void;
  logoutUser: () => void;
}

export const useUserStore = create<IUserStore>((set) => {
  const savedUser = localStorage.getItem('brightSoftAuthToken') as IUserRoles;

  const getUserInfo = async (access_token: string) => {
    const parsedJet: IAccessToken = parseJwt(access_token);
    const { data } = await AxiosService.POST<IUser>(API_WHO_AM_I, {
      data: { userId: parsedJet.sub ?? access_token },
    });

    console.log(data);
    set(() => ({ user: parsedJet.sub, role: defineUserRole(parsedJet.role) }));
  };

  return {
    user: savedUser ?? null,
    role: defineUserRole(savedUser),
    setUser: getUserInfo,
    logoutUser: (): void => {
      localStorage.removeItem('brightSoftAuthToken');
      set(() => ({ user: null }));
    },
  };
});
