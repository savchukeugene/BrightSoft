import { Flex, List, Tooltip } from 'antd';
import s from '../styles.module.scss';
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  LineChartOutlined,
} from '@ant-design/icons';
import { ILessonDataInCourseDTO } from '../../../../../../types/coursesTypes';
import { FC } from 'react';
import { IUserRoles, useUserStore } from '../../../../../../store/userStore';

interface ILessonListItem {
  index: number;
  item: ILessonDataInCourseDTO;
}

export const LessonListItem: FC<ILessonListItem> = ({ index, item }) => {
  const { role } = useUserStore();
  const allowActions = new Set<IUserRoles>(['administrator', 'teacher']);
  return (
    <List.Item key={`LessonListItem_${index}`}>
      <Flex
        className={s.flex}
        justify={'space-between'}
      >
        <List.Item.Meta
          avatar={<LineChartOutlined />}
          title={<a href="https://ant.design">{item.name}</a>}
          description={item.description ?? 'Нет описания'}
        />
        {allowActions.has(role) && (
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
        )}
      </Flex>
    </List.Item>
  );
};
