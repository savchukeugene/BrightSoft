import { useSearchParams } from 'react-router-dom';
import { numberHuntingConfig, tooltipConfig } from './config';
import { NumberHuntingConfigType } from '../../../../../types/games';
import s from './styles.module.scss';
import { messages } from '@common/constants/messages';
import { Tooltip } from 'antd';
import { concatTooltipInfo } from '@common/utils/helpers';
import { InfoCircleOutlined } from '@ant-design/icons';
import '../../../../../styles/commonGlobalStyles.scss';

const ref = messages.view.main.tasks.numberHunt.play;

const PlayNumberHunting = () => {
  const [searchParams] = useSearchParams();
  const level = searchParams.get('level') as keyof NumberHuntingConfigType;
  const levelInfo = numberHuntingConfig[level];
  if (!level || !levelInfo) {
    throw new Error(`Уровня с таким значением не существует!`);
  }

  const generateCells = () => {
    return <div className={'cell'}></div>;
  };

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
      <div className={s.cellZone}>{generateCells()}</div>
    </section>
  );
};

export default PlayNumberHunting;
