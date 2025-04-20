import { FC } from 'react';
import { IGameContent } from '../../../../../types/games';
import { NumberHuntPrepare } from './GameStates/NumberHuntPrepare';
import { NumberHuntingProgress } from './GameStates/NumberHuntingProgress';

export const NumberHuntGameContent: FC<Partial<IGameContent>> = ({
  state,
  handleStart = () => {},
}) => {
  switch (state) {
    case 'prepare':
      return <NumberHuntPrepare handleStart={handleStart} />;
    case 'progress':
      return <NumberHuntingProgress />;
    case 'final':
      return <></>;
  }
};
