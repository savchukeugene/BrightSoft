import { GamesConfigType } from '../../../../../../types/commonTypes.ts';

export const gameConfig: GamesConfigType = {
  superEasy: {
    duration: 10,
    changePeriod: 2,
    range: [-10, 10],
  },
  easy: {
    duration: 15,
    changePeriod: 1.5,
    range: [-15, 15],
  },
  normal: {
    duration: 20,
    changePeriod: 0.7,
    range: [-30, 30],
  },
  hard: {
    duration: 25,
    changePeriod: 0.5,
    range: [-50, 50],
  },
};
