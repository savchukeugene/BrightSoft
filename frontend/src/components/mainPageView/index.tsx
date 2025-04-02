import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import PageWrapper from '../commonComponents/PageWrapper';
import Footer from '../Layout/Footer';
import LayoutHeader from '../Layout/Header';
import LayoutSider from '../Layout/Sider';

import s from './styles.module.scss';
import ErrorBoundary from '../commonComponents/ErrorBoundary';

const MainPage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutSider />
      <Layout className={s.layout}>
        <LayoutHeader />
        <PageWrapper>
          <ErrorBoundary>
            <Outlet />
            <Footer />
          </ErrorBoundary>
        </PageWrapper>
      </Layout>
    </Layout>
  );
};

export default MainPage;
