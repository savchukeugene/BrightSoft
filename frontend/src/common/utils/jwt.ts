import { IAccessToken } from '../../types/commonTypes.ts';

export const parseJwt = (token: string): IAccessToken => {
  var base64Url: string = token.split('.')[1];
  var base64: string = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload: string = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );

  return JSON.parse(jsonPayload);
};
