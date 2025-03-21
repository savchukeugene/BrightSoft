import { IUserRoles } from '../store/userStore.tsx';
import { UserStatuses } from './commonTypes.ts';

export interface IUserMapped {
  userName: string;
  email: string;
  role: IUserRoles;
  status: UserStatuses;
}
