import { IUserInfoGenerator } from './undex.tsx';
import { IUserMapped } from '../../../../../types/userTypes.ts';
import { USER_ROLES_OPTIONS } from '../../../../../common/constants/options.ts';
import { messages } from '../../../../../common/constants/messages.ts';

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
    value: messages.userStatuses[data?.status],
  },
  {
    label: 'Роль',
    activeElement: {
      name: 'role',
      type: 'select',
      options: USER_ROLES_OPTIONS,
      defaultValue: data?.role,
    },
    value: data?.role,
  },
];
