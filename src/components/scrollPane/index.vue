<template>
  <el-scrollbar class="scroll-container">
    <slot></slot>
  </el-scrollbar>
</template>

<script>
  export default {
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .scroll-container {
    width: 100%;
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: 34px;
    }
  }
</style>
