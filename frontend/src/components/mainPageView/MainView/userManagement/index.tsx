import { FC } from 'react';
import { IUserRoles } from '../../../../store/userStore.tsx';
import PageNotFound from '../../../commonComponents/PageNotFound';
import { Table } from 'antd';
import s from '../User/Grade/styles.module.scss';
import { columns, dataSource, filters } from './config.tsx';
import Filter from '../../../commonComponents/Filter';

interface IUserManagement {
  role: IUserRoles;
}

const UserManagement: FC<IUserManagement> = ({ role = 'user' }) => {
  if (role !== 'administrator') {
    return <PageNotFound />;
  }
  return (
    <div>
      <h1 className={'pageTitle'}>Управление пользователями</h1>
      <Filter fields={filters} />
      <Table
        className={s.table}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default UserManagement;
