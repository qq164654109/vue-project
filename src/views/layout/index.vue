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
  import sidebar from './sidebar';
  import navbar from './navbar';
  import tagsView from './tagsView';
  import routerMain from './routerMain';

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
    padding-left: 180px;
    overflow: hidden;
    transition: padding-left .3s;
    &.closeSidebar {
      padding-left: 64px;
    }
    .sidebar-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: #363F5E;
      overflow-x: hidden;
      overflow-y: auto;
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
