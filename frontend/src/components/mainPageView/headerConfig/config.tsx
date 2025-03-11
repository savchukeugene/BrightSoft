import {
  BugOutlined,
  BuildOutlined,
  EditOutlined,
  InfoCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { getItem, MenuItem } from '../../../common/utils/helpers.tsx';
import { ItemType } from 'antd/es/menu/interface';

interface IHeaderOptions {
  [key: string]: ItemType[];
}

export const USER_HEADER_ITEMS: MenuItem[] = [
  getItem('Оценки', 'grade', <></>),
  getItem('Расписание', 'timetable', <></>),
  getItem('Мой уровень', 'el3', <></>),
  getItem('Редактирование информации', 'el4', <></>),
];

export const LEFT_SIDE_MENU: MenuItem[] = [
  getItem('Пользователь', 'user', <UserOutlined />),
  getItem('Задания', 'tasks', <BuildOutlined />),
  getItem('О компании', 'about', <InfoCircleOutlined />),
  getItem('Служба поддержки', 'support', <BugOutlined />),
  getItem('Страницы', 'editingPages', <EditOutlined />),
];

export const HEADER_OPTIONS: IHeaderOptions = {
  user: [
    getItem('Оценки', 'grade', <></>),
    getItem('Расписание', 'timetable', <></>),
    getItem('Мой уровень', 'el3', <></>),
    getItem('Редактирование информации', 'el4', <></>),
  ],
  tasks: [
    getItem('Лабиринты', 'taskLabirint'),
    getItem('Быстрый счёт', 'quickCount'),
    getItem('Абакусы', 'tasksAbakus'),
  ],
};
