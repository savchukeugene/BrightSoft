import {FC} from 'react';

import s from './styles.module.scss'
import {IUserStore, useUserStore} from "../../store/userStore.tsx";
import {notification} from "antd";

const Header: FC = () => {
    const user: IUserStore = useUserStore()
    return (
        <header className={s.header}>
            <section className={s.headerInfo}>
                <div className={s.userPhoto}>

                </div>
                <div className={s.userInfo}>
                    <p className={s.userName}>
                        {`Иванов Иван`}
                        <span
                            className={s.group}
                        >
                            {`группа 52`}
                        </span>
                    </p>

                    <p className={s.userDescription}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className={s.userLevel}>
                    <div
                        className={s.redRound}
                        onClick={() => {
                            localStorage.removeItem('brightSoftAuthToken')
                            user.logoutUser()
                            notification.success({
                                message: 'Успешно!',
                                description: 'Вы успешно вышли из аккаунта!',
                            })

                        }}
                    >

                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;
