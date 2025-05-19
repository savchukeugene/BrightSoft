import { create } from 'zustand';
import { parseJwt } from '@common/utils/jwt';
import { getStars, getUserCourses, getUserInfo } from '@common/utils/globalActions';
import { isNil } from 'lodash';

const userRoles = [
  'administrator',
  'user',
  'support',
  'teacher',
  'unauthorized',
] as const;
export type IUserRoles = (typeof userRoles)[number];

interface IUser {
  user: string | null;
  role: IUserRoles;
  stars: number | string;
  courses: string[];
}

export interface IUserStore extends IUser {
  setUser: (id: string) => void;
  logoutUser: () => void;
  setStars: (amount: number | null) => void;
}

export const useUserStore = create<IUserStore>((set) => {
  const savedToken = localStorage.getItem('access_token');
  const starSetter = async (amount: number | null) => {
    if (!isNil(amount)) {
      return set(() => ({
        stars: amount,
      }));
    }
    if (isNil(savedToken)) {
      return;
    }
    const { data } = await getStars(parseJwt(savedToken).id);

    set(() => ({
      stars: data ?? 'Упс',
    }));
  };

  const getCourses = async () => {
    if (isNil(savedToken)) {
      return;
    }
    const data = await getUserCourses(parseJwt(savedToken).id);
    set(() => ({
      courses: data.filter((id) => id.length > 0),
    }));
  };

  getCourses();
  starSetter(null);
  return {
    user: savedToken ? parseJwt(savedToken).id : null,
    role: savedToken ? parseJwt(savedToken).role : 'unauthorized',
    stars: 'Не известно',
    courses: [],
    setUser: (access_token: string) => getUserInfo(access_token, set),
    setStars: starSetter,
    logoutUser: (): void => {
      localStorage.removeItem('access_token');
      set(() => ({ user: null, role: 'user' }));
    },
  };
});
