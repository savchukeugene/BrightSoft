import React from 'react';
import { Badge, MenuProps } from 'antd';
import { IUserRoles } from '../../store/userStore';
import { To } from 'react-router-dom';
import { routeGenerator } from './generatotrs';
import { Routes } from '../constants/routes';

import { IQuickCountParams } from '../../types/games';

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

export const concatTooltipInfo = (message: string, param: number, unit?: boolean) =>
  `${message + ' ' + param + (unit ? 'c.' : '')}`;

export const createArrayOfRandomNumbers = (levelInfo: IQuickCountParams): number[] => {
  let set: Set<number> = new Set<number>();
  const totalNumbers: number = Math.floor(levelInfo.duration / levelInfo.changePeriod);
  const [min, max] = levelInfo.range;

  if (totalNumbers > max - min + 1) {
    throw new Error('Недостаточно уникальных чисел в заданном диапазоне.');
  }

  while (set.size < totalNumbers) {
    let valueToPush: number = Math.floor(Math.random() * (max - min + 1) + min);
    if (valueToPush !== 0) {
      set.add(valueToPush);
    }
  }

  return Array.from(set);
};
