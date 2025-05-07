import { IUserData, IUserScoringOutDTO } from '../../../../../types/commonTypes';
import { API_SCORING } from '@common/constants/api';
import { AxiosService } from '../../../../../axios/AxiosService';

export const scoring = async (
  isUserWin: boolean,
  id: string,
): Promise<IUserData | null> => {
  const operation = isUserWin ? 'accrue' : 'takeAway';
  try {
    const data = await AxiosService.POST<IUserScoringOutDTO, IUserData>(API_SCORING, {
      data: {
        amount: 40,
        operation,
        id,
      },
    });

    if (!data) {
      return null;
    }

    return data.data;
  } catch (e) {
    return null;
  }
};
