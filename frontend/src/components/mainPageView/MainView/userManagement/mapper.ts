import { IAllUsersMapped, IUserData } from '../../../../types/commonTypes.ts';
import { messages } from '../../../../common/constants/messages.ts';
import { IUserRoles } from '../../../../store/userStore.tsx';
import { formatDate } from '../../../../common/utils/helpers.tsx';

export const allUsersDataMapper = (data: IUserData[]): IAllUsersMapped[] => {
  return data.map((user) => ({
    userName: user.userName,
    role: messages.userRoles[user.role] as IUserRoles,
    created_at: formatDate(user.createdAt),
    isVerified: user.isVerified
      ? messages.view.main.userManagement.isVerified.yes
      : messages.view.main.userManagement.isVerified.no,
  }));
};
