import { levelsConfig } from '../QuickCount/config';
import LevelWrapper from '../index';
import { messages } from '@common/constants/messages';
import { levelRules } from './config';

const NumberHunt = () => {
  return (
    <LevelWrapper
      levelConfig={levelsConfig}
      title={messages.view.main.tasks.numberHunt.title}
      levelRules={levelRules}
    />
  );
};

export default NumberHunt;
