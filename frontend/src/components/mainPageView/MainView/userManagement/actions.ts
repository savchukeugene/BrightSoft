import { IUserRoles } from '../../../../store/userStore';
import AxiosService from '../../../../axios/AxiosService';
import {
  API_DELETE_USER,
  API_GET_ALL_USERS,
  API_GET_USER_INFO,
} from '../../../../common/constants/api';
import {
  IActionsFormat,
  IAllUsersMapped,
  IUserData,
} from '../../../../types/commonTypes';
import { allUsersDataMapper, userDataMapper } from './mapper';
import { IUserMapped } from '../../../../types/userTypes';
import { notification } from 'antd';
import { messages } from '../../../../common/constants/messages';

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
    return { data: null, ok: false };
  }
};

export const deleteUser = async (id: string): Promise<void> => {
  try {
    await AxiosService.DELETE<{ id: string }>(API_DELETE_USER, {
      data: { id },
    });
  } catch (e) {
    notification.error({
      message: messages.notification.error.unknownError,
      description: '',
    });
  }
};
