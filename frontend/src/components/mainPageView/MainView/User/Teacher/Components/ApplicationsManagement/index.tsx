import { Button, Flex, Modal, Table } from 'antd';
import { applicationManagementTableConfig } from './config';
import s from './styles.module.scss';
import { useEffect, useState } from 'react';
import { closeApplication, getApplications } from '../../actions';
import { IApplicationShowData } from '../../../../../../../types/applicationTypes';

export const ApplicationManagement = () => {
  const [isApplicationDataLoading, setIsApplicationDataLoading] = useState<boolean>(true);
  const [applicationData, setApplicationData] = useState();
  const [isDeniApplicationModalOpen, setIsDeniApplicationModalOpen] =
    useState<string>('');
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState<string>('');
  useEffect(() => {
    isApplicationDataLoading &&
      getApplications().then((data) => {
        setApplicationData(data);
        setIsApplicationDataLoading(false);
      });
  }, [isApplicationDataLoading]);
  const tableConfig = applicationManagementTableConfig(
    setIsDeniApplicationModalOpen,
    setIsAcceptModalOpen,
  );

  const handleDeniApplication = async () => {
    await closeApplication(isDeniApplicationModalOpen, 'blocked');
    handleCloseDeniApplicationModal();
    setIsApplicationDataLoading(true);
  };
  const handleCloseDeniApplicationModal = () => setIsDeniApplicationModalOpen('');
  const handleCloseAcceptModal = () => setIsAcceptModalOpen('');
  const handleAcceptApplication = async () => {
    await closeApplication(isAcceptModalOpen, 'closed');
    handleCloseAcceptModal();
    setIsApplicationDataLoading(true);
  };
  return (
    <section>
      <Table<IApplicationShowData>
        loading={isApplicationDataLoading}
        className={s.table}
        rowClassName={(record: IApplicationShowData) =>
          record.status === 'closed' ? s.altRow : record.status === 'blocked' && s.blocked
        }
        columns={tableConfig}
        dataSource={applicationData}
        pagination={false}
      />
      <Modal
        open={!!isDeniApplicationModalOpen}
        onCancel={handleCloseDeniApplicationModal}
        footer={
          <Flex gap={10}>
            <Button onClick={handleCloseDeniApplicationModal}>Отменить</Button>
            <Button
              danger
              type={'primary'}
              onClick={handleDeniApplication}
            >
              Отклонить
            </Button>
          </Flex>
        }
        title={`Вы действительно хотите отклонить заявку на покупку курса?`}
      />
      <Modal
        open={!!isAcceptModalOpen}
        onCancel={handleCloseAcceptModal}
        footer={
          <Flex gap={10}>
            <Button onClick={handleCloseAcceptModal}>Отменить</Button>
            <Button
              type={'primary'}
              onClick={handleAcceptApplication}
            >
              Одобрить
            </Button>
          </Flex>
        }
        title={`Вы действительно хотите одобрить заявку на покупку курса?`}
      />
    </section>
  );
};
