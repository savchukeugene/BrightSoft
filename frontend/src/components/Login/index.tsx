import {FC} from 'react';
import '../../styles/login.scss';
import {Button, Image, notification} from 'antd';
import logo from '../../images/book-bookmark-minimalistic-svgrepo-com.svg';
import {useNavigate} from 'react-router-dom';
import {IUserStore, useUserStore} from "../../store/userStore.tsx";

const Login: FC = () => {
    const navigate = useNavigate();
    const user: IUserStore = useUserStore()

    const handleLogin = () => {
        user.setUser('123');
        notification.success({
            message: 'Успешно!',
            description: 'Вы успешно вошли в аккаунт!',
        })
        navigate('/mainPage');
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
                        Введите логин
                        <input className={'loginInput'}/>
                    </div>
                    <div className={'formItem'}>
                        Введите пароль
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
                <a href="/createAccount">Нет аккаунта? Пройти регистрацию</a>
                <a href="#">Забыли пароль?</a>
            </div>
        </div>
    );
};

export default Login;
