import { FC, useState } from 'react';
import { IUserRoles, useUserStore } from '../../../../store/userStore.tsx';
import PageNotFound from '../../../commonComponents/PageNotFound';
import { Table } from 'antd';
import s from '../User/Grade/styles.module.scss';
import { columns, filters } from './config.tsx';
import Filter from '../../../commonComponents/Filter';
import { getAllUsers } from './actions.ts';
import { IAllUsersMapped } from '../../../../types/commonTypes.ts';

interface IUserManagement {
  role: IUserRoles;
}

const UserManagement: FC<IUserManagement> = () => {
  const { role } = useUserStore();
  const [userData, setUserData] = useState<IAllUsersMapped[]>();
  !userData && getAllUsers(role).then((data) => setUserData(data?.data ?? []));

  if (role !== 'administrator') {
    return <PageNotFound />;
  }
  console.log(userData);
  return (
    <div>
      <h1 className={'pageTitle'}>Управление пользователями</h1>
      <Filter fields={filters} />
      <Table<IAllUsersMapped>
        className={s.table}
        dataSource={userData}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default UserManagement;
