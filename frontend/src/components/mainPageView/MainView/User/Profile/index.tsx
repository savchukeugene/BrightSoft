import s from './styles.module.scss';
import { Button, Form, Input, Modal } from 'antd';
import { getUserInfo } from '@common/utils/globalActions';
import { useState } from 'react';
import { IUserData } from '../../../../../types/commonTypes';
import { UserOutlined } from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';
import { messages } from '@common/constants/messages';
import { IUserRoles, useUserStore } from '../../../../../store/userStore';
import { Outlet, useNavigate } from 'react-router-dom';
import { Routes } from '@common/constants/routes';
import { routeGenerator } from '@common/utils/generatotrs';
import AxiosService from '../../../../../axios/AxiosService';
import { useForm } from 'antd/es/form/Form';
import { logout } from '../../../../Authorization/Login/actions';
import { API_UPDATE_USER } from '@common/constants/api';

const Profile = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const { user, logoutUser } = useUserStore();
  const [userInfo, setUserInfo] = useState<IUserData>();
  const [disabled, setDisabled] = useState<boolean>(true);
  const getData = async () => {
    const data = await getUserInfo(localStorage.getItem('access_token')!);
    setUserInfo(data);
  };
  !userInfo && getData();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const roleMapper = (role: IUserRoles) => messages.userRoles[role];

  const handleRedirect = () => {
    setIsModalOpen(true);
    navigate({
      pathname: routeGenerator(Routes.mainPage, Routes.profile),
    });
  };

  const updateUser = async (val) => {
    try {
      const { data } = await AxiosService.POST<IUserData>(API_UPDATE_USER, {
        data: { id: user, ...val },
      });
      setUserInfo(data?.data);
    } catch (e) {
      console.log(e);
    }
    form.resetFields();
    setDisabled(true);
  };

  const handleLogout = () => logout(logoutUser);

  return (
    <main className={s.mainProfile}>
      <section className={s.userInfo}>
        <div className={s.userLogo}>
          <UserOutlined />
        </div>

        <div className={s.userInitials}>
          {userInfo?.userName}
          <Button
            type={'primary'}
            danger
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </Button>
        </div>
      </section>
      <section className={s.personalInfo}>
        <text>Личная информация</text>
        <Form
          style={{
            width: '60%',
            marginTop: '20px',
          }}
          form={form}
          className={s.form}
          disabled={disabled}
          onFinish={(val) => updateUser(val)}
          initialValues={userInfo}
        >
          <FormItem
            label={'Фамилия'}
            name={'secondName'}
          >
            {disabled ? (
              userInfo?.secondName
            ) : (
              <Input placeholder={userInfo?.secondName} />
            )}
          </FormItem>
          <FormItem
            label={'Имя'}
            name={'firstName'}
          >
            {disabled ? userInfo?.firstName : <Input placeholder={userInfo?.firstName} />}
          </FormItem>
          <FormItem
            label={'Отчество'}
            name={'fatherName'}
          >
            {disabled ? (
              userInfo?.fatherName
            ) : (
              <Input placeholder={userInfo?.fatherName} />
            )}
          </FormItem>
          <FormItem
            label={'Имя пользователя'}
            name={'userName'}
          >
            {disabled ? userInfo?.userName : <Input placeholder={userInfo?.userName} />}
          </FormItem>
          <FormItem
            label={'Роль'}
            name={'role'}
          >
            {roleMapper(userInfo?.role!)}
          </FormItem>
          <FormItem
            label={'Email'}
            name={'email'}
          >
            {userInfo?.email}
          </FormItem>
          <FormItem
            label={'Пароль'}
            name={'password'}
          >
            {disabled ? userInfo?.password : <Input value={userInfo?.password} />}
          </FormItem>
          <FormItem
            label={'Устройства'}
            name={'devices'}
          >
            <Button
              disabled={false}
              type={'default'}
              onClick={handleRedirect}
            >
              Посмотреть устройства
            </Button>
          </FormItem>
          {!disabled && (
            <div style={{ display: 'flex', gap: '10px' }}>
              <Button
                type={'primary'}
                htmlType={'submit'}
                onClick={() => setDisabled(false)}
              >
                Сохранить
              </Button>
              <Button onClick={() => setDisabled(true)}>Отменить</Button>
            </div>
          )}
        </Form>
        {disabled && (
          <Button
            type={'primary'}
            onClick={() => setDisabled(false)}
          >
            Редактировать
          </Button>
        )}
        <Modal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={false}
        >
          <Outlet />
        </Modal>
      </section>
    </main>
  );
};

export default Profile;
