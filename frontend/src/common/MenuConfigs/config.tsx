import {
  AppstoreOutlined,
  BugOutlined,
  BuildOutlined,
  EditOutlined,
  InfoCircleOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { getItem, MenuItem } from '../utils/helpers';
import { ItemType } from 'antd/es/menu/interface';
import { IUserRoles, useUserStore } from '../../store/userStore';
import { messages } from '../constants/messages';
import { Badge } from 'antd';
import React from 'react';

interface IHeaderOptions {
  [key: string]: ItemType[];
}

type ILeftSideOptions = {
  [key in IUserRoles]: MenuItem[];
};

const source = messages.view.main.layoutOptions;

export const LEFT_SIDE_OPTIONS_LIST: ILeftSideOptions = {
  administrator: [
    getItem(source.user, 'user', <TeamOutlined />),
    getItem(source.tasks, 'tasks', <BuildOutlined />),
    getItem(source.pages, 'editingPages', <EditOutlined />),
    getItem(source.about, 'about', <InfoCircleOutlined />),
    getItem(source.support, 'support', <BugOutlined />),
    getItem(source.courses, 'courses', <AppstoreOutlined />),
  ],
  user: [
    getItem(source.user, 'user', <UserOutlined />),
    getItem(source.tasks, 'tasks', <BuildOutlined />),
    getItem(source.about, 'about', <InfoCircleOutlined />),
    getItem(source.support, 'support', <BugOutlined />),
    getItem(source.courses, 'courses', <AppstoreOutlined />),
  ],
  support: [
    getItem(source.about, 'about', <InfoCircleOutlined />),
    getItem(source.support, 'support', <BugOutlined />),
  ],
  teacher: [
    getItem(source.user, 'user', <TeamOutlined />),
    getItem(source.tasks, 'tasks', <BuildOutlined />),
    getItem(source.pages, 'editingPages', <EditOutlined />),
    getItem(source.about, 'about', <InfoCircleOutlined />),
    getItem(source.support, 'support', <BugOutlined />),
    getItem(source.courses, 'courses', <AppstoreOutlined />),
  ],
  unauthorized: [
    getItem(source.about, 'about', <InfoCircleOutlined />),
    getItem(source.support, 'support', <BugOutlined />),
  ],
};

export const HEADER_OPTIONS: IHeaderOptions = {
  user: [getItem(source.profile, 'profile', <></>)],
  tasks: [
    getItem(source.maze, 'maze'),
    getItem(source.quickCount, 'quickCount'),
    getItem('Абакусы', 'tasksAbakus'),
    getItem(source.numberHunt, 'numberHunt'),
  ],
};
