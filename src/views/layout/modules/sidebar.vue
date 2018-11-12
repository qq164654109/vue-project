<template>
    <el-menu
        class="sidebar"
        :collapse="sidebar.isCollaps"
        :default-active="$route.name"
        background-color="#363F5E"
        text-color="#fff"
        active-text-color="#fff">
        <template v-if="!route.hidden" v-for="route in verifiedRoutes">
          <el-submenu v-if="isIncludeChildRoutes(route)" :index="route.name">
            <template slot="title">
              <icon-svg class="nav-icon" :icon-class="route.meta.icon"></icon-svg>
              <span>{{$t('route.'+ route.name)}}</span>
            </template>
            <link-to v-if="!child.hidden" v-for="child in route.children" :key="child.name" :to="{name: child.name}">
              <el-menu-item :index="child.name">
                <span slot="title">{{$t('route.' + child.name)}}</span>
              </el-menu-item>
            </link-to>
          </el-submenu>
          <link-to v-else :to="{name: resolveRouteName(route)}">
            <el-menu-item :index="resolveRouteName(route)">
              <icon-svg class="nav-icon" :icon-class="resolveRouteIcon(route)"></icon-svg>
              <span slot="title">{{$t('route.'+ resolveRouteName(route))}}</span>
            </el-menu-item>
          </link-to>
        </template>
      </el-menu>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    methods: {
      isIncludeChildRoutes(route) {
        return route.children && route.children.length > 0 && route.name;
      },
      resolveRouteName(route) {
        return route.name ? route.name: route.children[0].name;
      },
      resolveRouteIcon(route) {
        return route.name ? route.meta.icon: route.children[0].meta.icon;
      }
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'verifiedRoutes'
      ])
    },
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    font-size: 22px !important;
  }
  .sidebar:not(.el-menu--collapse) {
    width: 200px;
  }
  .nav-icon {
    font-size: 18px;
    vertical-align: -0.3em !important;
    margin-right: 8px;
  }
</style>
