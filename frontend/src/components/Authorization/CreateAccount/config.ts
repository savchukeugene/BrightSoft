import { IAuthorizationFields } from '../../../types/commonTypes';
import { messages } from '@common/constants/messages';

export const createAccountFieldsConfig: IAuthorizationFields[] = [
  {
    label: messages.view.createAccount.fields.userName,
    name: 'name',
  },
  {
    label: messages.view.createAccount.fields.email,
    name: 'email',
  },
  {
    label: messages.view.createAccount.fields.password,
    name: 'password',
  },
  {
    label: messages.view.createAccount.fields.passwordRepeat,
    name: 'passwordRepeat',
  },
];
