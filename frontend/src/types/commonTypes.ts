import { IUserRoles } from '../store/userStore';
import { IField } from './filterTypes';
import { FormItemLayout } from 'antd/es/form/Form';

const userStatuses = ['active', 'blocked', 'deleted', 'non_confirmed'] as const;
export type UserStatuses = (typeof userStatuses)[number];

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

export interface IUserData {
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
  status: UserStatuses;
  stars: number;
}

export interface IAllUsersMapped {
  id: string;
  userName: string;
  role: IUserRoles;
  status: UserStatuses;
  email?: string;
  created_at: string;
  key?: string;
}

export interface IUserInfo {
  user: IUserData;
}

export interface ISuccessLoginDTO {
  access_token: string;
}

export interface INestErrorMessage {
  message?: string[];
  statusCode: number;
}

export interface IAccessToken {
  email: string;
  iat: number;
  role: IUserRoles;
  id: string;
  user: IUserData;
  stars: number;
}

export interface IRoutesGenerator {
  path: string;
  element?: JSX.Element;
  child?: IRoutesGenerator[];
}

export interface IUserInfoGenerator {
  label: string;
  value?: string;
  activeElement?: Partial<IField>;
}

export interface IFormGeneratorConfig {
  label: string;
  required: boolean;
  name: string;
  layout?: FormItemLayout | undefined;
  children: IFormGeneratorConfig[];
}
