import { IUserRoles } from '../store/userStore';
import { UserStatuses } from './commonTypes';

export interface IUserMapped {
  userName: string;
  email: string;
  role: IUserRoles;
  status: UserStatuses;
}
