import { FC } from 'react';
import { levelRules, levelsConfig } from './config';
import LevelWrapper from '../index';

const QuickCount: FC = (): JSX.Element => {
  return (
    <LevelWrapper
      levelConfig={levelsConfig}
      title={'quickCount'}
      levelRules={levelRules}
    />
  );
};

export default QuickCount;
