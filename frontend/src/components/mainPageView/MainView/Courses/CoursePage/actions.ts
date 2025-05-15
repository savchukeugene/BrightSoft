import { AxiosService } from '../../../../../axios/AxiosService';
import {
  API_CREATE_APPLICATION,
  API_GET_GROUP_BY_COURSE_ID,
  API_GET_LESSON_BY_COURSE,
  API_LESSON_CREATE,
} from '@common/constants/api';
import {
  ILessonCreateDtoIn,
  ILessonCreateDtoOut,
  ILessonCreateFormInfo,
} from '../../../../../types/lessonTypes';
import { ICreateApplicationDtoOut } from '../../../../../types/applicationTypes';
import {
  ICreateApplicationGroupsData,
  IGroupsAllDtoIn,
} from '../../../../../types/groupTypes';
import { mapGroupsData } from './mapper';

export const getLessonByCourseId = async (courseId: string) => {
  try {
    const data = await AxiosService.GET<{ courseId: string }>(API_GET_LESSON_BY_COURSE, {
      params: { courseId },
    });
    return data;
  } catch (e) {
    return [];
  }
};

export const createLesson = async (
  dto: ILessonCreateFormInfo,
  course: string,
): Promise<ILessonCreateDtoIn | null> => {
  try {
    const data = await AxiosService.POST<ILessonCreateDtoOut, ILessonCreateDtoIn>(
      API_LESSON_CREATE,
      {
        data: { ...dto, course: course },
      },
    );

    if (!data) {
      throw new Error();
    }

    return data.data;
  } catch (e) {
    return null;
  }
};

export const createApplication = async (dto: ICreateApplicationDtoOut): Promise<any> => {
  const data = await AxiosService.POST<ICreateApplicationDtoOut, any>(
    API_CREATE_APPLICATION,
    {
      data: dto,
    },
  );
  return data.data;
};

export const getGroupsByCourseId = async (
  courseId: string,
): Promise<ICreateApplicationGroupsData[]> => {
  const data = await AxiosService.GET<IGroupsAllDtoIn[]>(API_GET_GROUP_BY_COURSE_ID, {
    params: { courseId },
  });
  const mappedData: ICreateApplicationGroupsData[] = mapGroupsData(data.data);
  return mappedData;
};
