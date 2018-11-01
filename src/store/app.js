const app = {
  state: {
    sidebar: {
      isCollaps: false
    }
  },
  mutations: {
    SET_SIDEBAR_ISCOLLAPS: state => {
      state.sidebar.isCollaps = !state.sidebar.isCollaps
    }
  }
};

export default app;
