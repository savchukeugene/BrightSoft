import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import PageWrapper from '../commonComponents/PageWrapper';
import Footer from '../Layout/Footer';
import LayoutHeader from '../Layout/Header';
import LayoutSider from '../Layout/Sider';

import s from './styles.module.scss';

const MainPage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutSider />
      <Layout className={s.layout}>
        <LayoutHeader />
        <PageWrapper>
          <Outlet />
          <Footer />
        </PageWrapper>
      </Layout>
    </Layout>
  );
};

export default MainPage;
