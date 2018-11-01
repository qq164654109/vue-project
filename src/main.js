// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import 'normalize.css/normalize.css';
import '@/style/index.scss';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/font/iconfont.css';
import './assets/font/iconfont';

// import vuescroll from 'vuescroll/dist/vuescroll-native';
// import 'vuescroll/dist/vuescroll.css';

import App from './App';
import router from './router';
import store from './store';
import i18n from './lang';

import './components';
import './router/guard';

import './directive';

import promise from 'es6-promise';

promise.polyfill();

Vue.use(Element);
// Vue.use(vuescroll, {
//   ops: {
//     bar: {
//       background: 'rgba(144,147,153,.3)'
//     },
//     scrollPanel: {
//       scrollingX: false
//     }
//   }
// });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
});
