import { create } from 'zustand';

interface IUser {
  user: string | null;
}

export interface IUserStore extends IUser {
  setUser: (id: string) => void;
  logoutUser: () => void;
}

export const useUserStore = create((set): IUserStore => {
  return {
    user: null,
    setUser: (id) => set(() => ({ user: id })),
    logoutUser: () => set((state) => ({ user: null })),
  };
});
