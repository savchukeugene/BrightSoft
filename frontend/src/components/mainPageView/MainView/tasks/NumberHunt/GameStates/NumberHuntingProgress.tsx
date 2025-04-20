import s from '../styles.module.scss';
import { generateCells } from '@common/utils/generatotrs';
import { FC } from 'react';
import { GamesLevelType } from '../../../../../../types/games';
import { useSearchParams } from 'react-router-dom';
import { numberHuntingConfig } from '../config';
import { isNil } from 'lodash';
import { ProgressBar } from '../../commonTasksComponents/ProgressBar';

export const NumberHuntingProgress: FC = () => {
  const [searchParams] = useSearchParams();
  const level = searchParams.get('level') as GamesLevelType;
  const levelInfo = numberHuntingConfig[level];

  if (isNil(levelInfo)) {
    throw new Error('');
  }

  return (
    <>
      <div
        className={s.cellZone}
        style={{ '--grid-size': levelInfo.dimension } as React.CSSProperties}
      >
        {generateCells(levelInfo)}
      </div>
      <ProgressBar duration={levelInfo.duration} />
    </>
  );
};
