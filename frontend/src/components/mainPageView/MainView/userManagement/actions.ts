import { IUserRoles } from '../../../../store/userStore.tsx';
import AxiosService from '../../../../axios/AxiosService.tsx';
import { API_GET_ALL_USERS } from '../../../../common/constants/api.ts';
import {
  IActionsFormat,
  IAllUsersMapped,
  IUserData,
} from '../../../../types/commonTypes.ts';
import { allUsersDataMapper } from './mapper.ts';

export const getAllUsers = async (
  role: IUserRoles,
): Promise<IActionsFormat<IAllUsersMapped[] | null>> => {
  try {
    const { data } = await AxiosService.POST<IUserData[]>(API_GET_ALL_USERS, {
      data: {
        role,
      },
    });

    const mappedData: IAllUsersMapped[] = allUsersDataMapper(data?.data ?? []);
    return { data: mappedData, ok: true };
  } catch (e) {
    return { data: null, ok: false };
  }
};
