import { Button, Tooltip } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { gameConfig } from './config.tsx';
import { GamesLevelType } from '../../../../../../types/commonTypes.ts';

const Play = () => {
  const [searchParams] = useSearchParams();
  const levelInfo = gameConfig[searchParams.get('level') as GamesLevelType];
  return (
    <section>
      <h1>
        Уровень: {searchParams.get('level')}{' '}
        <Tooltip
          title={
            <>
              <h4>Общее время: {levelInfo.duration}c.</h4>
              <h4>
                От {levelInfo.range[0]} до {levelInfo.range[1]}
              </h4>
              <h4>Периодичность {levelInfo.changePeriod}c.</h4>
            </>
          }
        >
          Информация
        </Tooltip>
      </h1>
      <Button>Нажми на меня</Button>
    </section>
  );
};

export default Play;
