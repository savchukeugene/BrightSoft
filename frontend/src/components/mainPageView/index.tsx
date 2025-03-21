import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import PageWrapper from '../commonComponents/PageWrapper';
import { Header } from 'antd/lib/layout/layout';
import Footer from '../Layout/Footer';
import { HEADER_OPTIONS, LEFT_SIDE_OPTIONS_LIST } from './headerConfig/config.tsx';
import s from './styles.module.scss';
import { useUserStore } from '../../store/userStore.tsx';
import Navigation from '../commonComponents/Navigation';

const { Sider } = Layout;

const MainPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { role } = useUserStore();
  const splitPathname: string[] = pathname.split('/');

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        className={s.sideBar}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          theme={'dark'}
          defaultSelectedKeys={['user/grade']}
          mode="inline"
          items={LEFT_SIDE_OPTIONS_LIST[role]}
          onClick={(value) =>
            navigate({
              pathname: `${value.key}`,
            })
          }
        />
      </Sider>
      <Layout
        style={{
          background: '#002140',
          color: 'white',
        }}
      >
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            items={HEADER_OPTIONS[pathname.split('/')[2]]}
            style={{ flex: 1, minWidth: 0 }}
            defaultSelectedKeys={['grade']}
            onClick={(value) =>
              navigate({
                pathname: pathname.replace(
                  splitPathname[splitPathname.length - 1],
                  value.key,
                ),
              })
            }
          />
          <Navigation />
        </Header>
        <PageWrapper>
          <Outlet />
          <Footer />
        </PageWrapper>
      </Layout>
    </Layout>
  );
};

export default MainPage;
