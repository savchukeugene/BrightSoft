import { Button, Flex } from 'antd';

export const applicationManagementTableConfig = [
  {
    title: 'Имя курса',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Пользователь',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: 'Тип курса',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Номер группы',
    dataIndex: 'groupName',
    key: 'groupName',
  },
  {
    title: 'Статус заявки',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Контактная информация',
    dataIndex: 'contactData',
    key: 'contactData',
  },
  {
    title: 'Действия',
    key: 'action',
    render: () => (
      <Flex gap={8}>
        <Button type={'link'}>Одобрить</Button>
        <Button type={'link'}>Отклонить</Button>
      </Flex>
    ),
  },
];
