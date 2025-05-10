import { AxiosService } from '../../../../../axios/AxiosService';
import { API_GET_LESSON_BY_COURSE, API_LESSON_CREATE } from '@common/constants/api';
import {
  ILessonCreateDtoIn,
  ILessonCreateDtoOut,
  ILessonCreateFormInfo,
} from '../../../../../types/lessonTypes';

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
