import AxiosService from '../../../axios/AxiosService.tsx';
import {ILoginDTO} from '../../../types/commonTypes.ts';

export const loginBazevich = async (dto: ILoginDTO) => {
    try {
    } catch (e) {
        return e;
    }
    const user = await AxiosService.POST('http://localhost:44001/auth/login', {
        data: dto,
    });

    return user;
};
