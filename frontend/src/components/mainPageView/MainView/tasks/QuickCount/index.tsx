import s from './styles.module.scss';
import { useState } from 'react';
import { messages } from '@common/constants/messages';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { gameConfig, tooltipConfig } from './config';
import GameContent from './GameContent';
import { concatTooltipInfo, createArrayOfRandomNumbers } from '@common/utils/helpers';
import {
  GamesLevelType,
  GameStates,
  IQuickCountParams,
} from '../../../../../types/games';
import { isNil } from 'lodash';
import '../../../../../styles/commonGlobalStyles.scss';

const ref = messages.view.main.tasks.quickCount.play;

const PlayQuickCount = () => {
  const [currentGameState, setCurrentGameState] = useState<GameStates>('prepare');
  const [value, setValue] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState<number>(0);
  const { levelInfoContext } = useOutletContext<{
    levelInfoContext: IQuickCountParams | null;
  }>();
  const levelValue = searchParams.get('level') as GamesLevelType;
  const levelInfo = levelValue === 'custom' ? levelInfoContext : gameConfig[levelValue];

  if (isNil(levelInfo)) {
    if (levelValue === 'custom') {
      window.history.back();
      return null;
    }
    throw new Error(`Уровень сложности "${levelValue}" не найден.`);
  }

  const handleEndGame = (finalValue: number): void => {
    setCurrentGameState('final');
    setResult(finalValue);
  };

  const interval = (valueToSet: number[], it: number = 0) => {
    setValue(valueToSet[it] > 0 ? `+${valueToSet[it]}` : `${valueToSet[it]}`);
    return valueToSet[it] !== undefined
      ? setTimeout(() => interval(valueToSet, it + 1), levelInfo.changePeriod * 1000)
      : handleEndGame(valueToSet.reduce((a, b) => a + b));
  };

  const handleStart = () => {
    setCurrentGameState('progress');
    interval(createArrayOfRandomNumbers(levelInfo));
  };

  return (
    <section className={s.play}>
      <h1 className={'gameInfo'}>
        {messages.view.main.layoutOptions.level(
          levelValue,
          //@ts-ignore
          messages.view.main.tasks.quickCount.boxShadow[levelValue],
        )}
        <Tooltip title={tooltipConfig(concatTooltipInfo, ref, levelInfo)}>
          <InfoCircleOutlined />
        </Tooltip>
      </h1>
      <GameContent
        state={currentGameState}
        handleStart={handleStart}
        value={value}
        duration={levelInfo.duration}
        result={result}
      />
    </section>
  );
};

export default PlayQuickCount;
