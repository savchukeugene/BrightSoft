import { UUIDTypes } from 'uuid';

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

export interface IActionsFormat<T> {
  data: T | null;
  ok: boolean;
}

export interface IUser {
  accounts: string[];
  createdAt: string;
  email: string;
  id: UUIDTypes;
  isTwoFactorEnabled: boolean;
  isVerified: boolean;
  method: string;
  password: string;
  picture: string;
  role: string;
  updatedAt: string;
  userName: string;
}

export interface INestErrorMessage {
  message?: string[];
}
