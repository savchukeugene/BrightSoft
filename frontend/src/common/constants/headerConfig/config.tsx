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

export const LEFT_SIDE_OPTIONS_LIST: ILeftSideOptions = {
  administrator: [
    getItem(messages.view.main.layoutOptions.users, 'userManagement', <TeamOutlined />),
    getItem(
      messages.view.main.layoutOptions.tasks,
      'tasks/quickCount',
      <BuildOutlined />,
    ),
    getItem(messages.view.main.layoutOptions.support, 'support', <BugOutlined />),
    getItem(messages.view.main.layoutOptions.pages, 'editingPages', <EditOutlined />),
    getItem(messages.view.main.layoutOptions.about, 'about', <InfoCircleOutlined />),
  ],
  user: [
    getItem(messages.view.main.layoutOptions.user, 'user/grade', <UserOutlined />),
    getItem(messages.view.main.layoutOptions.tasks, 'tasks/maze', <BuildOutlined />),
    getItem(messages.view.main.layoutOptions.support, 'support', <BugOutlined />),
    getItem(messages.view.main.layoutOptions.about, 'about', <InfoCircleOutlined />),
  ],
  support: [
    getItem(messages.view.main.layoutOptions.support, 'support', <BugOutlined />),
    getItem(messages.view.main.layoutOptions.about, 'about', <InfoCircleOutlined />),
  ],
};

export const HEADER_OPTIONS: IHeaderOptions = {
  user: [
    getItem(messages.view.main.layoutOptions.grade, 'grade', <></>),
    getItem(messages.view.main.layoutOptions.timetable, 'timetable', <></>),
  ],
  tasks: [
    getItem(messages.view.main.layoutOptions.maze, 'maze'),
    getItem(messages.view.main.layoutOptions.quickCount, 'quickCount'),
    getItem('Абакусы', 'tasksAbakus'),
  ],
};
