import { IQuickCountLevelFields } from '../../../../../types/commonTypes.ts';
import { messages } from '../../../../../common/constants/messages.ts';
import hard from './svg/gdharder.png';
import normal from './svg/gdhard.png';
import easy from './svg/gdnormal.png';
import superEasy from './svg/gdeasy.png';

export const levelsConfig: IQuickCountLevelFields[] = [
  {
    label: messages.view.main.tasks.quickCount.labels.superEasy,
    name: 'superEasy',
    icon: (
      <img
        src={superEasy}
        alt={messages.view.main.tasks.quickCount.labels.superEasy}
      />
    ),
    boxShadow: messages.view.main.tasks.quickCount.boxShadow.superEasy,
  },
  {
    label: messages.view.main.tasks.quickCount.labels.easy,
    name: 'easy',
    icon: (
      <img
        src={easy}
        alt={messages.view.main.tasks.quickCount.labels.easy}
      />
    ),
    boxShadow: messages.view.main.tasks.quickCount.boxShadow.easy,
  },
  {
    label: messages.view.main.tasks.quickCount.labels.normal,
    name: 'normal',
    icon: (
      <img
        src={normal}
        alt={messages.view.main.tasks.quickCount.labels.normal}
      />
    ),
    boxShadow: messages.view.main.tasks.quickCount.boxShadow.normal,
  },
  {
    label: messages.view.main.tasks.quickCount.labels.hard,
    name: 'hard',
    icon: (
      <img
        src={hard}
        alt={messages.view.main.tasks.quickCount.labels.hard}
      />
    ),
    boxShadow: messages.view.main.tasks.quickCount.boxShadow.hard,
  },
];
