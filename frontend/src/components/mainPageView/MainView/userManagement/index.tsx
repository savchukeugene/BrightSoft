import { FC } from 'react';
import { IUserRoles } from '../../../../store/userStore.tsx';
import PageNotFound from '../../../commonComponents/PageNotFound';

interface IUserManagement {
  role: IUserRoles;
}

const UserManagement: FC<IUserManagement> = ({ role = 'user' }) => {
  if (role !== 'administrator') {
    return <PageNotFound></PageNotFound>;
  }
  return <>1123123</>;
};

export default UserManagement;
