import { IUserRoles } from '../store/userStore.tsx';

export interface IOptions {
  label: string;
  value: string;
}

export interface IRegisterDTO {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  passwordRepeat: FormDataEntryValue | null;
}

export interface IAuthorizationFields {
  label: string;
  name: string;
}

export interface ILoginDTO {
  email: string;
  password: string;
}

export interface IActionsFormat<T> {
  data: T | null;
  ok: boolean;
}

interface IUserData {
  accounts: string[];
  createdAt: string;
  email: string;
  id: string;
  isTwoFactorEnabled: boolean;
  isVerified: boolean;
  method: string;
  password: string;
  picture: string;
  role: IUserRoles;
  updatedAt: string;
  userName: string;
}

export interface IUser {
  user: IUserData;
}

export interface ISuccessLoginDTO {
  access_token: string;
}

export interface INestErrorMessage {
  message?: string[];
}

export interface IAccessToken {
  email: string;
  iat: number;
  role: IUserRoles;
  sub: string;
}
