import { useUserStore } from '../../../../store/userStore';
import { ICoursesInDTO } from '../../../../types/coursesTypes';
import { useEffect, useState } from 'react';
import { getCoursesByIdArray } from './actions';
import { CourseCard } from '../CourseCard';
import s from './styles.module.scss';
import { Outlet, useParams } from 'react-router-dom';

export const MyCourses = () => {
  const { id } = useParams();
  const { courses } = useUserStore();
  const [courseData, setCourseData] = useState<ICoursesInDTO[]>([]);
  const [isCourseDataLoading, setIsCourseDataLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isCourseDataLoading) {
      getCoursesByIdArray(courses).then((data) => {
        setCourseData(data);
        setIsCourseDataLoading(false);
      });
    }
  }, [isCourseDataLoading]);
  return (
    <main>
      {id ? (
        <Outlet />
      ) : (
        <>
          <h1>Мои курсы</h1>
          <section className={s.section}>
            {courseData.map((courseInfo: ICoursesInDTO) => (
              <CourseCard courseInfo={courseInfo} />
            ))}
          </section>
        </>
      )}
    </main>
  );
};
