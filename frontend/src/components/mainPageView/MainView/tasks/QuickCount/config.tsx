import { messages } from '@common/constants/messages';
import { IRules } from '../index';
import { ILevelsFields } from '../../../../../types/games';

export const levelsConfig: ILevelsFields[] = [
  {
    label: messages.view.main.tasks.quickCount.labels.superEasy,
    name: 'superEasy',
    starsAmount: 10,
    boxShadow: messages.view.main.tasks.quickCount.boxShadow.superEasy,
  },
  {
    label: messages.view.main.tasks.quickCount.labels.easy,
    name: 'easy',
    starsAmount: 20,
    boxShadow: messages.view.main.tasks.quickCount.boxShadow.easy,
  },
  {
    label: messages.view.main.tasks.quickCount.labels.normal,
    name: 'normal',
    starsAmount: 30,
    boxShadow: messages.view.main.tasks.quickCount.boxShadow.normal,
  },
  {
    label: messages.view.main.tasks.quickCount.labels.hard,
    name: 'hard',
    starsAmount: 40,
    boxShadow: messages.view.main.tasks.quickCount.boxShadow.hard,
  },
  {
    label: messages.view.main.tasks.quickCount.labels.custom,
    name: 'custom',
    starsAmount: '?',
    boxShadow: messages.view.main.tasks.quickCount.boxShadow.hard,
  },
];

export const levelRules: IRules = {
  title: messages.view.main.tasks.quickCount.title,
  descriptions: ['Правило 1', 'Правило 2', 'Правило 3'],
};
