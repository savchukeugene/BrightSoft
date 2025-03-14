import AxiosService from '../../../axios/AxiosService.tsx';
import { IRegisterDTO } from '../../../types/commonTypes.ts';

export const register = async (dto: IRegisterDTO) => {
  try {
  } catch (e) {
    return e;
  }
  const user = await AxiosService.POST('http://localhost:44001/auth/register', {
    data: dto,
  });

  return user;
};
