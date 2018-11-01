<template>
  <el-dropdown trigger="click" @command="onCommand">
    <div class="lang-select pointer">
      <icon-svg icon-class="fanyi"></icon-svg>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="cn">中文</el-dropdown-item>
      <el-dropdown-item command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  export default {
    methods: {
      onCommand(lang) {
        this.$i18n.locale = lang;
        let message = this.$t('message.switchLanguageSuccess');
        this.$message.success(message)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lang-select {
    width: 50px;
    height: 50px;
    font-size: 24px;
    text-align: center;
    line-height: 50px;
  }
</style>
