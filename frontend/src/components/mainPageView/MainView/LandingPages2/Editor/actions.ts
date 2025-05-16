import { AxiosService } from '../../../../../axios/AxiosService';
import { API_GET_LESSON_BY_COURSE, API_LESSON_CREATE } from '@common/constants/api';
import {
  ILessonCreateDtoIn,
  ILessonCreateDtoOut,
  ILessonCreateFormInfo,
} from '../../../../../types/lessonTypes';

export const getLessonByLandingPageId = async (landingPageId: string) => {
  try {
    const data = await AxiosService.GET<{ landingPageId: string }>(API_GET_LESSON_BY_COURSE, {
      params: { landingPageId },
    });
    return data;
  } catch (e) {
    return [];
  }
};

export const createLesson = async (
  dto: ILessonCreateFormInfo,
  landingPage: string,
): Promise<ILessonCreateDtoIn | null> => {
  try {
    const data = await AxiosService.POST<ILessonCreateDtoOut, ILessonCreateDtoIn>(
      API_LESSON_CREATE,
      {
        data: { ...dto, course: landingPage },
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
