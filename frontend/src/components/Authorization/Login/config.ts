import { IAuthorizationFields } from '../../../types/commonTypes.ts';

export const loginFieldsConfig: IAuthorizationFields[] = [
  {
    label: 'Введите e-mail',
    name: 'email',
  },
  {
    label: 'Введите пароль',
    name: 'password',
  },
];
