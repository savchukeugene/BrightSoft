import { IUserInfoGenerator } from './undex.tsx';
import { IUserMapped } from '../../../../../types/userTypes.ts';

export const createConfig = (data: IUserMapped): IUserInfoGenerator[] => [
  {
    label: 'Имя пользователя',
    value: data?.userName,
  },
  {
    label: 'Электронная почта',
    value: data?.email,
  },
  {
    label: 'Статус',
    value: data?.status,
  },
  {
    label: 'Роль',
    value: data?.role,
  },
];
