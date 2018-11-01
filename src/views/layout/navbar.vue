<template>
  <div class="navbar">
    <div class="collapse-btn pointer" @click="toggleSidebar">
      <i v-show="!sidebar.isCollaps" class="el-icon-more-outline"></i>
      <i v-show="sidebar.isCollaps" class="el-icon-more"></i>
    </div>
    <el-breadcrumb class="bread-wrapper" separator="/">
      <el-breadcrumb-item v-for="bread in breadData" :key="bread.name">
        {{$t('route.'+ bread.name)}}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="menu">
      <lang-select class="lang-wrapper"></lang-select>
      <el-dropdown class="avatar-wrapper" trigger="click" @command="onCommand">
        <div class="avatar pointer">
          <img src="../../../static/images/avatar.gif" width="40" height="40" alt="">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="dashboard">{{$t('navbar.dashboard')}}</el-dropdown-item>
          <el-dropdown-item command="logout">{{$t('navbar.logout')}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import langSelect from '@/components/langSelect/index';

  export default {
    methods: {
      toggleSidebar() {
        this.$store.commit('SET_SIDEBAR_ISCOLLAPS')
      },
      onCommand(command) {
        switch (command) {
          case 'dashboard':
            this.$router.push('/dashboard');
            return;
          case 'logout':
            this.$router.push('/login');
            return;
        }
      }
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
      breadData() {
        let breads = this.$route.matched;
        return breads.filter(bread => !!bread.name);
      }
    },
    components: {
      langSelect
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    .collapse-btn {
      float: left;
      height: 50px;
      padding: 0 10px;
      font-size: 28px;
    }
    .bread-wrapper {
      float: left;
      height: 50px;
      padding: 0 10px;
      font-size: 16px;
      line-height: 50px;
    }
    .menu {
      float: right;
      height: 50px;
      padding: 0 10px;
      .lang-wrapper {
        margin-right: 10px;
      }
      .avatar-wrapper {
        vertical-align: top;
        .avatar {
          height: 40px;
          margin-top: 5px;
          img {
            border-radius: 10px;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>
