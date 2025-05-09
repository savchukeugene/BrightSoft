import { AxiosService } from '../../../../axios/AxiosService';
import {
  ICourseData,
  ICoursesInDTO,
  ICreateCourseOutDTO,
} from '../../../../types/coursesTypes';
import {
  API_COURSE_DELETE,
  API_COURSE_HIDE,
  API_COURSES_CREATE,
  API_COURSES_EDIT,
  API_COURSES_GET_ALL,
  API_COURSES_GET_BY_ID,
} from '@common/constants/api';
import { notification } from 'antd';
import { isNil } from 'lodash';

export const getAllCourses = async (): Promise<ICoursesInDTO[]> => {
  try {
    const data = await AxiosService.GET<ICoursesInDTO[]>(API_COURSES_GET_ALL);
    if (!data) {
      throw new Error();
    }
    return data.data;
  } catch (e) {
    notification.error({
      message: 'Произошла ошибка',
      description: 'Произошла неизвестная ошибка! Пожалуйста, обратитесь в техподдержку',
    });
    return [];
  }
};

export const deleteCourseById = async (id: string): Promise<ICoursesInDTO[] | void> => {
  try {
    const data = await AxiosService.DELETE<null, ICoursesInDTO[]>(API_COURSE_DELETE(id));
    if (isNil(data)) {
      throw new Error();
    }
    return data.data;
  } catch (e) {
    notification.error({
      message: 'Произошла ошибка',
      description: 'Произошла неизвестная ошибка! Пожалуйста, обратитесь в техподдержку',
    });
  }
};

export const hideCourseById = async (id: string) => {
  try {
    const data = await AxiosService.POST<{ id: string }, ICoursesInDTO[]>(
      API_COURSE_HIDE,
      {
        data: { id },
      },
    );
    if (isNil(data)) {
      throw new Error();
    }
    return data.data;
  } catch (e) {
    notification.error({
      message: 'Произошла ошибка',
      description: 'Произошла неизвестная ошибка! Пожалуйста, обратитесь в техподдержку',
    });
  }
};

export const createCourse = async (dto: ICreateCourseOutDTO) => {
  try {
    const data = await AxiosService.POST<ICreateCourseOutDTO, ICoursesInDTO[]>(
      API_COURSES_CREATE,
      {
        data: dto,
      },
    );
    if (isNil(data)) {
      throw new Error();
    }
    return data.data;
  } catch (e) {
    notification.error({
      message: 'Произошла ошибка',
      description: 'Произошла неизвестная ошибка! Пожалуйста, обратитесь в техподдержку',
    });
  }
};

export const editCourse = async (dto: Partial<ICoursesInDTO>) => {
  try {
    const data = await AxiosService.POST<Partial<ICoursesInDTO>, ICoursesInDTO[]>(
      API_COURSES_EDIT,
      {
        data: dto,
      },
    );
    if (isNil(data)) {
      throw new Error();
    }
    return data.data;
  } catch (e) {
    notification.error({
      message: 'Произошла ошибка',
      description: 'Произошла неизвестная ошибка! Пожалуйста, обратитесь в техподдержку',
    });
  }
};

export const getCourseInfo = async (id: string): Promise<ICourseData | null> => {
  try {
    const data = await AxiosService.POST<{ id: string }, ICourseData>(
      API_COURSES_GET_BY_ID(id),
      {
        data: { id },
      },
    );
    if (!data) {
      throw new Error();
    }
    return data.data;
  } catch (e) {
    notification.error({
      message: 'Произошла ошибка',
      description: 'Произошла неизвестная ошибка! Пожалуйста, обратитесь в техподдержку',
    });
    return null;
  }
};
