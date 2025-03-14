import { IAuthorizationFields } from '../../../types/commonTypes.ts';

export const createAccountFieldsConfig: IAuthorizationFields[] = [
  {
    label: 'Придумайте имя пользователя',
    name: 'name',
  },
  {
    label: 'Введите e-mail',
    name: 'email',
  },
  {
    label: 'Придумайте пароль',
    name: 'password',
  },
  {
    label: 'Подтвердите пароль',
    name: 'passwordRepeat',
  },
];
