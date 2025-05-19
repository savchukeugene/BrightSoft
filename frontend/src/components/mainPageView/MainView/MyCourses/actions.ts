import { AxiosService } from '../../../../axios/AxiosService';
import { ICoursesInDTO } from '../../../../types/coursesTypes';
import { API_COURSES_GET_BY_ID_ARRAY } from '@common/constants/api';

export const getCoursesByIdArray = async (idArray: string[]) => {
  const data = await AxiosService.GET<ICoursesInDTO[]>(API_COURSES_GET_BY_ID_ARRAY, {
    params: { idArray: idArray },
  });
  return data.data;
};
