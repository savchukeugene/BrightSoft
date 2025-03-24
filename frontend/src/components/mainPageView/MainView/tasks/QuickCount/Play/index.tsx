import s from './styles.module.scss';
import { useState } from 'react';
import PreparingForAGame from './GameStates/PreparingForAGame.tsx';
import GameInProgress from './GameStates/GameInProgress.tsx';

const Play = () => {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const handleStart = () => setIsGameStarted(true);
  return (
    <section className={s.play}>
      {isGameStarted ? (
        <GameInProgress />
      ) : (
        <PreparingForAGame handleStart={handleStart} />
      )}
    </section>
  );
};

export default Play;
