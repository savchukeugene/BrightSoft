import { IUserMapped } from '../../../../../types/userTypes';
import {
  USER_ROLES_OPTIONS,
  USER_STATUSES_OPTIONS,
} from '../../../../../common/constants/options';
import { messages } from '../../../../../common/constants/messages';
import { IUserInfoGenerator } from '../../../../../types/commonTypes';

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
      options: USER_STATUSES_OPTIONS.filter(
        (object): boolean => object.value !== 'deleted',
      ),
      defaultValue: data?.status,
      allowClear: false,
    },
  },
  {
    label: messages.view.main.userManagement.userInfo.role,
    activeElement: {
      name: 'role',
      type: 'select',
      options: USER_ROLES_OPTIONS,
      defaultValue: data?.role,
      allowClear: false,
    },
  },
];
