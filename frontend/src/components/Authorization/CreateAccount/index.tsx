import { FC } from 'react';
import { Button, Image } from 'antd';
import logo from '../../../images/book-bookmark-minimalistic-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';

const CreateAccount: FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/main');
  };

  return (
    <div className={'login'}>
      <form className={'loginForm'}>
        <Image
          src={logo}
          width={200}
          preview={false}
        />
        <div className={'loginFormInputs'}>
          <div className={'formItem'}>
            Введите e-mail
            <input className={'loginInput'} />
          </div>
          <div className={'formItem'}>
            Придумайте пароль
            <input
              type={'password'}
              className={'loginInput'}
            />
          </div>
          <div className={'formItem'}>
            Подтвердите пароль
            <input
              type={'password'}
              className={'loginInput'}
            />
          </div>

          <Button
            htmlType={'submit'}
            onClick={handleLogin}
          >
            Войти
          </Button>
        </div>
      </form>
      <div className="footer">
        <a href="/login">Уже есть аккаунт? Войти</a>
      </div>
    </div>
  );
};

export default CreateAccount;
