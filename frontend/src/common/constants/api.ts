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
    user: {},
  },
};

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
export const API_GET_ALL_USERS = `${user_ref}/allUsers`;
export const API_GET_USER_INFO = `${user_ref}/userInfo`;
export const API_DELETE_USER = `${user_ref}/deleteUser`;
export const API_ACCRUE_POINTS = `${user_ref}/accrue`;
export const API_TAKE_AWAY = `${user_ref}/takeAway`;
