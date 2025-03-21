import { FC } from 'react';
import { Button, notification } from 'antd';
import { messages } from '../../../common/constants/messages.ts';
import { register } from './actions.ts';
import { IRegisterDTO } from '../../../types/commonTypes.ts';
import {
  authorizationFieldsGenerator,
  collectFieldsData,
} from '../../../common/utils/generatotrs.tsx';
import { createAccountFieldsConfig } from './config.ts';
import { useNavigate } from 'react-router-dom';
import { ROOTS } from '../../../common/constants/roots.ts';

const CreateAccount: FC = () => {
  const navigate = useNavigate();
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const formData: FormData = new FormData(event.target as HTMLFormElement);
    const dataTest: IRegisterDTO = collectFieldsData<IRegisterDTO>(formData, [
      'name',
      'email',
      'password',
      'passwordRepeat',
    ]);
    const { data } = await register(dataTest);
    if (data) {
      notification.success({
        message: messages.notification.success.messages.success,
        description: messages.notification.success.description.successRegistration,
      });
      navigate({
        pathname: ROOTS.login,
      });
    }
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
