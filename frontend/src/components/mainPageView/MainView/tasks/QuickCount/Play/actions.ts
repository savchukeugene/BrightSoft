import { IActionsFormat, IUserData } from '../../../../../../types/commonTypes';
import AxiosService from '../../../../../../axios/AxiosService';
import { API_SCORING } from '@common/constants/api';

export const scoring = async (
  isUserWin: boolean,
  id: string,
): Promise<IActionsFormat<number | null>> => {
  const operation = isUserWin ? 'accrue' : 'takeAway';
  try {
    const { data } = await AxiosService.POST<IUserData>(API_SCORING, {
      data: {
        amount: 40,
        operation,
        id,
      },
    });
    return { data: data?.data?.stars ?? 0, ok: true };
  } catch (e) {
    return { data: null, ok: false };
  }
};
