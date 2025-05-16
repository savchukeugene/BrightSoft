import { useEffect, useState } from 'react';
import { ILandingPagesInDTO, ICreateLandingPagesOutDTO } from '../../../../types/landingPageTypes';
import { createLandingPage, getAllLandingPages } from './actions';
import {Button, Modal, notification, Popconfirm, Space, Table, TablePaginationConfig, Tooltip} from 'antd';
import s from './styles.module.scss';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { CreateLandingPageModal } from './Modals/CreateLandingPageModal';
import {DeleteOutlined, FormOutlined} from "@ant-design/icons";

const formatDate = (date: string | number | undefined | null): string => {
  if (!date) {
    return 'Дата недоступна';
  }

  let dateObj: Date;

  if (typeof date === 'number') {
    dateObj = new Date(date);
  } else {
    dateObj = new Date(date);
  }

  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const seconds = String(dateObj.getSeconds()).padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};

export const LandingPages2 = () => {
  const { id } = useParams();
  const [createLandingPageForm] = useForm();
  const [landingPagesData, setLandingPagesData] = useState<ILandingPagesInDTO[]>([]);
  const [isLandingPagesDataLoading, setIsLandingPagesDataLoading] = useState<boolean>(true);
  const [isCreateLandingPagesModalOpen, setIsCreateLandingPagesModalOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const pageSize = 7;

  useEffect(() => {
    if (isLandingPagesDataLoading) {
      getAllLandingPages()
        .then((data: ILandingPagesInDTO[]) => setLandingPagesData(data))
        .finally(() => setIsLandingPagesDataLoading(false));
    }
  }, [isLandingPagesDataLoading]);

  const handleModalClose = () => {
    setIsCreateLandingPagesModalOpen(false);
    createLandingPageForm.resetFields();
  };

  const handleCreateLandingPage = async (values: ICreateLandingPagesOutDTO) => {
    const data = await createLandingPage(values);
    if (!data) {
      return notification.error({
        message: 'Произошла ошибка при создании страницы',
      });
    }
    setIsLandingPagesDataLoading(true);
    setIsCreateLandingPagesModalOpen(false);
  };

  const columns = [
    {
      title: 'Название',
      dataIndex: 'name',
      width: 150,
      key: 'name',
      render: (text: string, record: ILandingPagesInDTO) =>
          record.id ? <Link to={`${pathname}/${record.id}`}>{text}</Link> : null,
      sorter: (a: ILandingPagesInDTO, b: ILandingPagesInDTO) => (a.name || '').localeCompare(b.name || ''),
      sortDirections: ['ascend', 'descend'],

    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
      sorter: (a: ILandingPagesInDTO, b: ILandingPagesInDTO) => (a.description || '').localeCompare(b.description || ''),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Дата добавления',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 170,
      render: (text: string | number | undefined | null) => formatDate(text),
      sorter: (a: ILandingPagesInDTO, b: ILandingPagesInDTO) => {
        const dateA = a.createdAt || '';
        const dateB = b.createdAt || '';
        return dateA.localeCompare(dateB);
      },
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Дата изменения',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: 170,
      render: (text: string | number | undefined | null) => formatDate(text),
      sorter: (a: ILandingPagesInDTO, b: ILandingPagesInDTO) => {
        const dateA = a.createdAt || '';
        const dateB = b.createdAt || '';
        return dateA.localeCompare(dateB);
      },
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Действия',
      key: 'actions',
      width: 100,
      render: (_: any, record: ILandingPagesInDTO) => (
        <Space size="middle">
          <Link to={`${pathname}/${record.id}`}>
            <Tooltip title={'Править'}>
              <FormOutlined style={{ fontSize: '20px' }} />
            </Tooltip>
          </Link>
          <Popconfirm
              title="Вы уверены, что хотите удалить?"
              onConfirm={() => console.log('Удалить', record.id)}
              okText="Да"
              cancelText="Нет"
          >
            <DeleteOutlined style={{ fontSize: '20px', color: 'red', marginLeft: '8px', cursor: 'pointer' }} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const onChange = (pagination: TablePaginationConfig, filters: Record<string, string[] | null>, sorter: any) => {
    console.log('Параметры таблицы:', pagination, filters, sorter);
  };

  return (
    <main>
      {id ? (
        <Outlet />
      ) : (
        <>
          <div className={s.header}>
            <h1>Рекламные страницы</h1>
            <Button
              type={'primary'}
              style={{
                marginTop: '20px',
              }}
              onClick={() => setIsCreateLandingPagesModalOpen(true)}
            >
              Создать
            </Button>
          </div>
          <section className={s.section}>
            <section className={s.section}>
              <Table
                  dataSource={landingPagesData}
                  columns={columns}
                  rowKey="id"
                  pagination={{pageSize}}
                  loading={isLandingPagesDataLoading}
                  onChange={onChange}/>
              <Modal />
            </section>
          </section>
        </>
      )}
      <CreateLandingPageModal
        isCreateLandingPageModalOpen={isCreateLandingPagesModalOpen}
        createLandingPageForm={createLandingPageForm}
        handleCreateLandingPage={handleCreateLandingPage}
        handleModalClose={handleModalClose}
      />
    </main>
  );
};
