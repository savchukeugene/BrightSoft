import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCourseInfo } from '../actions';
import { ICourseData, ILessonDataInCourseDTO } from '../../../../../types/coursesTypes';
import { Button, List, Modal } from 'antd';

import s from './styles.module.scss';
import { useForm } from 'antd/es/form/Form';
import { ILessonCreateFormInfo } from '../../../../../types/lessonTypes';
import { createLesson } from './actions';
import { CreateLessonModal } from '../Modals/CreateLessonModal';
import { LessonListItem } from './LessonListItem';
import { messages } from '@common/constants/messages';

export const CoursePage = () => {
  const { id } = useParams();
  const [createLessonForm] = useForm();
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
      <h1>{messages.view.main.courses.courseName(courseData?.name)}</h1>
      <h3>{courseData?.description}</h3>
      <List
        className={s.list}
        header={'Уроки'}
        itemLayout="horizontal"
        dataSource={courseData?.lessons}
        renderItem={(item: ILessonDataInCourseDTO) => <LessonListItem item={item} />}
      />
      <Button
        type={'primary'}
        style={{ margin: '20px 0' }}
        onClick={() => setIsCreateLessonModalOpen(true)}
      >
        {messages.button.addLesson}
      </Button>
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
