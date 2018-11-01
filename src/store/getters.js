const getters = {
  sidebar: state => state.app.sidebar,
  roles: state => state.user.roles,
  verifiedRoutes: state => state.permission.verifiedRoutes,
  routeTags: state => state.tagViews.routeTags
};

export default getters;
