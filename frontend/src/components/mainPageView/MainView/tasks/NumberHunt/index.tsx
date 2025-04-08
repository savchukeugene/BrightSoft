import { levelsConfig } from '../QuickCount/config';
import LevelWrapper from '../index';
import { levelRules } from './config';

const NumberHunt = () => {
  return (
    <LevelWrapper
      levelConfig={levelsConfig}
      title={'numberHunt'}
      levelRules={levelRules}
    />
  );
};

export default NumberHunt;
