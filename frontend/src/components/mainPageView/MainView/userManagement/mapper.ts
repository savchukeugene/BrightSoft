import {
  IAllUsersMapped,
  IUserData,
  UserStatuses,
} from '../../../../types/commonTypes.ts';
import { messages } from '../../../../common/constants/messages.ts';
import { IUserRoles } from '../../../../store/userStore.tsx';
import { formatDate } from '../../../../common/utils/helpers.tsx';
import { IUserMapped } from '../../../../types/userTypes.ts';

export const allUsersDataMapper = (data: IUserData[]): IAllUsersMapped[] => {
  return data.map((user) => ({
    id: user.id,
    userName: user.userName,
    role: messages.userRoles[user.role] as IUserRoles,
    created_at: formatDate(user.createdAt),
    email: user.email,
    status: messages.userStatuses[user.status] as UserStatuses,
  }));
};

export const userDataMapper = (data: IUserData): IUserMapped => ({
  userName: data.userName,
  email: data.email,
  role: data.role,
  status: data.status,
});
