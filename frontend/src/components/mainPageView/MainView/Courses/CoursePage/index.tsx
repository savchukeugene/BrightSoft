import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCourseInfo } from '../actions';
import { ICourseData, ILessonDataInCourseDTO } from '../../../../../types/coursesTypes';
import { Button, Flex, Form, Input, List, Modal, Tooltip } from 'antd';
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  InboxOutlined,
  LineChartOutlined,
} from '@ant-design/icons';

import s from './styles.module.scss';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import Dragger from 'antd/es/upload/Dragger';

export const CoursePage = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState<ICourseData | null>(null);
  const [isCourseDataLoading, setIsCourseDataLoading] = useState<boolean>(true);
  const [isCreateLessonModalOpen, setIsCreateLessonModalOpen] = useState<boolean>(false);
  useEffect(() => {
    if (isCourseDataLoading) {
      getCourseInfo(id!)
        .then((data: ICourseData | null) => setCourseData(data!))
        .finally(() => setIsCourseDataLoading(false));
    }
  }, [isCourseDataLoading]);

  return (
    <>
      <h1>Курс {courseData?.name ?? 'Неизвестный курс'}</h1>
      <h3>{Array.from({ length: 10 }).map(() => ` ${courseData?.description}`)}</h3>
      <List
        className={s.list}
        header={'Уроки'}
        itemLayout="horizontal"
        dataSource={courseData?.lessons}
        renderItem={(item: ILessonDataInCourseDTO, index) => (
          <List.Item key={index}>
            <Flex
              className={s.flex}
              justify={'space-between'}
            >
              <List.Item.Meta
                avatar={<LineChartOutlined />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.description ?? 'Нет описания'}
              />
              <Flex
                className={s.buttons}
                gap={10}
              >
                {item.status === 'hidden' ? (
                  <Tooltip title={'Открыть урок'}>
                    <EyeOutlined className={s.viewButton} />
                  </Tooltip>
                ) : (
                  <Tooltip title={'Скрыть урок'}>
                    <EyeInvisibleOutlined className={s.viewButton} />
                  </Tooltip>
                )}
                <DeleteOutlined
                  className={s.deleteButton}
                  onClick={() => console.log(1)}
                />
              </Flex>
            </Flex>
          </List.Item>
        )}
      />
      <Button
        type={'primary'}
        style={{ margin: '20px 0' }}
        onClick={() => setIsCreateLessonModalOpen(true)}
      >
        Добавить урок
      </Button>
      <Modal
        open={isCreateLessonModalOpen}
        onCancel={() => setIsCreateLessonModalOpen(false)}
        footer={false}
      >
        <Form layout={'vertical'}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Добавить урок</h2>
          <FormItem
            label={'Название урока'}
            rules={[{ required: true }]}
            name={'name'}
          >
            <Input
              size={'large'}
              placeholder={'Название урока'}
            />
          </FormItem>

          <FormItem
            label={'Описание урока'}
            rules={[{ required: true }]}
            name={'description'}
          >
            <TextArea placeholder={'Описание урока'} />
          </FormItem>

          <FormItem label={'Добавьте изображение'}>
            <Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Нажмите или перетащите изображения</p>
            </Dragger>
          </FormItem>

          <FormItem label={'Добавьте видео'}>
            <Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Нажмите или перетащите видео</p>
            </Dragger>
          </FormItem>

          <FormItem>
            <TextArea placeholder={'Домашнее задание'} />
          </FormItem>

          <Button type={'primary'}>Сохранить</Button>
        </Form>
      </Modal>
      <Modal />
    </>
  );
};
