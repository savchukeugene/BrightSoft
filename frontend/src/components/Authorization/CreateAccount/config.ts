import { IAuthorizationFields } from '../../../types/commonTypes.ts';
import { messages } from '../../../common/constants/messages.ts';

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
