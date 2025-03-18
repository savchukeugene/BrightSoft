import { IUserRoles } from '../../../../store/userStore.tsx';
import AxiosService from '../../../../axios/AxiosService.tsx';
import {
  API_GET_ALL_USERS,
  API_GET_USER_INFO,
} from '../../../../common/constants/api.ts';
import {
  IActionsFormat,
  IAllUsersMapped,
  IUserData,
} from '../../../../types/commonTypes.ts';
import { allUsersDataMapper, userDataMapper } from './mapper.ts';
import { IUserMapped } from '../../../../types/userTypes.ts';

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

export const getUser = async (
  role: IUserRoles,
  email: string,
): Promise<IActionsFormat<IUserMapped | null>> => {
  try {
    const { data } = await AxiosService.POST<IUserData>(API_GET_USER_INFO, {
      data: {
        role,
        email,
      },
    });

    const mappedData: IUserMapped = userDataMapper(data?.data as IUserData);
    return { data: mappedData, ok: true };
  } catch (e) {
    console.log(e);
    return { data: null, ok: false };
  }
};
