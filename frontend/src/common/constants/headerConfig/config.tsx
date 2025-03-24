import {
  BugOutlined,
  BuildOutlined,
  EditOutlined,
  InfoCircleOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { getItem, MenuItem } from '../../utils/helpers.tsx';
import { ItemType } from 'antd/es/menu/interface';
import { IUserRoles } from '../../../store/userStore.tsx';
import { messages } from '../messages.ts';

interface IHeaderOptions {
  [key: string]: ItemType[];
}

type ILeftSideOptions = {
  [key in IUserRoles]: MenuItem[];
};

const source = messages.view.main.layoutOptions;

export const LEFT_SIDE_OPTIONS_LIST: ILeftSideOptions = {
  administrator: [
    getItem(source.users, 'userManagement', <TeamOutlined />),
    getItem(source.tasks, 'tasks/quickCount', <BuildOutlined />),
    getItem(source.support, 'support', <BugOutlined />),
    getItem(source.pages, 'editingPages', <EditOutlined />),
    getItem(source.about, 'about', <InfoCircleOutlined />),
  ],
  user: [
    getItem(source.user, 'user/grade', <UserOutlined />),
    getItem(source.tasks, 'tasks/maze', <BuildOutlined />),
    getItem(source.support, 'support', <BugOutlined />),
    getItem(source.about, 'about', <InfoCircleOutlined />),
  ],
  support: [
    getItem(source.support, 'support', <BugOutlined />),
    getItem(source.about, 'about', <InfoCircleOutlined />),
  ],
};

export const HEADER_OPTIONS: IHeaderOptions = {
  user: [
    getItem(source.grade, 'grade', <></>),
    getItem(source.timetable, 'timetable', <></>),
  ],
  tasks: [
    getItem(source.maze, 'maze'),
    getItem(source.quickCount, 'quickCount'),
    getItem('Абакусы', 'tasksAbakus'),
  ],
};
