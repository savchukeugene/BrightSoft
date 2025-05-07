import { IUserRoles } from '../store/userStore';
import { UserStatuses } from './commonTypes';

export interface IUserMapped {
  userName: string;
  email: string;
  role: IUserRoles;
  status: UserStatuses;
}

export interface IRegisterUserDTOOut {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
  firstName?: string;
  secondName?: string;
  fatherName?: string;
}
