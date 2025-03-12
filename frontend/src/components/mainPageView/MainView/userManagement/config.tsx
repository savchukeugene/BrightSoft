import { TableColumnsType } from 'antd';

export interface DataType {
  key: React.Key;
  name: string;
  address: string;
  second_name: string;
  middle_name: string;
  role: string;
}

export const dataSource: DataType[] = [
  {
    key: '1',
    name: 'Иван',
    address: '9',
    second_name: 'Иванов',
    middle_name: 'Иванович',
    role: 'Администратор',
  },
  {
    key: '2',
    name: 'Иван',
    address: '9',
    second_name: 'Иванов',
    middle_name: 'Иванович',
    role: 'Администратор',
  },
];

export const columns: TableColumnsType<DataType> = [
  {
    title: 'Имя',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Фамилия',
    width: 100,
    dataIndex: 'second_name',
    key: 'second_name',
    fixed: 'left',
  },
  {
    title: 'Отчество',
    width: 100,
    dataIndex: 'middle_name',
    key: 'middle_name',
    fixed: 'left',
  },
  { title: 'Роль', dataIndex: 'role', key: 'role' },
  {
    title: 'Действия',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>Редактировать</a>,
  },
];
