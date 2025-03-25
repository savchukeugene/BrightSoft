import { FC } from 'react';
import PreparingForAGame from './GameStates/PreparingForAGame.tsx';
import GameInProgress from './GameStates/GameInProgress.tsx';
import Final from './GameStates/Final.tsx';
const gameStates = ['prepare', 'progress', 'final'] as const;
type GameStates = (typeof gameStates)[number];
const GameContent: FC<{ state: GameStates }> = ({ state }) => {
  switch (state) {
    case 'prepare':
      return <PreparingForAGame handleStart={() => {}} />;
    case 'progress':
      return (
        <GameInProgress
          value={''}
          duration={3}
        />
      );
    case 'final':
      return <Final />;
  }
};

export default GameContent;
