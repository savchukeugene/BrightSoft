import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import PageWrapper from '../commonComponents/PageWrapper';
import { Header } from 'antd/lib/layout/layout';
import Footer from '../Layout/Footer';
import { HEADER_OPTIONS, LEFT_SIDE_OPTIONS_LIST } from './headerConfig/config.tsx';
import s from './styles.module.scss';
import { useUserStore } from '../../store/userStore.tsx';
import { logout } from '../Authorization/Login/actions.ts';
import { StarFilled } from '@ant-design/icons';

const { Sider } = Layout;

const MainPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { role } = useUserStore();
  const splitPathname: string[] = pathname.split('/');
  const { logoutUser } = useUserStore();

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
          defaultSelectedKeys={['1']} //TODO fix
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
          <nav className={s.nav}>
            {role === 'user' && (
              <div className={s.stars}>
                <StarFilled className={s.starIcon} />
                <h3>23</h3>
              </div>
            )}
            <div
              onClick={() => logout(logoutUser)}
              className={s.logout}
            />
          </nav>
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
