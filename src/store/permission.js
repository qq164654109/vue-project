import { constantRoutes, asyncRoutes } from '@/router/index';
import { hasPermission } from '@/utils/auth';
const permission = {
  state: {
    verifiedRoutes: [],
  },
  mutations: {
    SET_VERIFIED_ROUTES: (state, filterRoutes) => {
      state.verifiedRoutes = constantRoutes.concat(filterRoutes)
    }
  },
  actions: {
    verifyRoutes: ({ commit, state }, userRoles) => {
      return new Promise(resolve => {
        let filterRoutes;
        if (userRoles.includes('admin')) {
          filterRoutes = asyncRoutes;
        } else {
          filterRoutes = filterRoutesByRoles(asyncRoutes, userRoles);
        }
        commit('SET_VERIFIED_ROUTES', filterRoutes);
        resolve();
      })
    }
  }
};

function filterRoutesByRoles(routes, userRoles) {
  let filterRoutes = [];
  routes.forEach(route => {
    let tmp = {...route};
    if (hasPermission(tmp, userRoles)) {
      if (tmp.children) {
        tmp.children = filterRoutesByRoles(tmp.children, userRoles)
      }
      filterRoutes.push(tmp);
    }
  });
  return filterRoutes;
}

export default permission;
