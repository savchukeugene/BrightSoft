import { IAllUsersMapped, IUserData, UserStatuses } from '../../../../types/commonTypes';
import { messages } from '../../../../common/constants/messages';
import { IUserRoles } from '../../../../store/userStore';
import { formatDate } from '../../../../common/utils/helpers';
import { IUserMapped } from '../../../../types/userTypes';

export const allUsersDataMapper = (data: IUserData[]): IAllUsersMapped[] => {
  return data.map((user: IUserData, index: number) => ({
    id: user.id,
    userName: user.userName,
    role: messages.userRoles[user.role] as IUserRoles,
    created_at: formatDate(user.createdAt),
    email: user.email,
    status: messages.userStatuses[user.status] as UserStatuses,
    key: `${index}_allUsers`,
  }));
};

export const userDataMapper = (data: IUserData): IUserMapped => ({
  userName: data.userName,
  email: data.email,
  role: data.role,
  status: data.status,
});
