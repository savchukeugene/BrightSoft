import { useEffect, useState } from 'react';
import { ICoursesInDTO, ICreateCourseOutDTO } from '../../../../types/coursesTypes';
import { createCourse, getAllCourses } from './actions';
import { Button } from 'antd';
import s from './styles.module.scss';
import { Outlet, useParams } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { CreateCourseModal } from './Modals/CreateCourseModal';
import { IUserRoles, useUserStore } from '../../../../store/userStore';
import { CourseCard } from '../CourseCard';

export const Courses = () => {
  const { id } = useParams();
  const [createCourseForm] = useForm();
  const [coursesData, setCoursesData] = useState<ICoursesInDTO[]>([]);
  const [isCoursesDataLoading, setIsCoursesDataLoading] = useState<boolean>(true);
  const [isCreateCourseModalOpen, setIsCreateCourseModalOpen] = useState<boolean>(false);
  const { role } = useUserStore();
  const allowedRolesToCreateCourse: Set<IUserRoles> = new Set([
    'administrator',
    'teacher',
  ]);

  useEffect(() => {
    if (isCoursesDataLoading) {
      getAllCourses()
        .then((data: ICoursesInDTO[]) => setCoursesData(data))
        .finally(() => setIsCoursesDataLoading(false));
    }
  }, [isCoursesDataLoading]);

  const handleModalClose = () => {
    setIsCreateCourseModalOpen(false);
    createCourseForm.resetFields();
  };

  const handleCreateCourse = async (values: ICreateCourseOutDTO) => {
    await createCourse(values);
    setIsCoursesDataLoading(true);
    setIsCreateCourseModalOpen(false);
  };

  return (
    <main>
      {id ? (
        <Outlet />
      ) : (
        <>
          <div className={s.header}>
            <h1>Курсы</h1>
            {allowedRolesToCreateCourse.has(role) && (
              <Button
                type={'primary'}
                style={{
                  marginTop: '20px',
                }}
                onClick={() => setIsCreateCourseModalOpen(true)}
              >
                Создать курс
              </Button>
            )}
          </div>
          <section className={s.section}>
            {coursesData.map((courseInfo: ICoursesInDTO) => (
              <CourseCard courseInfo={courseInfo} />
            ))}
          </section>
        </>
      )}
      <CreateCourseModal
        isCreateCourseModalOpen={isCreateCourseModalOpen}
        createCourseForm={createCourseForm}
        handleCreateCourse={handleCreateCourse}
        handleModalClose={handleModalClose}
      />
    </main>
  );
};
