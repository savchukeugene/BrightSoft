import React from 'react';
import { MenuProps } from 'antd';
import { IUserRoles } from '../../store/userStore';
import { To } from 'react-router-dom';
import { routeGenerator } from './generatotrs';
import { Routes } from '../constants/routes';

export type MenuItem = Required<MenuProps>['items'][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  navigateTo?: string,
  children?: MenuItem[],
) {
  return {
    key,
    icon,
    children,
    label,
    navigateTo,
  };
}

export const defineDefaultNavigation = (role: IUserRoles): To => {
  if (!role) return '';

  switch (role) {
    case 'user':
      return routeGenerator(Routes.mainPage, Routes.user, Routes.grade);
    case 'support':
      return routeGenerator(Routes.mainPage, Routes.support);
    case 'administrator':
      return routeGenerator(Routes.mainPage, Routes.userManagement);
  }
};

export const formatDate = (isoDate: string): string => {
  const date: Date = new Date(isoDate);
  const day: string = String(date.getDate()).padStart(2, '0');
  const month: string = String(date.getMonth() + 1).padStart(2, '0');
  const year: number = date.getFullYear();
  return `${day}.${month}.${year}`;
};
