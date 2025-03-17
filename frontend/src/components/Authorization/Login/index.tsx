import { FC } from 'react';
import '../../../styles/login.scss';
import { Button, Image } from 'antd';
import logo from '../../../images/book-bookmark-minimalistic-svgrepo-com.svg';
import {
  authorizationFieldsGenerator,
  collectFieldsData,
} from '../../../common/utils/generatotrs.tsx';
import { loginFieldsConfig } from './config.ts';
import { loginBazevich } from './actions';
import { ILoginDTO } from '../../../types/commonTypes';
import { messages } from '../../../common/constants/messages';

const Login: FC = () => {
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: FormData = new FormData(event.target as HTMLFormElement);
    const data: ILoginDTO = collectFieldsData(formData, ['email', 'password']);
    const userData = await loginBazevich(data);
    console.log(userData);

    // TODO after login logic
  };

  return (
    <div className={'login'}>
      <form
        onSubmit={(values) => handleLogin(values)}
        className={'loginForm'}
      >
        <Image
          src={logo}
          width={200}
          preview={false}
        />
        <div className={'loginFormInputs'}>
          {authorizationFieldsGenerator(loginFieldsConfig)}
          <Button htmlType={'submit'}>{messages.button.login}</Button>
        </div>
      </form>
      <div className="footer">
        <a href="/register">Нет аккаунта? Создать</a>
        <a href="#">Забыли пароль?</a>
      </div>
    </div>
  );
};

export default Login;
