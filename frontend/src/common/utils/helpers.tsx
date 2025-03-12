import React from 'react';
import { MenuProps } from 'antd';
import { IUserRoles } from '../../store/userStore.tsx';
import { ROOTS } from '../constants/roots.ts';
import { To } from 'react-router-dom';
export type MenuItem = Required<MenuProps>['items'][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  };
}

// @ts-ignore
export const defineUserRole = (savedUser: IUserRoles): IUserRoles => savedUser;

export const defineDefaultNavigation = (role: IUserRoles): To => {
  if (!role) return '';

  switch (role) {
    case 'user':
      return ROOTS.mainPage + ROOTS.user + ROOTS.grade;
    case 'support':
      return ROOTS.mainPage + ROOTS.support;
    case 'administrator':
      return ROOTS.mainPage + ROOTS.userManagement;
  }
};
