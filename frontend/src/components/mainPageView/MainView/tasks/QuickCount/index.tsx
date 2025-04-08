import { FC } from 'react';
import { levelsConfig } from './config';
import LevelWrapper from '../index';
import { messages } from '@common/constants/messages';

const QuickCount: FC = (): JSX.Element => {
  return (
    <LevelWrapper
      levelConfig={levelsConfig}
      title={messages.view.main.tasks.quickCount.title}
    />
  );
};

export default QuickCount;
