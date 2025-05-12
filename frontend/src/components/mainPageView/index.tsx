import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import PageWrapper from '../commonComponents/PageWrapper';
import LayoutHeader from '../Layout/Header';
import LayoutSider from '../Layout/Sider';

import s from './styles.module.scss';
import ErrorBoundary from '../commonComponents/ErrorBoundary';
import { useEffect, useState } from 'react';
import Loader from '../Layout/Loader';

const MainPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, []);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutSider />
      <Loader isLoading={loading}>
        <Layout className={s.layout}>
          <LayoutHeader />
          <PageWrapper>
            <ErrorBoundary>
              <Outlet />
              {/*<Footer />*/}
            </ErrorBoundary>
          </PageWrapper>
        </Layout>
      </Loader>
    </Layout>
  );
};

export default MainPage;
