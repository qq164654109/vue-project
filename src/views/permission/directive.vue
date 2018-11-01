<template>
  <div class="permission-directive">
    <div class="roles-list">
      你的角色：
      <el-tag type="success">{{$t('role.'+ roles[0])}}</el-tag>
    </div>
    <div class="switch-roles">
      切换角色：
      <switch-group :group="group" :activeKey="roles[0]" @change="handleChange"></switch-group>
    </div>
    <div class="roles-content">
      <el-alert class="alert-wrapper" v-if="$permission(['editor'])" title="只有编辑员可以看见（v-if 实现，可及时响应角色修改）" type="info"></el-alert>
      <el-alert class="alert-wrapper" v-if="$permission(['admin'])" title="只有管理员可以看见（v-if 实现，可及时响应角色修改）" type="warning"></el-alert>
      <el-alert class="alert-wrapper" v-permission="['editor']" title="只有编辑员可以看见（v-directive 实现，只在页面第一次加载时生效，不会响应角色修改，性能更高）" type="error"></el-alert>
      <el-alert class="alert-wrapper" v-permission="['admin']" title="只有管理员可以看见（v-directive 实现，只在页面第一次加载时生效，不会响应角色修改，性能更高）" type="error"></el-alert>
      <el-alert class="alert-wrapper" v-if="$permission(['admin', 'editor'])" title="编辑员，管理员都能看" type="success"></el-alert>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import switchGroup from '@/components/switchGroup'

  export default {
    data() {
      return {
        group: [
          { key: 'admin', label: '管理员' }, { key: 'editor', label: '编辑员' }
        ]
      }
    },
    methods: {
      handleChange(item) {
        const roles = [item.key];
        this.$store.dispatch('putRoles', roles);
      }
    },
    computed: {
      ...mapGetters([
        'roles'
      ])
    },
    components: {
      switchGroup
    }
  }
</script>

<style lang="scss" scoped>
  .permission-directive {
    padding: 30px 50px;
    .roles-list, .switch-roles{
      margin-bottom: 20px;
    }
    .roles-content {
      .alert-wrapper {
        margin-bottom: 15px;
      }
    }
  }
</style>
