import {Axios} from "axios";
import {AxiosService} from "../../../../../axios/AxiosService";
import {API_GET_USER_COURSES} from "@common/constants/api";

const getUserCourses = async (id: string) => {
    try {
        const data = await AxiosService.GET<any>(API_GET_USER_COURSES, {
            params: {id}
        })

    }
}