import s from '../styles.module.scss';
import { messages } from '../../../../../../../common/constants/messages.ts';
import { Button, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import { gameConfig } from '../config.tsx';
import { GamesLevelType } from '../../../../../../../types/commonTypes.ts';
import { FC } from 'react';

const concatTooltipInfo = (message: string, param: number, unit: boolean) =>
  `${message + ' ' + param + (unit && 'c.')}`;
const ref = messages.view.main.tasks.quickCount.play;

const PreparingForAGame: FC<{
  handleStart: () => void;
}> = ({ handleStart }) => {
  const [searchParams] = useSearchParams();
  const levelInfo = gameConfig[searchParams.get('level') as GamesLevelType];

  return (
    <>
      <h1 className={s.info}>
        {messages.view.main.layoutOptions.level(searchParams.get('level'))}
        <Tooltip
          title={
            <>
              <h4>{concatTooltipInfo(ref.duration, levelInfo.duration, true)}</h4>
              <h4>
                От {levelInfo.range[0]} до {levelInfo.range[1]}
              </h4>
              <h4>{concatTooltipInfo(ref.period, levelInfo.changePeriod, true)}</h4>
            </>
          }
        >
          <InfoCircleOutlined />
        </Tooltip>
      </h1>
      <h1 className={s.beforeGame}>?</h1>
      <Button onClick={handleStart}>{ref.start}</Button>
    </>
  );
};

export default PreparingForAGame;
