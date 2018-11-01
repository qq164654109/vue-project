import router from './index';
import store from '@/store';
import i18n from '@/lang';
import { Message } from 'element-ui';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { getToken, hasPermission } from "@/utils/auth";

const whiteList = ['/login', '/401', '/404'];

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (getToken()) {
    if (to.path === '/login') {
      next('/');
      NProgress.done();
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('getRoles').then(res => {
          const roles = res;
          store.dispatch('verifyRoutes', roles).then(() => {
            router.addRoutes(store.getters.verifiedRoutes);
            next({ ...to, replace: true});
          })
        }).catch(() => {
          const message = i18n.t('message.verifyRoutesFailed');
          Message.error(message);
          next('/')
        })
      } else {
        if (!hasPermission(to, store.getters.roles)) {
          next({ path: '/401', replace: true })
        } else {
          next()
        }
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      const message = i18n.t('message.loginTip');
      Message.error(message);
      next({ path: '/login', query: { redirect: to.path }});
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done()
});
