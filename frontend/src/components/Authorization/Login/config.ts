import { IAuthorizationFields } from '../../../types/commonTypes';
import { messages } from '@common/constants/messages';

export const loginFieldsConfig: IAuthorizationFields[] = [
  {
    label: messages.view.login.fields.inputEmail,
    name: 'email',
  },
  {
    label: messages.view.login.fields.inputPassword,
    name: 'password',
  },
];
