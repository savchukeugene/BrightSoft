import {
  BugOutlined,
  BuildOutlined,
  EditOutlined,
  InfoCircleOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { getItem, MenuItem } from '../../../common/utils/helpers.tsx';
import { ItemType } from 'antd/es/menu/interface';
import { IUserRoles } from '../../../store/userStore.tsx';

interface IHeaderOptions {
  [key: string]: ItemType[];
}

type ILeftSideOptions = {
  [key in IUserRoles]: MenuItem[];
};

export const LEFT_SIDE_OPTIONS_LIST: ILeftSideOptions = {
  administrator: [
    getItem('Пользователи', 'userManagement', <TeamOutlined />),
    getItem('Задания', 'tasks', <BuildOutlined />),
    getItem('Служба поддержки', 'support', <BugOutlined />),
    getItem('Страницы', 'editingPages', <EditOutlined />),
    getItem('О компании', 'about', <InfoCircleOutlined />),
  ],
  user: [
    getItem('Пользователь', 'user', <UserOutlined />),
    getItem('Задания', 'tasks', <BuildOutlined />),
    getItem('Служба поддержки', 'support', <BugOutlined />),
    getItem('О компании', 'about', <InfoCircleOutlined />),
  ],
  support: [
    getItem('Служба поддержки', 'support', <BugOutlined />),
    getItem('О компании', 'about', <InfoCircleOutlined />),
  ],
};

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
