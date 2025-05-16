import { AxiosService } from '../../../../../axios/AxiosService';
import { API_CLOSE_APPLICATIONS, API_GET_APPLICATIONS } from '@common/constants/api';
import { ApplicationStatusesType } from '../../../../../types/applicationTypes';

export const getApplications = async (): Promise<any> => {
  const data = await AxiosService.GET(API_GET_APPLICATIONS);
  return data.data;
};

export const closeApplication = async (
  applicationId: string,
  decision: ApplicationStatusesType,
) => {
  const data = await AxiosService.PATCH(API_CLOSE_APPLICATIONS, {
    params: { applicationId, decision },
  });
  return data;
};
