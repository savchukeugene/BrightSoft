import { IUserInfoGenerator } from './undex.tsx';
import { IUserMapped } from '../../../../../types/userTypes.ts';
import {
  USER_ROLES_OPTIONS,
  USER_STATUSES_OPTIONS,
} from '../../../../../common/constants/options.ts';
import { messages } from '../../../../../common/constants/messages.ts';

export const createConfig = (data: IUserMapped): IUserInfoGenerator[] => [
  {
    label: messages.view.main.userManagement.userInfo.userName,
    value: data?.userName,
  },
  {
    label: messages.view.main.userManagement.userInfo.email,
    value: data?.email,
  },
  {
    label: messages.view.main.userManagement.userInfo.status,
    activeElement: {
      name: 'status',
      type: 'select',
      options: USER_STATUSES_OPTIONS.filter((object) => object.value !== 'deleted'),
      defaultValue: data?.status,
    },
  },
  {
    label: messages.view.main.userManagement.userInfo.role,
    activeElement: {
      name: 'role',
      type: 'select',
      options: USER_ROLES_OPTIONS,
      defaultValue: data?.role,
    },
  },
];
