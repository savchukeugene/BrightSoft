import s from './styles.module.scss';
import { useState } from 'react';
import { messages } from '../../../../../../common/constants/messages.ts';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import { gameConfig, tooltipConfig } from './config.tsx';
import { GamesLevelType } from '../../../../../../types/commonTypes.ts';
import GameContent from './GameContent.tsx';

const concatTooltipInfo = (message: string, param: number, unit: boolean) =>
  `${message + ' ' + param + (unit && 'c.')}`;
const ref = messages.view.main.tasks.quickCount.play;
const gameStates = ['prepare', 'progress', 'final'] as const;
export type GameStates = (typeof gameStates)[number];

const Play = () => {
  const [currentGameState, setCurrentGameState] = useState<GameStates>('prepare');
  const [value, setValue] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState<number>(0);

  const levelValue = searchParams.get('level');
  const levelInfo = gameConfig[levelValue as GamesLevelType];

  const createArrayOfRandomNumbers = (): number[] => {
    let set = new Set<number>();
    for (let i = 0; i < Math.floor(levelInfo.duration / levelInfo.changePeriod); i++) {
      let valueToPush: number = Math.round(
        Math.random() * (levelInfo.range[1] - levelInfo.range[0]) + levelInfo.range[0],
      );
      if (set.has(valueToPush) || valueToPush === 0) {
        i--;
        continue;
      }
      set.add(valueToPush);
    }
    return Array.from(set);
  };
  //@ts-ignore
  const handleEndGame = (finalValue: number) => {
    setCurrentGameState('final');
    console.log(finalValue);
    setResult(finalValue);
  };

  const interval = (valueToSet: number[], it: number = 0) => {
    setValue(valueToSet[it] > 0 ? `+${valueToSet[it]}` : `${valueToSet[it]}`);
    return valueToSet[it] !== undefined
      ? setTimeout(() => interval(valueToSet, it + 1), levelInfo.changePeriod * 1000)
      : handleEndGame(valueToSet.reduce((a, b) => a + b));
  };

  const process = async (): Promise<void> => {
    interval(createArrayOfRandomNumbers());
  };

  const handleStart = () => {
    setCurrentGameState('progress');
    process();
  };

  return (
    <section className={s.play}>
      <h1 className={s.info}>
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

export default Play;
