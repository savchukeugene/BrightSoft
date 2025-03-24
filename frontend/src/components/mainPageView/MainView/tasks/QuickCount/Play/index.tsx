import { Button, Tooltip } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { gameConfig } from './config.tsx';
import { GamesLevelType } from '../../../../../../types/commonTypes.ts';

const Play = () => {
  const [searchParams] = useSearchParams();
  return (
    <section>
      <h1>
        Уровень: {searchParams.get('level')}{' '}
        <Tooltip
          title={
            <>
              <h4>
                Общее время:{' '}
                {gameConfig[searchParams.get('level') as GamesLevelType].duration}c.
              </h4>
              <h4>
                От {gameConfig[searchParams.get('level') as GamesLevelType].range[0]}c. до{' '}
                {gameConfig[searchParams.get('level') as GamesLevelType].range[1]}c.
              </h4>
              <h4>
                Периодичность{' '}
                {gameConfig[searchParams.get('level') as GamesLevelType].changePeriod}c.
              </h4>
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
