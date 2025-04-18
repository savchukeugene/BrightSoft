import {
  INumberHuntingParams,
  NumberHuntingConfigType,
} from '../../../../../types/games';

export const numberHuntingConfig: Partial<NumberHuntingConfigType> = {
  superEasy: {
    duration: 15,
    dimension: 3,
  },
  easy: {
    duration: 12,
    dimension: 4,
  },
  normal: {
    duration: 10,
    dimension: 5,
  },
  hard: {
    duration: 10,
    dimension: 6,
  },
};

export const tooltipConfig = (
  concatTooltipInfo: (message: string, param: number, unit: boolean) => string,
  //@ts-ignore
  ref,
  levelInfo: INumberHuntingParams,
) => (
  <>
    <h4>{concatTooltipInfo(ref.duration, levelInfo.duration, true)}</h4>
    <h4>{concatTooltipInfo(ref.dimension, levelInfo.dimension, false)}</h4>
  </>
);
