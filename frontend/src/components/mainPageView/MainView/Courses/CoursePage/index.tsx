import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCourseInfo } from '../actions';
import { ICourseData, ILessonDataInCourseDTO } from '../../../../../types/coursesTypes';
import { Button, Flex, List, Modal, Tooltip } from 'antd';
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  LineChartOutlined,
} from '@ant-design/icons';

import s from './styles.module.scss';
import { useForm } from 'antd/es/form/Form';
import { ILessonCreateFormInfo } from '../../../../../types/lessonTypes';
import { createLesson } from './actions';
import { CreateLessonModal } from '../Modals/CreateLessonModal';
import { IUserRoles, useUserStore } from '../../../../../store/userStore';

export const CoursePage = () => {
  const { id } = useParams();
  const [createLessonForm] = useForm();
  const [courseData, setCourseData] = useState<ICourseData | null>(null);
  const [isCourseDataLoading, setIsCourseDataLoading] = useState<boolean>(true);
  const [isCreateLessonModalOpen, setIsCreateLessonModalOpen] = useState<boolean>(false);
  const { role } = useUserStore();
  const allowedRolesToAddLesson = new Set<IUserRoles>(['administrator', 'teacher']);
  useEffect(() => {
    if (isCourseDataLoading) {
      getCourseInfo(id!)
        .then((data: ICourseData | null) => setCourseData(data!))
        .finally(() => setIsCourseDataLoading(false));
    }
  }, [isCourseDataLoading]);

  const handleCreateLesson = async (dto: ILessonCreateFormInfo) => {
    await createLesson(dto, id!);
    createLessonForm.resetFields;
    setIsCreateLessonModalOpen(false);
    setIsCourseDataLoading(true);
  };

  const handleClose = () => {
    createLessonForm.resetFields();
    setIsCreateLessonModalOpen(false);
  };

  return (
    <>
      <h1>Курс "{courseData?.name ?? 'Неизвестный курс'}"</h1>
      <h3>{courseData?.description}</h3>
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
      {allowedRolesToAddLesson.has(role) && (
        <Button
          type={'primary'}
          style={{ margin: '20px 0' }}
          onClick={() => setIsCreateLessonModalOpen(true)}
        >
          Добавить урок
        </Button>
      )}
      <CreateLessonModal
        isCreateLessonModalOpen={isCreateLessonModalOpen}
        handleCreateLesson={handleCreateLesson}
        handleClose={handleClose}
        createLessonForm={createLessonForm}
      />
      <Modal />
    </>
  );
};
