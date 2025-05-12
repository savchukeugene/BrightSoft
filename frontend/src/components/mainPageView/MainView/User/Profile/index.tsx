import s from './styles.module.scss';
import {Button, Form, Input, Modal, Upload, message} from 'antd';
import {useEffect, useState} from 'react';
import {IUserData} from '../../../../../types/commonTypes';
import {UserOutlined} from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';
import {messages} from '@common/constants/messages';
import {IUserRoles, useUserStore} from '../../../../../store/userStore';
import {Outlet, useNavigate} from 'react-router-dom';
import {Routes} from '@common/constants/routes';
import {routeGenerator} from '@common/utils/generatotrs';
import {useForm} from 'antd/es/form/Form';
import {logout} from '../../../../Authorization/Login/actions';
import {IUserInfo} from '../../../../../types/userTypes';
import {getUserInfoPublic, updateUserProfile} from './actions';

const Profile = () => {
    const [form] = useForm();
    const navigate = useNavigate();
    const {user, logoutUser, role} = useUserStore();
    const [userInfo, setUserInfo] = useState<IUserData | undefined>();
    const [disabled, setDisabled] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [userInfoPublic, setUserInfoPublic] = useState<IUserInfo | undefined>();
    const roleMapper = (role: IUserRoles) => messages.userRoles[role];

    useEffect(() => {
        if (!user) return;
        if (!userInfoPublic) {
            getUserInfoPublic(user).then((data) => {
                if (!data) return;
                setUserInfoPublic(data);
                setUserInfo(data as IUserData);
                form.setFieldsValue({
                    firstName: data.firstName,
                    secondName: data.secondName,
                    fatherName: data.fatherName,
                    userName: data.userName,
                    email: data.email,
                    role: roleMapper(data.role),
                    password: data.password,
                });
            });
        }
    }, [user, form]);

    const handleRedirect = () => {
        setIsModalOpen(true);
        navigate({
            pathname: routeGenerator(Routes.mainPage, Routes.profile),
        });
    };

    const handleRequestsClick = () => {
        navigate(routeGenerator(Routes.mainPage, Routes.requests));
    };

    const updateUser = async (val: Partial<IUserData> & { password?: string }) => {
        if (!user) return;
        try {
            const data = await updateUserProfile({
                id: user,
                firstName: val.firstName,
                secondName: val.secondName,
                fatherName: val.fatherName,
                userName: val.userName,
                email: val.email,
                password: val.password,
            });
            setUserInfo(data);
            setUserInfoPublic((prev) => (prev ? {...prev, ...val} : prev));
            form.setFieldsValue(val); // Обновляем форму после сохранения
            setDisabled(true);
            message.success('Профиль успешно обновлен'); // Уведомление об успехе
        } catch (e) {
            console.error('Ошибка обновления профиля:', e);
        }
    };

    const handleLogout = () => logout(logoutUser);

    const handleImageUpload = (file: any) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            setProfileImage(e.target?.result as string);
        };
        reader.readAsDataURL(file);
        return false;
    };

    return (
        <main className={s.profileContainer}>
            {/* Левый блок (Основной) */}
            <section className={s.mainBlock}>
                <Upload beforeUpload={handleImageUpload} showUploadList={false} accept="image/*">
                    <div className={s.userPhoto}>
                        {profileImage ? (
                            <img src={profileImage} alt="Profile" className={s.profileImage}/>
                        ) : (
                            <UserOutlined/>
                        )}
                    </div>
                </Upload>
                <div className={s.userMainInfo}>
                    <span className={s.userName}>{userInfo?.userName || 'Имя пользователя'}</span>
                    <span className={s.userEmail}>{userInfo?.email || 'email@example.com'}</span>
                </div>
                <Button type="primary" danger onClick={handleLogout} className={s.logoutButton}>
                    Выйти из аккаунта
                </Button>
            </section>

            {/* Правый блок */}
            <div className={s.rightContainer}>
                {/* Информационный блок */}
                <section className={`${s.infoBlock} ${role !== 'administrator' ? s.infoBlockFull : ''}`}>
                    <h2>Личная информация</h2>
                    <Form
                        form={form}
                        className={s.form}
                        disabled={disabled}
                        onFinish={updateUser} // Используем updateUser вместо updateUserProfile
                        initialValues={userInfo}
                    >
                        <FormItem label="Фамилия" name="secondName">
                            {disabled ? (
                                <span>{form.getFieldValue('secondName') || 'Не указано'}</span>
                            ) : (
                                <Input placeholder={userInfo?.secondName || 'Введите фамилию'}/>
                            )}
                        </FormItem>
                        <FormItem label="Имя" name="firstName">
                            {disabled ? (
                                <span>{form.getFieldValue('firstName') || 'Не указано'}</span>
                            ) : (
                                <Input placeholder={userInfo?.firstName || 'Введите имя'}/>
                            )}
                        </FormItem>
                        <FormItem label="Отчество" name="fatherName">
                            {disabled ? (
                                <span>{form.getFieldValue('fatherName') || 'Не указано'}</span>
                            ) : (
                                <Input placeholder={userInfo?.fatherName || 'Введите отчество'}/>
                            )}
                        </FormItem>
                        <FormItem label="Имя пользователя" name="userName">
                            {disabled ? (
                                <span>{form.getFieldValue('userName') || 'Не указано'}</span>
                            ) : (
                                <Input placeholder={userInfo?.userName || 'Введите имя пользователя'}/>
                            )}
                        </FormItem>
                        <FormItem label="Email" name="email">
                            {disabled ? (
                                <span>{form.getFieldValue('email') || 'Не указано'}</span>
                            ) : (
                                <Input placeholder={userInfo?.email || 'Введите email'}/>
                            )}
                        </FormItem>
                        <FormItem label="Роль" name="role">
                            <span>{form.getFieldValue('role') || roleMapper(userInfo?.role!)}</span>
                        </FormItem>
                        <FormItem label="Пароль" name="password">
                            {disabled ? (
                                <span>******</span> // Не отображаем пароль в открытом виде
                            ) : (
                                <Input.Password placeholder="Введите новый пароль"/>
                            )}
                        </FormItem>
                        {!disabled && (
                            <div className={s.formButtons}>
                                <Button type="primary" htmlType="submit" className={s.saveButton}>
                                    Сохранить
                                </Button>
                                <Button onClick={() => setDisabled(true)} className={s.cancelButton}>
                                    Отменить
                                </Button>
                            </div>
                        )}
                    </Form>
                    {disabled && (
                        <div className={s.formButtons}>
                            <Button type="primary" onClick={() => setDisabled(false)} className={s.editButton}>
                                Редактировать
                            </Button>
                            <Button type="primary" onClick={handleRequestsClick} className={s.logoutButton}>
                                Мои заявки
                            </Button>
                        </div>
                    )}
                </section>

                {/* Административный блок (только для администратора) */}
                {role === 'administrator' && (
                    <section className={s.adminBlock}>
                        <h2>Администрирование</h2>
                        <Button type="primary" danger className={s.adminButton}>
                            Все заявки
                        </Button>
                        <Button type="primary" className={s.adminButtonUnlock}>
                            Закрытые заявки
                        </Button>
                    </section>
                )}
            </div>

            <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={false}>
                <Outlet/>
            </Modal>
        </main>
    );
};

export default Profile;