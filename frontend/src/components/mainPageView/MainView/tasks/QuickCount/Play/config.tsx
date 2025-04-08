import { GamesConfigType, IGameParams } from '../../../../../../types/games';

export const gameConfig: Partial<GamesConfigType> = {
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

export const tooltipConfig = (
  concatTooltipInfo: (message: string, param: number, unit: boolean) => string,
  //@ts-ignore
  ref,
  levelInfo: IGameParams,
) => (
  <>
    <h4>{concatTooltipInfo(ref.duration, levelInfo.duration, true)}</h4>
    <h4>
      От {levelInfo.range[0]} до {levelInfo.range[1]}
    </h4>
    <h4>{concatTooltipInfo(ref.period, levelInfo.changePeriod, true)}</h4>
  </>
);
