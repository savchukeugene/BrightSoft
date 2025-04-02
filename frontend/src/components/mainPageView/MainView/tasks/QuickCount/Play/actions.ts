import { IActionsFormat } from '../../../../../../types/commonTypes';
import { AxiosResponse } from 'axios';
import AxiosService from '../../../../../../axios/AxiosService';
import { API_ACCRUE_POINTS, API_TAKE_AWAY } from '../../../../../../common/constants/api';

export const accruePoints = async (): Promise<
  IActionsFormat<AxiosResponse<string, any> | null>
> => {
  try {
    const { data } = await AxiosService.POST<string>(API_ACCRUE_POINTS, {
      data: {},
    });

    return { data, ok: true };
  } catch (e) {
    return { data: null, ok: false };
  }
};

export const takePointsAway = async (): Promise<
  IActionsFormat<AxiosResponse<string, any> | null>
> => {
  try {
    const { data } = await AxiosService.POST<string>(API_TAKE_AWAY, {
      data: {},
    });

    return { data, ok: true };
  } catch (e) {
    return { data: null, ok: false };
  }
};
