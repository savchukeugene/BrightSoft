import { TableColumnsType } from 'antd';
import { USER_ROLES_OPTIONS } from '../../../../common/constants/options.ts';
import { IAllUsersMapped } from '../../../../types/commonTypes.ts';
import { Dispatch, SetStateAction } from 'react';
import { IField } from '../../../../types/filterTypes.ts';

export const columns = (
  openModal: (email: string) => Promise<void>,
  deleteUser: Dispatch<SetStateAction<string>>,
): TableColumnsType<IAllUsersMapped> => [
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
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'Действия',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: (value: IAllUsersMapped) => (
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a onClick={() => openModal(value.email as string)}>Просмотр</a>
        <a onClick={() => deleteUser(value.id)}>Удалить</a>
      </div>
    ),
  },
];

export const filters: IField[] = [
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
