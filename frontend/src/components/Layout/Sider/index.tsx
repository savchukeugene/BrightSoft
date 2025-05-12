import s from '../../mainPageView/styles.module.scss';
import { Menu } from 'antd';
import { LEFT_SIDE_OPTIONS_LIST } from '@common/MenuConfigs/config';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../store/userStore';
import { Routes } from '@common/constants/routes';

const siderGroupes = ['tasks', 'user'] as const;
type ISiderGroupes = (typeof siderGroupes)[number];

const LayoutSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { role } = useUserStore();
  const { pathname } = useLocation();

  const defineNextRoute = (value: ISiderGroupes | string) => {
    switch (value) {
      case 'tasks':
        return Routes.quickCount;
      case 'user':
        return Routes.timetable;
      default:
        return '';
    }
  };

  return (
    <Sider
      className={s.sideBar}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme={'dark'}
    >
      <Menu
        theme={'dark'}
        defaultSelectedKeys={[pathname.split('/')[1]]}
        mode="inline"
        items={LEFT_SIDE_OPTIONS_LIST[role]}
        onClick={(value) =>
          navigate({
            pathname: `${value.key + defineNextRoute(value.key)}`,
          })
        }
      />
    </Sider>
  );
};

export default LayoutSider;
