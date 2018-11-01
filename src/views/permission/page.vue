<template>
  <div class="permission-page">
    <div class="roles-list">
      你的角色：
      <el-tag type="success">{{$t('role.'+ roles[0])}}</el-tag>
    </div>
    <div class="switch-roles">
      切换角色：
      <switch-group :group="group" :activeKey="roles[0]" @change="handleChange"></switch-group>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import switchGroup from '@/components/switchGroup';

  export default {
    data() {
      return {
        group: [
          { key: 'admin', label: '管理员' }, { key: 'editor', label: '编辑员' }
        ]
      }
    },
    computed: {
      ...mapGetters([
        'roles'
      ])
    },
    methods: {
      handleChange(item) {
        const roles = [item.key];
        this.$store.dispatch('putRoles', roles).then(() => {
          this.$router.push('/permission/page?'+ new Date());
        });
      }
    },
    components: {
      switchGroup
    }
  }
</script>

<style lang="scss">
  .permission-page {
    padding: 30px 50px;
    .roles-list {
      margin-bottom: 20px;
    }
  }
</style>
