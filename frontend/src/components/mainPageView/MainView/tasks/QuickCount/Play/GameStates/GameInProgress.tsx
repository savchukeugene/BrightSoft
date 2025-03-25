import { FC } from 'react';
import s from '../styles.module.scss';

import clockEnd from '../../svg/clock-end.svg';
import clockStart from '../../svg/clock-start.svg';

interface IGameFields {
  value: string | null;
  duration: number;
}

const GameInProgress: FC<IGameFields> = ({ value, duration }) => {
  return (
    <>
      <div className={s.gameText}>{value}</div>
      <div className={s.progressBar}>
        <img
          src={clockEnd}
          alt={'clock end'}
          className={s.sideIcons}
        />
        <div className={s.progressBar_zone}>
          <div
            className={s.progressBar_item}
            style={{ animationDuration: `${duration}s` }}
          />
        </div>
        <img
          src={clockStart}
          alt={'clock start'}
          className={s.sideIcons}
        />
      </div>
    </>
  );
};

export default GameInProgress;
