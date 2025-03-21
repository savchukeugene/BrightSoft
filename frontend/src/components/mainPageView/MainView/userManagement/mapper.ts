import { IAllUsersMapped, IUserData } from '../../../../types/commonTypes.ts';
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
    isVerified: user.isVerified
      ? messages.view.main.userManagement.isVerified.yes
      : messages.view.main.userManagement.isVerified.no,
  }));
};

export const userDataMapper = (data: IUserData): IUserMapped => ({
  userName: data.userName,
  email: data.email,
  role: data.role,
  status: data.status,
});
