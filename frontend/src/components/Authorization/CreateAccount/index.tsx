import { FC } from 'react';
import { Button } from 'antd';
import { messages } from '../../../common/constants/messages.ts';
import { register } from './actions.ts';
import { IRegisterDTO } from '../../../types/commonTypes.ts';
import {
  authorizationFieldsGenerator,
  collectFieldsData,
} from '../../../common/utils/generatotrs.tsx';
import { createAccountFieldsConfig } from './config.ts';

const CreateAccount: FC = () => {
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const formData: FormData = new FormData(event.target as HTMLFormElement);
    const dataTest: IRegisterDTO = collectFieldsData<IRegisterDTO>(formData, [
      'name',
      'email',
      'password',
      'passwordRepeat',
    ]);
    await register(dataTest);
  };

  return (
    <div className={'login'}>
      <form
        onSubmit={(values) => handleLogin(values)}
        className={'loginForm'}
      >
        <div className={'loginFormInputs'}>
          {authorizationFieldsGenerator(createAccountFieldsConfig)}
          <Button htmlType={'submit'}>{messages.button.create}</Button>
        </div>
      </form>
      <div className="footer">
        <a href="/login">Уже есть аккаунт? Войти</a>
      </div>
    </div>
  );
};

export default CreateAccount;
