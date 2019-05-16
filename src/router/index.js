import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/index';

Vue.use(Router);

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/index')
  },
  {
    path: '',
    redirect: 'dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          icon: 'yibiaopan'
        },
        component: () => import('@/views/dashboard/index')
      }
    ]
  },
  {
    path: '/guide',
    redirect: '/guide/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'guide',
        meta: {
          icon: 'icon_fabu'
        },
        component: () => import('@/views/guide/index')
      }
    ]
  },
  {
    path: '/documentation',
    redirect: '/documentation/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'documentation',
        meta: {
          icon: 'changjingguanli'
        },
        component: () => import('@/views/documentation/index')
      }
    ]
  },
  {
    path: '/401',
    name: '401',
    hidden: true,
    component: () => import('@/views/errorPage/401.vue')
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import('@/views/errorPage/404.vue')
  }
];

export const asyncRoutes = [
  {
    path: '/permission',
    name: 'permission',
    meta: {
      icon: 'icon_zhanghao'
    },
    redirect: '/permission/index',
    component: Layout,
    children: [
      {
        path: 'page',
        name: 'permissionPage',
        meta: {
          roles: ['admin']
        },
        component: () => import('@/views/permission/page')
      },
      {
        path: 'directive',
        name: 'permissionDirective',
        component: () => import('@/views/permission/directive')
      }
    ]
  },
  {
    path: '/tools',
    name: 'tools',
    meta: {
      icon: 'gongnengdingyi'
    },
    redirect: '/tools/index',
    component: Layout,
    children: [
      {
        path: '/tools/tinymceDemo',
        name: 'toolsTinymceDemo',
        component: () => import('@/views/tools/tinymceDemo')
      },
      {
        path: '/tools/markDownDemo',
        name: 'toolsMarkDownDemo',
        component: () => import('@/views/tools/markDownDemo')
      },
      {
        path: '/tools/jsonEditorDemo',
        name: 'toolsJsonEditorDemo',
        component: () => import('@/views/tools/jsonEditorDemo')
      },
      {
        path: '/tools/splitPaneDemo',
        name: 'toolsSplitPaneDemo',
        component: () => import('@/views/tools/splitPaneDemo')
      },
      {
        path: '/tools/imageUploadDemo',
        name: 'toolsImageUploadDemo',
        component: () => import('@/views/tools/imageUploadDemo')
      },
      // {
      //   path: '/tools/stickyDemo',
      //   name: 'toolsStickyDemo',
      //   component: () => import('@/views/tools/stickyDemo')
      // },
      {
        path: '/tools/lazyLoadSelectDemo',
        name: 'toolsLazyLoadSelectDemo',
        component: () => import('@/views/tools/lazyLoadSelectDemo')
      },
      {
        path: '/tools/dragDialogDemo',
        name: 'toolsDragDialogDemo',
        component: () => import('@/views/tools/dragDialogDemo')
      },
      {
        path: '/tools/dragListDemo',
        name: 'toolsDragListDemo',
        component: () => import('@/views/tools/dragListDemo')
      },
      {
        path: '/tools/calendarDemo',
        name: 'toolsCalendarDemo',
        component: () => import('@/views/tools/calendarDemo')
      }
    ]
  },
  {
    path: '/hightopo',
    name: 'hightopo',
    meta: {
      icon: 'guanlianshebei'
    },
    redirect: '/hightopo/node',
    component: Layout,
    children: [
      {
        path: '/hightopo/drawing',
        name: 'hightopoDrawing',
        component: () => import('@/views/hightopo/drawing')
      },
      {
        path: '/hightopo/node',
        name: 'hightopoNode',
        component: () => import('@/views/hightopo/node')
      }
    ]
  },
  {
    path: '/leaflet',
    redirect: '/leaflet/index',
    component: Layout,
    children: [
      {
        path: '/leaflet/index',
        name: 'leaflet',
        meta: {
          icon: 'guanlianshebei'
        },
        component: () => import('@/views/leaflet/index')
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];

export default new Router({
  routes: constantRoutes
})
