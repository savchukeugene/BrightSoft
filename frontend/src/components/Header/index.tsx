import {FC} from 'react';

import s from './styles.module.scss'
import {IUserStore, useUserStore} from "../../store/userStore.tsx";
import {notification} from "antd";
import {messages} from "../../common/messages/messages.ts";

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
                        {messages.defaultText}
                    </p>
                </div>
                <div className={s.userLevel}>
                    <div
                        className={s.redRound}
                        onClick={() => {
                            localStorage.removeItem('brightSoftAuthToken')
                            user.logoutUser()
                            notification.success({
                                message: messages.notification.success.messages.success,
                                description: messages.notification.success.description.successLogin,
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
