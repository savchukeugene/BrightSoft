import { IAuthorizationFields } from '../../../types/commonTypes.ts';
import { messages } from '../../../common/constants/messages.ts';

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
