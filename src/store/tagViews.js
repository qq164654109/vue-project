const tagViews = {
  state: {
    routeTags: []
  },
  mutations: {
    ADD_ROUTE_TAGS: (state, routeTag) => {
      if (state.routeTags.some(tag => tag.name === routeTag.name)) {
        return
      }
      state.routeTags.push(routeTag);
    },
    DEL_ROUTE_TAGS: (state, routeTag) => {
      for (const [index, tag] of state.routeTags.entries()) {
        if (tag.name === routeTag.name) {
          state.routeTags.splice(index, 1);
          break;
        }
      }
    },
  }
};

export default tagViews
