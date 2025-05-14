import { Badge, Button, Flex, TableProps } from 'antd';
import {
  ApplicationStatusesType,
  IApplicationShowData,
} from '../../../../../../../types/applicationTypes';
import type { PresetStatusColorType } from 'antd/es/_util/colors';

type IRussianStatuses = {
  [key in ApplicationStatusesType]: string;
};

const getRussianStatus: IRussianStatuses = {
  active: 'В процессе',
  blocked: 'Отклонён',
  closed: 'Одобрен',
  frozen: 'Заморожен',
};

const findStatus = (status: ApplicationStatusesType): Partial<PresetStatusColorType> => {
  switch (status) {
    case 'active':
      return 'processing';
    case 'frozen':
      return 'warning';
    case 'closed':
      return 'success';
    case 'blocked':
      return 'error';
  }
};

export const applicationManagementTableConfig: TableProps<IApplicationShowData>['columns'] =
  [
    {
      title: 'Имя курса',
      dataIndex: 'courseName',
      key: 'courseName',
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
      dataIndex: 'groupNumber',
      key: 'groupNumber',
    },
    {
      title: 'Статус заявки',
      dataIndex: 'status',
      key: 'status',
      render: (_, record: IApplicationShowData) => {
        const status: Partial<PresetStatusColorType> = findStatus(record.status);
        return (
          <Badge
            status={status}
            text={getRussianStatus[record.status]}
          />
        );
      },
    },
    {
      title: 'Контактная информация',
      dataIndex: 'contactData',
      key: 'contactData',
    },
    {
      title: 'Действия',
      key: 'action',
      render: (_, record: IApplicationShowData) =>
        record.status === 'active' && (
          <Flex gap={8}>
            <Button type={'primary'}>Одобрить</Button>
            <Button
              style={{ color: 'red' }}
              type={'link'}
            >
              Отклонить
            </Button>
          </Flex>
        ),
    },
  ];
