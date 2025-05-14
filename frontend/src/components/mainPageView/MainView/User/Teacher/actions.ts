import { AxiosService } from '../../../../../axios/AxiosService';
import { API_GET_APPLICATIONS } from '@common/constants/api';

export const getApplications = async (): Promise<any> => {
  const data = await AxiosService.GET(API_GET_APPLICATIONS);
  return data.data;
};
