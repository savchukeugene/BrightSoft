import { IQuickCountLevelFields } from '../../../../../types/commonTypes.ts';
import { messages } from '../../../../../common/constants/messages.ts';

export const levelsConfig: IQuickCountLevelFields[] = [
  {
    label: messages.view.main.tasks.quickCount.labels.superEasy,
    icon: <></>,
    boxShadow: messages.view.main.tasks.quickCount.boxShadow.superEasy,
  },
  {
    label: messages.view.main.tasks.quickCount.labels.easy,
    icon: <></>,
    boxShadow: messages.view.main.tasks.quickCount.boxShadow.easy,
  },
  {
    label: messages.view.main.tasks.quickCount.labels.normal,
    icon: <></>,
    boxShadow: messages.view.main.tasks.quickCount.boxShadow.normal,
  },
  {
    label: messages.view.main.tasks.quickCount.labels.hard,
    icon: <></>,
    boxShadow: messages.view.main.tasks.quickCount.boxShadow.hard,
  },
];
