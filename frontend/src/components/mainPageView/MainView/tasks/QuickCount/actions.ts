import { IActionsFormat, IUserData } from '../../../../../types/commonTypes';
import AxiosService from '../../../../../axios/AxiosService';
import { API_SCORING } from '@common/constants/api';
import { isNil } from 'lodash';

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
    if (isNil(data?.data?.id)) {
      throw new Error();
    }
    return { data: data?.data?.stars, ok: true };
  } catch (e) {
    return { data: null, ok: false };
  }
};
