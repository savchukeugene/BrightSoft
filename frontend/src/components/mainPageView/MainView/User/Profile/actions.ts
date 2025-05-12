import { AxiosService } from '../../../../../axios/AxiosService';
import { IUserData, IUserInfo } from '../../../../../types/commonTypes';

export const getUserInfoPublic = async (id: string): Promise<IUserInfo | undefined> => {
  try {
    const data = await AxiosService.GET<IUserInfo>(`API_GET_USER_INFO_PUBLIC`, {
      params: { id },
    });
    if (!data) {
      throw new Error();
    }
    return data.data;
  } catch (e) {
    console.error('Error in getUserInfoPublic:', e);
    return undefined;
  }
};

export const updateUserProfile = async (dto: {
  id: string;
  firstName?: string;
  secondName?: string;
  fatherName?: string;
  userName?: string;
  email?: string;
  password?: string;
}): Promise<IUserData> => {
  try {
    const data = await AxiosService.POST<any, IUserData>(`API_UPDATE_PROFILE`, {
      data: dto,
    });
    if (!data) {
      throw new Error('No data returned from updateProfile');
    }
    return data.data;
  } catch (e) {
    console.error('Error in updateUserProfile:', e);
    throw e;
  }
};
