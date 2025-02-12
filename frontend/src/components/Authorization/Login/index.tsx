import {FC} from 'react';
import '../../../styles/login.scss';
import {Button, Image, notification} from 'antd';
import logo from '../../../images/book-bookmark-minimalistic-svgrepo-com.svg';
import {NavigateFunction, useNavigate} from 'react-router-dom';
import {IUserStore, useUserStore} from "../../../store/userStore.tsx";
import {messages} from "../../../common/constants/messages.ts";
import {ROOTS} from "../../../common/constants/roots.ts";
import {routeGenerator} from "../../../common/utils/generatotrs.tsx";

const Login: FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const user: IUserStore = useUserStore()

    const handleLogin = () => {
        localStorage.setItem('brightSoftAuthToken', 'someValue')
        user.setUser('123');
        notification.success({
            message: messages.notification.success.messages.success,
            description: messages.notification.success.description.successLogin,
        })
        navigate(routeGenerator(ROOTS.mainPage, ROOTS.user, ROOTS.timetable));
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
