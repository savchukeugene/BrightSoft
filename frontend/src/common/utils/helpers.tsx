import React from 'react';
import { MenuProps } from 'antd';
import { IUserRoles } from '../../store/userStore.tsx';
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
