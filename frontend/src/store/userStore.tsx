import { create } from 'zustand';

interface IUser {
  user: string | null;
}

export interface IUserStore extends IUser {
  setUser: (id: string) => void;
  logoutUser: () => void;
}

export const useUserStore = create<IUserStore>((set) => {
  const savedUser = localStorage.getItem('brightSoftAuthToken');

  return {
    user: savedUser ?? null,
    setUser: (id) => {
      localStorage.setItem('brightSoftAuthToken', id);
      set(() => ({ user: id }));
    },
    logoutUser: () => {
      localStorage.removeItem('brightSoftAuthToken');
      set(() => ({ user: null }));
    },
  };
});
