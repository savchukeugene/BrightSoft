import { v4 as uuid } from 'uuid';
import { Button, Card } from 'antd';
import s from '../Courses/styles.module.scss';
import logo from '../../../../images/coursesBG/1.jpg';
import Meta from 'antd/es/card/Meta';
import { Link, useLocation } from 'react-router-dom';
import { ICoursesInDTO } from '../../../../types/coursesTypes';
import { FC } from 'react';

interface ICourseCard {
  courseInfo: ICoursesInDTO;
}

export const CourseCard: FC<ICourseCard> = ({ courseInfo }) => {
  const { pathname } = useLocation();
  return (
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
  );
};
