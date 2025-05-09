import { useEffect, useState } from 'react';
import { ICoursesInDTO } from '../../../../types/coursesTypes';
import { getAllCourses } from './actions';
import { Card, Modal } from 'antd';
import Meta from 'antd/es/card/Meta';
import logo from '../../../../images/coursesBG/1.jpg';
import logo2 from '../../../../images/coursesBG/2.jpg';
import logo3 from '../../../../images/coursesBG/3.jpg';
import s from './styles.module.scss';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
export const Courses = () => {
  const { id } = useParams();
  const [coursesData, setCoursesData] = useState<ICoursesInDTO[]>([]);
  const [isCoursesDataLoading, setIsCoursesDataLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const defineLogo = (index: number) => {
    switch (index) {
      case 0:
        return logo;
      case 1:
        return logo2;
      case 2:
        return logo3;
    }
  };

  useEffect(() => {
    if (isCoursesDataLoading) {
      getAllCourses()
        .then((data: ICoursesInDTO[]) => setCoursesData(data))
        .finally(() => setIsCoursesDataLoading(false));
    }
  }, [isCoursesDataLoading]);
  return (
    <main>
      {id ? (
        <Outlet />
      ) : (
        <>
          <h1>Курсы</h1>
          <section className={s.section}>
            {coursesData.map((courseInfo: ICoursesInDTO, index: number) => (
              <Link to={`${pathname}/${courseInfo.id}`}>
                <Card
                  hoverable
                  className={s.card}
                  cover={
                    <img
                      alt="example"
                      src={defineLogo(index)}
                    />
                  }
                >
                  <Meta
                    title={courseInfo.name}
                    description={courseInfo.description}
                  />
                </Card>
              </Link>
            ))}
            <Modal />
          </section>
        </>
      )}
    </main>
  );
};
