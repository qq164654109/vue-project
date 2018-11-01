import Cookies from 'js-cookie';

const tokenKey = 'access-token';

export function setToken(token) {
  return Cookies.set(tokenKey, token)
};

export function getToken() {
  return true
};

export function delToken() {
  return Cookies.remove(tokenKey)
};

export function hasPermission(route, roles) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true;
  }
};
