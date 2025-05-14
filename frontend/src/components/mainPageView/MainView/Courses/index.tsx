import { useEffect, useState } from 'react';
import { ICoursesInDTO, ICreateCourseOutDTO } from '../../../../types/coursesTypes';
import { createCourse, getAllCourses } from './actions';
import { Button, Card, Modal } from 'antd';
import Meta from 'antd/es/card/Meta';
import logo from '../../../../images/coursesBG/1.jpg';
import s from './styles.module.scss';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { v4 as uuid } from 'uuid';
import { CreateCourseModal } from './Modals/CreateCourseModal';
import { IUserRoles, useUserStore } from '../../../../store/userStore';

export const Courses = () => {
  const { id } = useParams();
  const [createCourseForm] = useForm();
  const [coursesData, setCoursesData] = useState<ICoursesInDTO[]>([]);
  const [isCoursesDataLoading, setIsCoursesDataLoading] = useState<boolean>(true);
  const [isCreateCourseModalOpen, setIsCreateCourseModalOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
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
              <Link
                key={uuid()}
                to={`${pathname}/${courseInfo.id}`}
              >
                <Card
                  key={uuid()}
                  hoverable
                  className={s.card}
                  cover={
                    <img
                      alt="example"
                      src={logo}
                    />
                  }
                >
                  <Meta
                    style={{
                      maxLines: 2,
                    }}
                    title={`Курс "${courseInfo.name}"`}
                    description={
                      <>
                        {courseInfo.description.substr(0, 150) + '\u2026'}
                        <Button
                          size={'small'}
                          type={'link'}
                        >
                          Узнать больше
                        </Button>
                      </>
                    }
                  />
                </Card>
              </Link>
            ))}
            <Modal />
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
