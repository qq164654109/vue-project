<template>
  <div class="layout" :class="{'closeSidebar': sidebar.isCollaps}">
    <div class="sidebar-wrapper">
      <sidebar></sidebar>
    </div>
    <div class="content-wrapper">
      <navbar class="navbar-wrapper"></navbar>
      <tags-view class="tags-wrapper"></tags-view>
      <router-main class="main-wrapper"></router-main>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import sidebar from './modules/sidebar';
  import navbar from './modules/navbar';
  import tagsView from './modules/tagsView';
  import routerMain from './modules/routerMain';

  export default {
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    },
    components: {
      sidebar,
      navbar,
      tagsView,
      routerMain
    }
  }

</script>

<style lang="scss">
  .layout{
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: 200px;
    overflow: hidden;
    transition: padding-left .3s;
    &.closeSidebar {
      padding-left: 64px;
      .sidebar-wrapper {
        width: 64px;
      }
      .horizontal-collapse-transition {
        transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
      }
    }
    .sidebar-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 100%;
      background: #363F5E;
      overflow: hidden;
    }
    .content-wrapper {
      width: 100%;
      height: 100%;
      .navbar-wrapper {
        height: 50px;
        line-height: 50px;
        background: #fff;
        border-bottom: 1px solid #ebebeb;
      }
      .tags-wrapper {
        height: 35px;
        line-height: 35px;
        background: #fff;
        border-bottom: 1px solid #d8dce5;
        overflow: hidden;
      }
      .main-wrapper {
        position: relative;
        height: calc(100% - 85px);
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
  }
</style>
