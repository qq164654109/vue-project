import Vue from 'vue';
import store from '@/store';

function hasPermission(authRoles) {
  const userRoles = store.getters.roles;
  return userRoles.some(role => authRoles.includes(role));
}

//权限验证
Vue.directive('permission', {
  bind: function(el, binding) {
    const { value } = binding;
    if (!hasPermission(value, store.getters.roles)) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  }
});

Vue.prototype.$permission = hasPermission;
