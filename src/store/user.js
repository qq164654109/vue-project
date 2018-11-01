const user = {
  state: {
    roles: []
  },
  mutations: {
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },
  actions: {
    getRoles: ({ commit }) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let roles = ['admin'];
          commit('SET_ROLES', roles);
          resolve(roles);
        }, 250);
      })
    },
    putRoles: ({ commit, dispatch }, roles) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('SET_ROLES', roles);
          dispatch('verifyRoutes', roles);
          resolve()
        }, 250)
      })
    }
  }
};

export default user;
