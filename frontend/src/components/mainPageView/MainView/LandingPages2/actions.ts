import { AxiosService } from '../../../../axios/AxiosService';
import {
  ILandingPageData,
  ILandingPagesInDTO,
  ICreateLandingPagesOutDTO,
} from '../../../../types/landingPageTypes';
import {
  // API_LANDING_DELETE,
  // API_LANDING_HIDE,
  API_LANDING_CREATE,
  API_LANDING_EDIT,
  API_LANDING_GET_ALL,
  API_LANDING_GET_BY_ID,
} from '@common/constants/api';
import { notification } from 'antd';
import { isNil } from 'lodash';

export const getAllLandingPages = async (): Promise<ILandingPagesInDTO[]> => {
  try {
    const data = await AxiosService.GET<ILandingPagesInDTO[]>(API_LANDING_GET_ALL);
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

// export const deleteCourseById = async (id: string): Promise<ILandingPagesInDTO[] | void> => {
//   try {
//     const data = await AxiosService.DELETE<null, ILandingPagesInDTO[]>(API_LANDING_DELETE(id));
//     if (isNil(data)) {
//       throw new Error();
//     }
//     return data.data;
//   } catch (e) {
//     notification.error({
//       message: 'Произошла ошибка',
//       description: 'Произошла неизвестная ошибка! Пожалуйста, обратитесь в техподдержку',
//     });
//   }
// };

// export const hideCourseById = async (id: string) => {
//   try {
//     const data = await AxiosService.POST<{ id: string }, ILandingPagesInDTO[]>(
//       API_LANDING_HIDE,
//       {
//         data: { id },
//       },
//     );
//     if (isNil(data)) {
//       throw new Error();
//     }
//     return data.data;
//   } catch (e) {
//     notification.error({
//       message: 'Произошла ошибка',
//       description: 'Произошла неизвестная ошибка! Пожалуйста, обратитесь в техподдержку',
//     });
//   }
// };

export const createLandingPage = async (dto: ICreateLandingPagesOutDTO) => {
  try {
    const data = await AxiosService.POST<ICreateLandingPagesOutDTO, ILandingPagesInDTO[]>(
      API_LANDING_CREATE,
      {
        data: { ...dto, users: [] },
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

export const editLandingPage = async (dto: Partial<ILandingPagesInDTO>) => {
  try {
    const data = await AxiosService.POST<Partial<ILandingPagesInDTO>, ILandingPagesInDTO[]>(
      API_LANDING_EDIT,
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

export const getLandingPageInfo = async (id: string): Promise<ILandingPageData | null> => {
  try {
    const data = await AxiosService.POST<{ id: string }, ILandingPageData>(
      API_LANDING_GET_BY_ID(id),
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