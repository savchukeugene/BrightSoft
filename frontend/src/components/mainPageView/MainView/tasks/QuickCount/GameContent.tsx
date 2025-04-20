import { FC } from 'react';
import PreparingForAGame from './GameStates/PreparingForAGame';
import GameInProgress from './GameStates/GameInProgress';
import Final from './GameStates/Final';
import { IGameContent } from '../../../../../types/games';

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
