import { create, StoreApi, UseBoundStore } from 'zustand';
import { GamesType, IGameStore, ILevelsFields } from '../types/games';

export const useGameStore: UseBoundStore<StoreApi<IGameStore>> = create<IGameStore>(
  (set) => {
    const gameSetter = (
      gameName: GamesType | null,
      gameConfig: ILevelsFields | null | undefined,
    ) =>
      set({
        gameName,
        gameConfig,
      });

    return {
      gameName: null,
      setGame: gameSetter,
      gameConfig: null,
    };
  },
);
