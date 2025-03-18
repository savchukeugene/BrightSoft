import { IUserRoles } from '../store/userStore.tsx';

export interface IUserMapped {
  userName: string;
  email: string;
  role: IUserRoles;
  // status: UserStatuses;
}
