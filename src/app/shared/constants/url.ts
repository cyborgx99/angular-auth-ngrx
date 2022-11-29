import { environment } from 'src/environments/environment';

const apiRouteBaseUrls = {
  auth: {
    base: 'auth',
    signUp: 'sign-up',
    login: 'sign-in',
    currentUser: 'current-user',
  },
};

export const apiRouteUrl = {
  auth: {
    signUp: `${environment.apiUrl}/${apiRouteBaseUrls.auth.base}/${apiRouteBaseUrls.auth.signUp}`,
    login: `${environment.apiUrl}/${apiRouteBaseUrls.auth.base}/${apiRouteBaseUrls.auth.login}`,
    currentUser: `${environment.apiUrl}/${apiRouteBaseUrls.auth.base}/${apiRouteBaseUrls.auth.currentUser}`,
  },
};
