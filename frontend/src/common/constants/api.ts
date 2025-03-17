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

// Auth api
const ref = `${apiReferences.protocol + apiReferences.host}:${apiReferences.port}/auth`;
export const API_REGISTER: string = `${ref}/${apiReferences.server.auth.register}`;
export const API_LOGIN: string = `${ref}/${apiReferences.server.auth.register}`;
export const API_LOGOUT: string = `${ref}/${apiReferences.server.auth.register}`;
export const API_PASSWORD_RECOVERY: string = `${ref}/${apiReferences.server.auth.register}`;
