import { FC } from 'react';
import s from '../styles.module.scss';
import { ProgressBar } from '../../commonTasksComponents/ProgressBar';

interface IGameFields {
  value: string | null;
  duration: number;
}

const GameInProgress: FC<IGameFields> = ({ value, duration }) => {
  return (
    <>
      <div className={s.gameText}>{value}</div>
      <ProgressBar duration={duration} />
    </>
  );
};

export default GameInProgress;
