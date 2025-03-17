import { TableColumnsType } from 'antd';
import { USER_ROLES_OPTIONS } from '../../../../common/constants/options.ts';
import { IAllUsersMapped } from '../../../../types/commonTypes.ts';

export const columns: TableColumnsType<IAllUsersMapped> = [
  {
    title: 'Имя пользователя',
    width: 100,
    dataIndex: 'userName',
    key: 'userName',
    fixed: 'left',
  },
  {
    title: 'Роль',
    width: 100,
    dataIndex: 'role',
    key: 'role',
    fixed: 'left',
  },
  {
    title: 'Создал аккаунт',
    width: 100,
    dataIndex: 'created_at',
    key: 'created_at',
    fixed: 'left',
  },
  {
    title: 'Подтверждён',
    dataIndex: 'isVerified',
    key: 'isVerified',
    width: 100,
    fixed: 'left',
  },
  // {
  //   title: 'Действия',
  //   key: 'operation',
  //   fixed: 'right',
  //   width: 100,
  //   render: () => <a>Редактировать</a>,
  // },
];

export const filters = [
  { name: 'first_name', placeholder: 'Имя', type: 'input' },
  { name: 'second_name', placeholder: 'Фамилия', type: 'input' },
  { name: 'middle_name', placeholder: 'Отчество', type: 'input' },
  {
    name: 'role',
    placeholder: 'Роль пользователя',
    type: 'select',
    options: USER_ROLES_OPTIONS,
  },
];
