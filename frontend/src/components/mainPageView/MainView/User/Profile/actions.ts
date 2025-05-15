import { AxiosService } from '../../../../../axios/AxiosService';
import { IOptions, IUserData } from '../../../../../types/commonTypes';
import {
  API_COURSES_GET_ALL,
  API_CREATE_GROUP,
  API_GET_ALL_GROUPS,
  API_GET_ALL_USERS,
  API_GET_GROUP_BY_ID,
  API_WHO_AM_I,
} from '@common/constants/api';
import { IGroupCreateDtoOut, IGroupsAllDtoIn } from '../../../../../types/groupTypes';
import { mapUsersForGroups } from './mapper';
import { ICoursesInDTO } from '../../../../../types/coursesTypes';
import { IUpdateUserInfoDtoOut } from '../../../../../types/userTypes';

export const updateUserProfile = async (
  dto: IUpdateUserInfoDtoOut,
): Promise<IUserData> => {
  const data = await AxiosService.POST<any, IUserData>(`API_UPDATE_PROFILE`, {
    data: dto,
  });
  return data.data;
};

export const getUserData = async (userId: string): Promise<IUserData> => {
  const data = await AxiosService.GET<IUserData>(API_WHO_AM_I, {
    params: {
      userId,
    },
  });
  return data.data;
};

export const getAllGroups = async (): Promise<IGroupsAllDtoIn[]> => {
  const data = await AxiosService.GET<IGroupsAllDtoIn[]>(API_GET_ALL_GROUPS);
  return data.data;
};

export const createGroup = async (
  dto: IGroupCreateDtoOut,
): Promise<IGroupsAllDtoIn[]> => {
  try {
    const data = await AxiosService.POST<IGroupCreateDtoOut, IGroupsAllDtoIn[]>(
      API_CREATE_GROUP,
      {
        data: {
          ...dto,
          duration: Number(dto.duration),
          groupNumber: Number(dto.groupNumber),
          maxStudents: Number(dto.groupNumber),
        },
      },
    );
    return data.data;
  } catch (e) {
    throw e;
  }
};

export const getStudents = async (): Promise<IOptions[]> => {
  const data = await AxiosService.POST<null, IUserData[]>(API_GET_ALL_USERS, {
    data: null,
    params: {
      roles: 'user',
    },
  });
  return mapUsersForGroups(data.data);
};

export const getGroupById = async (groupId: string) => {
  const data = await AxiosService.GET(API_GET_GROUP_BY_ID, {
    params: { groupId },
  });
  return data.data;
};

export const getAllCoursesForGroups = async (): Promise<IOptions[]> => {
  const data = await AxiosService.GET<ICoursesInDTO[]>(API_COURSES_GET_ALL);
  return data.data.map((course: ICoursesInDTO) => ({
    label: course.name,
    value: course.id,
  }));
};
