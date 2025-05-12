import { v4 as uuid } from 'uuid';
import { Flex, List, Tooltip } from 'antd';
import s from './styles.module.scss';
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  LineChartOutlined,
} from '@ant-design/icons';
import { ILessonDataInCourseDTO } from '../../../../../types/coursesTypes';
import { FC } from 'react';

interface ILessonListItem {
  item: ILessonDataInCourseDTO;
}

export const LessonListItem: FC<ILessonListItem> = ({ item }) => {
  return (
    <List.Item key={uuid()}>
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
  );
};
