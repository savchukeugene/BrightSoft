import { ILevelsFields } from '../../../../../types/commonTypes';
import { messages } from '@common/constants/messages';
import { IRules } from '../index';

export const levelsConfig: ILevelsFields[] = [
  {
    label: messages.view.main.tasks.numberHunt.labels.superEasy,
    name: 'superEasy',
    starsAmount: 10,
    boxShadow: messages.view.main.tasks.numberHunt.boxShadow.superEasy,
  },
  {
    label: messages.view.main.tasks.numberHunt.labels.easy,
    name: 'easy',
    starsAmount: 20,
    boxShadow: messages.view.main.tasks.numberHunt.boxShadow.easy,
  },
  {
    label: messages.view.main.tasks.numberHunt.labels.normal,
    name: 'normal',
    starsAmount: 30,
    boxShadow: messages.view.main.tasks.numberHunt.boxShadow.normal,
  },
  {
    label: messages.view.main.tasks.numberHunt.labels.hard,
    name: 'hard',
    starsAmount: 40,
    boxShadow: messages.view.main.tasks.numberHunt.boxShadow.hard,
  },
  {
    label: messages.view.main.tasks.numberHunt.labels.custom,
    name: 'custom',
    starsAmount: '?',
    boxShadow: messages.view.main.tasks.numberHunt.boxShadow.hard,
  },
];

export const levelRules: IRules = {
  title: messages.view.main.tasks.quickCount.title,
  descriptions: ['Правило 1', 'Правило 2', 'Правило 3'],
};
