import { FC } from 'react';
import { levelRules, levelsConfig } from './config';
import LevelWrapper from '../index';
import { messages } from '@common/constants/messages';

const QuickCount: FC = (): JSX.Element => {
  return (
    <LevelWrapper
      levelConfig={levelsConfig}
      title={messages.view.main.tasks.quickCount.title}
      levelRules={levelRules}
    />
  );
};

export default QuickCount;
