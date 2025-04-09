const games = ['quickCount', 'numberHunt'] as const;
export type GamesType = (typeof games)[number];

const gameLevels = ['superEasy', 'easy', 'normal', 'hard', 'custom'] as const;
export type GamesLevelType = (typeof gameLevels)[number];

export type GamesConfigType = {
  [key in GamesLevelType]: IQuickCountParams;
};

export type NumberHuntingConfigType = {
  [key in GamesLevelType]: INumberHuntingParams;
};

export interface ILevelsFields {
  label: string;
  name: GamesLevelType;
  starsAmount: number | string;
  boxShadow: string;
}

export interface IGameStore {
  gameName: GamesType | null;
  gameConfig: ILevelsFields | null;
  setGame: (
    gameName: GamesType | null,
    gameConfig: ILevelsFields | null | undefined,
  ) => void;
}

export interface IQuickCountParams {
  duration: number;
  range: [number, number];
  changePeriod: number;
}

export interface INumberHuntingParams {
  duration: number;
  dimension: number;
}
