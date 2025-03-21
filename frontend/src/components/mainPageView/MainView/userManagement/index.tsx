import { FC, useEffect, useState } from 'react';
import { IUserRoles, useUserStore } from '../../../../store/userStore.tsx';
import PageNotFound from '../../../commonComponents/PageNotFound';
import { Modal, Table } from 'antd';
import s from '../User/Grade/styles.module.scss';
import { columns, filters } from './config.tsx';
import Filter from '../../../commonComponents/Filter';
import { deleteUser, getAllUsers, getUser } from './actions.ts';
import { IAllUsersMapped } from '../../../../types/commonTypes.ts';
import UserInfo from './userInfo/undex.tsx';
import { IUserMapped } from '../../../../types/userTypes.ts';
import { messages } from '../../../../common/constants/messages.ts';

interface IUserManagement {
  role: IUserRoles;
}

const UserManagement: FC<IUserManagement> = () => {
  const { role } = useUserStore();
  const [usersData, setUsersData] = useState<IAllUsersMapped[]>();
  const [userData, setUserData] = useState<IUserMapped>();
  const [isModalOpen, setIsModalOpen] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [isUserDeleteConfirmOpen, setIsUserDeleteConfirmOpen] = useState<string>('');
  const [isUserInfoLoading, setIsUserLoading] = useState<boolean>(false);
  !usersData &&
    getAllUsers(role)
      .then((data) => setUsersData(data?.data ?? []))
      .then(() => setLoading(false));
  const openModal = async (email: string): Promise<void> => {
    setIsUserLoading(true);
    setIsModalOpen(email);
  };
  useEffect(() => {
    !!isModalOpen && afterOpen();
  }, [isModalOpen]);

  const handleDeleteUser = async (id: string): Promise<void> => {
    await deleteUser(id);
    window.location.reload();
  };

  const afterOpen = async () => {
    const { data } = await getUser(role, isModalOpen);
    setUserData(data as IUserMapped);
    setIsUserLoading(false);
  };

  if (role !== 'administrator') {
    return <PageNotFound />;
  }
  return (
    <div>
      <h1 className={'pageTitle'}>Управление пользователями</h1>
      <Filter fields={filters} />
      <Table<IAllUsersMapped>
        loading={loading}
        className={s.table}
        dataSource={usersData}
        columns={(() => columns(openModal, setIsUserDeleteConfirmOpen))()}
        pagination={false}
      />
      <Modal
        open={!!isModalOpen}
        onCancel={() => setIsModalOpen('')}
        loading={isUserInfoLoading}
      >
        <UserInfo data={userData as IUserMapped} />
      </Modal>
      <Modal
        open={!!isUserDeleteConfirmOpen}
        onCancel={() => setIsUserDeleteConfirmOpen('')}
        onOk={() => handleDeleteUser(isUserDeleteConfirmOpen)}
        title={messages.modal.confirmUserDelete}
      />
    </div>
  );
};

export default UserManagement;
