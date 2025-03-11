import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import PageWrapper from '../commonComponents/PageWrapper';
import { Header } from 'antd/lib/layout/layout';
import Footer from '../Layout/Footer';
import { HEADER_OPTIONS, LEFT_SIDE_MENU } from './headerConfig/config.tsx';
import s from './styles.module.scss';

const { Sider } = Layout;

const MainPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

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
          defaultSelectedKeys={['1']}
          mode="inline"
          items={LEFT_SIDE_MENU}
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
            items={HEADER_OPTIONS['user']}
            style={{ flex: 1, minWidth: 0 }}
            defaultSelectedKeys={['timetable']}
            onClick={(value) =>
              navigate({
                pathname: `${value.key}`,
              })
            }
          />
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
