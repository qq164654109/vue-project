import Vue from 'vue';
import * as custom from './custom';

Object.keys(custom).forEach(key => {
  const name = key.replace(/[A-Z]/g, function (EN) {
    return '-' + EN.toLowerCase();
  });
  Vue.component(name, custom[key]);
});
