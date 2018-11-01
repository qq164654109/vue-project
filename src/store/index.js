import Vue from 'vue';
import Vuex from 'vuex';

import app from './app';
import user from './user';
import permission from './permission';
import tagViews from './tagViews';

import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    tagViews
  },
  getters
});

export default store;
