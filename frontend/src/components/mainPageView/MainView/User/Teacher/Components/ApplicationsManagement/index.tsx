import { Table } from 'antd';
import { applicationManagementTableConfig } from './config';
import s from './styles.module.scss';
import { useEffect, useState } from 'react';
import { getApplications } from '../../actions';
export const ApplicationManagement = () => {
  const [isApplicationDataLoading, setIsApplicationDataLoading] = useState<boolean>(true);
  const [applicationData, setApplicationData] = useState();
  useEffect(() => {
    isApplicationDataLoading &&
      getApplications().then((data) => {
        setApplicationData(data);
        setIsApplicationDataLoading(false);
      });
  }, [isApplicationDataLoading]);

  return (
    <section>
      <Table
        loading={isApplicationDataLoading}
        className={s.table}
        columns={applicationManagementTableConfig}
        dataSource={applicationData}
        pagination={false}
      />
    </section>
  );
};
