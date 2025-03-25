import s from './styles.module.scss';
import { useState } from 'react';
import PreparingForAGame from './GameStates/PreparingForAGame.tsx';
import GameInProgress from './GameStates/GameInProgress.tsx';
import { messages } from '../../../../../../common/constants/messages.ts';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import { gameConfig, tooltipConfig } from './config.tsx';
import { GamesLevelType } from '../../../../../../types/commonTypes.ts';
const concatTooltipInfo = (message: string, param: number, unit: boolean) =>
  `${message + ' ' + param + (unit && 'c.')}`;
const ref = messages.view.main.tasks.quickCount.play;

const Play = () => {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const [final, setFinal] = useState<number | null>(null);
  const levelValue = searchParams.get('level');
  const levelInfo = gameConfig[levelValue as GamesLevelType];

  const createArrayOfRandomNumbers = (): number[] => {
    let set = new Set<number>();
    for (let i = 0; i < levelInfo.duration / levelInfo.changePeriod; i++) {
      let valueToPush: number = Math.round(
        Math.random() * (levelInfo.range[1] - levelInfo.range[0]) + levelInfo.range[0],
      );
      if (set.has(valueToPush) || valueToPush === 0) {
        i--;
        continue;
      }
      set.add(valueToPush);
    }
    const result = Array.from(set).reduce((a, b) => a + b);
    console.log(result, set);
    return Array.from(set);
  };

  const handleEndGame = (value: number) => {
    setFinal(value);
  };

  const interval = (valueToSet: number[], it: number = 0) => {
    setValue(valueToSet[it] > 0 ? `+${valueToSet[it]}` : `${valueToSet[it]}`);
    return valueToSet[it + 1]
      ? setTimeout(() => interval(valueToSet, it + 1), levelInfo.changePeriod * 1000)
      : handleEndGame(valueToSet.reduce((a, b) => a + b));
  };

  const process = async (): Promise<void> => {
    interval(createArrayOfRandomNumbers());
  };

  const handleStart = () => {
    setIsGameStarted(true);
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
      {isGameStarted ? (
        final ? (
          <h1>end</h1>
        ) : (
          <GameInProgress
            value={value}
            duration={levelInfo.duration}
          />
        )
      ) : (
        <PreparingForAGame handleStart={handleStart} />
      )}
    </section>
  );
};

export default Play;
