import { Menu } from 'antd';
import { HEADER_OPTIONS } from '@common/MenuConfigs/config';
import Navigation from '../../commonComponents/Navigation';
import { Header } from 'antd/lib/layout/layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { routeGenerator } from '../../../common/utils/generatotrs';

import { Routes } from '../../../common/constants/routes';

const LayoutHeader = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const splitPathname: string[] = pathname.split('/');

  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <Menu
        theme="dark"
        mode="horizontal"
        items={HEADER_OPTIONS[pathname.split('/')[2]]}
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
      <Navigation />
    </Header>
  );
};

export default LayoutHeader;
