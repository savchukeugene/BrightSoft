import { Button, Menu } from 'antd';
import { HEADER_OPTIONS } from '@common/MenuConfigs/config';
import Navigation from '../../commonComponents/Navigation';
import { Header } from 'antd/lib/layout/layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { routeGenerator } from '@common/utils/generatotrs';

import { Routes } from '@common/constants/routes';
import { useUserStore } from '../../../store/userStore';
import { messages } from '@common/constants/messages';
import { useState } from 'react';
import { LoginModal } from './authModals/LoginModal';
import { RegisterModal } from './authModals/RegisterModal';
import { useForm } from 'antd/es/form/Form';

const LayoutHeader = () => {
  const [registerUserForm] = useForm();
  const { user } = useUserStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const splitPathname: string[] = pathname.split('/');
  const options = HEADER_OPTIONS[pathname.split('/')[2]];
  const [authState, setAuthState] = useState<'' | 'login' | 'register'>('');

  const handleOpenModal = () => setAuthState('login');

  return (
    <>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {options ? (
          <Menu
            theme={'dark'}
            mode="horizontal"
            items={options}
            style={{ flex: 1, minWidth: 0 }}
            defaultSelectedKeys={[pathname.split('/')[3]]}
            onClick={(value) => {
              navigate({
                pathname: routeGenerator(
                  Routes.mainPage,
                  `/${splitPathname[2]}`,
                  `/${value.key}`,
                ),
              });
            }}
          />
        ) : (
          <></>
        )}
        {/*{user ? (*/}
        {/*  <Navigation />*/}
        {/*) : (*/}
        {/*  <>*/}
        {/*    <div></div>*/}
        {/*    <Button*/}
        {/*      type={'primary'}*/}
        {/*      onClick={handleOpenModal}*/}
        {/*    >*/}
        {/*      {messages.button.login}*/}
        {/*    </Button>*/}
        {/*  </>*/}
        {/*)}*/}
      </Header>
      {authState === 'login' && <LoginModal setAuthState={setAuthState} />}
      {authState === 'register' && (
        <RegisterModal
          setAuthState={setAuthState}
          form={registerUserForm}
          handleOnUserRegister={() => {}}
        />
      )}
    </>
  );
};

export default LayoutHeader;
