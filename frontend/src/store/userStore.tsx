import { create } from 'zustand';
import { defineUserRole } from '../common/utils/helpers.tsx';

const userRoles = ['administrator', 'user', 'support'] as const;
export type IUserRoles = (typeof userRoles)[number];

interface IUser {
  user: string | null;
  role: IUserRoles;
}

export interface IUserStore extends IUser {
  setUser: (id: string, role: IUserRoles) => void;
  logoutUser: () => void;
}

export const useUserStore = create<IUserStore>((set) => {
  const savedUser = localStorage.getItem('brightSoftAuthToken') as IUserRoles;

  return {
    user: savedUser ?? null,
    role: defineUserRole(savedUser),
    setUser: (id: string, role: IUserRoles): void => {
      localStorage.setItem('access_token', id);
      set(() => ({ user: id, role }));
    },
    logoutUser: (): void => {
      localStorage.removeItem('brightSoftAuthToken');
      set(() => ({ user: null }));
    },
  };
});
