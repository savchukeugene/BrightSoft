import { levelsConfig } from '../QuickCount/config';
import LevelWrapper from '../index';
import { messages } from '@common/constants/messages';

const NumberHunt = () => {
  return (
    <LevelWrapper
      levelConfig={levelsConfig}
      title={messages.view.main.tasks.numberHunt.title}
    />
  );
};

export default NumberHunt;
