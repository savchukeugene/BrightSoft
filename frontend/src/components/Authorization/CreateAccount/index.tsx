import { FC } from 'react';
import { Button, notification } from 'antd';
import { messages } from '../../../common/constants/messages';
import { register } from './actions';
import { IRegisterDTO } from '../../../types/commonTypes';
import {
  authorizationFieldsGenerator,
  collectFieldsData,
} from '../../../common/utils/generatotrs';
import { createAccountFieldsConfig } from './config';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../common/constants/routes';

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
        pathname: Routes.login,
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
      <footer className="footer">
        <a href="/login">Уже есть аккаунт? Войти</a>
      </footer>
    </div>
  );
};

export default CreateAccount;
