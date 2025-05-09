const apiReferences = {
  protocol: 'http://',
  host: 'localhost',
  port: '44001',
  server: {
    auth: {
      register: 'register',
      login: 'login',
      logout: 'logout',
      passwordRecovery: 'passwordRecovery',
    },
  },
};

type getIdReturnStrFunction = (id: string) => string;

const ref: string = `${apiReferences.protocol + apiReferences.host}:${apiReferences.port}`;

// Auth api
const auth_ref: string = `${ref}/auth`;
export const API_REGISTER: string = `${auth_ref}/${apiReferences.server.auth.register}`;
export const API_LOGIN: string = `${auth_ref}/${apiReferences.server.auth.login}`;
export const API_LOGOUT: string = `${auth_ref}/${apiReferences.server.auth.logout}`;
export const API_PASSWORD_RECOVERY: string = `${auth_ref}/${apiReferences.server.auth.passwordRecovery}`;

// USER
const user_ref: string = `${ref}/users`;
export const API_WHO_AM_I: string = `${user_ref}/whoAmI`;
export const API_GET_ALL_USERS: string = `${user_ref}/allUsers`;
export const API_GET_USER_INFO: string = `${user_ref}/userInfo`;
export const API_DELETE_USER: string = `${user_ref}/deleteUser`;
export const API_SCORING: string = `${user_ref}/scoring`;
export const API_GET_STARS: string = `${user_ref}/getStars`;
export const API_UPDATE_USER: string = `${user_ref}/update`;

// Courses
const courses_ref: string = `${ref}/courses`;
const lesson_ref: string = `${courses_ref}/lesson`;
export const API_COURSES_GET_ALL: string = `${courses_ref}/all`;
export const API_COURSES_GET_BY_ID: getIdReturnStrFunction = (id: string) =>
  `${courses_ref}/${id}`;
export const API_COURSE_DELETE: getIdReturnStrFunction = (id: string): string =>
  `${courses_ref}/delete?courseId=${id}`;
export const API_COURSE_HIDE: string = `${courses_ref}/hide`;
export const API_COURSES_CREATE: string = `${courses_ref}/create`;
export const API_COURSES_EDIT: string = `${courses_ref}/edit`;
export const API_COURSES_UPLOAD: string = `${courses_ref}/upload`;
export const API_COURSES_LESSON_CREATE: string = `${lesson_ref}/create`;
export const API_COURSES_LESSON_DELETE: getIdReturnStrFunction = (id: string): string =>
  `${lesson_ref}/delete?lessonId=${id}`;
export const API_COURSES_LESSON_HIDE: string = `${lesson_ref}/hide`;
export const API_COURSES_LESSON_EDIT: string = `${lesson_ref}/edit`;
export const API_COURSES_LESSON_UPLOAD: (type: 'image' | 'video') => string = (
  type: 'image' | 'video',
): string => `${lesson_ref}/upload/${type}`;
