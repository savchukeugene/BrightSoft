import { FC } from 'react';
import PreparingForAGame from './GameStates/PreparingForAGame.tsx';
import GameInProgress from './GameStates/GameInProgress.tsx';
import Final from './GameStates/Final.tsx';
import { GameStates } from './index.tsx';

interface IGameContent {
  state: GameStates;
  handleStart: () => void;
  value: string | null;
  duration: number;
  result: number;
}

const GameContent: FC<IGameContent> = ({
  state,
  handleStart,
  value,
  duration,
  result,
}) => {
  switch (state) {
    case 'prepare':
      return <PreparingForAGame handleStart={handleStart} />;
    case 'progress':
      return (
        <GameInProgress
          value={value}
          duration={duration}
        />
      );
    case 'final':
      return <Final result={result} />;
  }
};

export default GameContent;
