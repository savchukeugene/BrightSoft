import { IUserInfoGenerator } from './undex.tsx';
import { IUserMapped } from '../../../../../types/userTypes.ts';
import {
  USER_ROLES_OPTIONS,
  USER_STATUSES_OPTIONS,
} from '../../../../../common/constants/options.ts';

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
    activeElement: {
      name: 'status',
      type: 'select',
      options: USER_STATUSES_OPTIONS.filter((object) => object.value !== 'deleted'),
      defaultValue: data?.status,
    },
  },
  {
    label: 'Роль',
    activeElement: {
      name: 'role',
      type: 'select',
      options: USER_ROLES_OPTIONS,
      defaultValue: data?.role,
    },
  },
];
