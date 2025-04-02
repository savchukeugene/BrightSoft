import { TableColumnsType } from 'antd';
import { USER_ROLES_OPTIONS } from '../../../../common/constants/options';
import { IAllUsersMapped } from '../../../../types/commonTypes';
import { Dispatch, SetStateAction } from 'react';
import { IField } from '../../../../types/filterTypes';
import { messages } from '../../../../common/constants/messages';

export const columns = (
  openModal: (email: string) => Promise<void>,
  deleteUser: Dispatch<SetStateAction<string>>,
): TableColumnsType<IAllUsersMapped> => [
  {
    title: messages.view.main.userManagement.table.userName,
    width: 100,
    dataIndex: 'userName',
    key: 'userName',
    fixed: 'left',
  },
  {
    title: messages.view.main.userManagement.table.role,
    width: 100,
    dataIndex: 'role',
    key: 'role',
    fixed: 'left',
  },
  {
    title: messages.view.main.userManagement.table.created_at,
    width: 100,
    dataIndex: 'created_at',
    key: 'created_at',
    fixed: 'left',
  },
  {
    title: messages.view.main.userManagement.table.status,
    dataIndex: 'status',
    key: 'status',
    width: 100,
    fixed: 'left',
  },
  {
    title: messages.view.main.userManagement.table.operation,
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
