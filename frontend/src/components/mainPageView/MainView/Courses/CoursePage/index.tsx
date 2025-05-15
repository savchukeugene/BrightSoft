import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCourseInfo } from '../actions';
import { ICourseData, ILessonDataInCourseDTO } from '../../../../../types/coursesTypes';
import { List, notification } from 'antd';

import s from './styles.module.scss';
import { useForm } from 'antd/es/form/Form';
import { ILessonCreateFormInfo } from '../../../../../types/lessonTypes';
import { createApplication, createLesson } from './actions';
import { CreateLessonModal } from '../Modals/CreateLessonModal';
import { useUserStore } from '../../../../../store/userStore';
import {
  ICreateApplicationDtoOut,
  ICreateApplicationForm,
} from '../../../../../types/applicationTypes';
import { Buttons } from './Components/Buttons';
import { LessonListItem } from './Components/LessonListItem';
import { CreateApplicationModal } from './Components/CreateApplicationModal';

export const CoursePage = () => {
  const { id } = useParams();
  const [createLessonForm] = useForm();
  const [createApplicationForm] = useForm();
  const [courseData, setCourseData] = useState<ICourseData | null>(null);
  const [isCourseDataLoading, setIsCourseDataLoading] = useState<boolean>(true);
  const [isCreateLessonModalOpen, setIsCreateLessonModalOpen] = useState<boolean>(false);
  const { user } = useUserStore();
  const [isAssignModalOpen, setIsAssignModalOpen] = useState<boolean>(false);
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

  const handleCreateApplication = async (values: ICreateApplicationForm) => {
    const dto: ICreateApplicationDtoOut = {
      ...values,
      courseId: courseData?.id!,
      userId: user!,
      type: 'offline',
    };
    await createApplication(dto);
    notification.success({
      message: 'Заявка успешно создана!',
      description:
        'Спасибо за оформление заявки! Наши специалисты свяжуться с Вами в ближайшее время для уточнения деталей.',
    });
    createApplicationForm.resetFields();
    setIsAssignModalOpen(false);
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
        renderItem={(item: ILessonDataInCourseDTO, index: number) => (
          <LessonListItem
            item={item}
            index={index}
          />
        )}
      />
      <Buttons
        setIsAssignModalOpen={setIsAssignModalOpen}
        setIsCreateLessonModalOpen={setIsCreateLessonModalOpen}
      />
      <CreateLessonModal
        isCreateLessonModalOpen={isCreateLessonModalOpen}
        handleCreateLesson={handleCreateLesson}
        handleClose={handleClose}
        createLessonForm={createLessonForm}
      />
      <CreateApplicationModal
        isAssignModalOpen={isAssignModalOpen}
        courseData={courseData}
        setIsAssignModalOpen={setIsAssignModalOpen}
        createApplicationForm={createApplicationForm}
        handleCreateApplication={handleCreateApplication}
      />
    </>
  );
};
