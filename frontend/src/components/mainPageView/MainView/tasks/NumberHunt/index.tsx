import { useSearchParams } from 'react-router-dom';
import { numberHuntingConfig, tooltipConfig } from './config';
import { GameStates, NumberHuntingConfigType } from '../../../../../types/games';
import s from './styles.module.scss';
import { messages } from '@common/constants/messages';
import { Tooltip } from 'antd';
import { concatTooltipInfo } from '@common/utils/helpers';
import { InfoCircleOutlined } from '@ant-design/icons';
import '../../../../../styles/commonGlobalStyles.scss';
import { NumberHuntGameContent } from './NumberHuntGameContent';
import { useState } from 'react';

const ref = messages.view.main.tasks.numberHunt.play;

const PlayNumberHunting = () => {
  const [searchParams] = useSearchParams();
  const [gameState, setGameState] = useState<GameStates>('prepare');
  const level = searchParams.get('level') as keyof NumberHuntingConfigType;
  const levelInfo = numberHuntingConfig[level];
  if (!level || !levelInfo) {
    throw new Error(ref.noLevelError);
  }

  const handleStart = (): void => setGameState('progress');

  return (
    <section className={s.game}>
      <h1 className={'gameInfo'}>
        {messages.view.main.layoutOptions.level(
          level,
          //@ts-ignore
          messages.view.main.tasks.quickCount.boxShadow[level],
        )}
        <Tooltip title={tooltipConfig(concatTooltipInfo, ref, levelInfo)}>
          <InfoCircleOutlined />
        </Tooltip>
      </h1>
      <NumberHuntGameContent
        state={gameState}
        handleStart={handleStart}
      />
    </section>
  );
};

export default PlayNumberHunting;
