import { FC } from 'react';
import '../../../styles/login.scss';
import { Button, Image } from 'antd';
import logo from '../../../images/book-bookmark-minimalistic-svgrepo-com.svg';
import {
  authorizationFieldsGenerator,
  collectFieldsData,
} from '@common/utils/generatotrs';
import { loginFieldsConfig } from './config';
import { login } from './actions';
import { ILoginDTO } from '../../../types/commonTypes';
import { messages } from '@common/constants/messages';
import { useUserStore } from '../../../store/userStore';
import { Routes } from '@common/constants/routes';

const Login: FC = () => {
  const { setUser } = useUserStore();
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: FormData = new FormData(event.target as HTMLFormElement);
    const userData: ILoginDTO = collectFieldsData(formData, ['email', 'password']);
    const data = await login(userData);

    if (data) {
      setUser(data.access_token);
    }
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
      <footer className="footer">
        <a href={Routes.createAccount}>{messages.links.noAccount}</a>
        <a href={Routes.defaultRoute}>{messages.links.forgotPassword}</a>
      </footer>
    </div>
  );
};

export default Login;
