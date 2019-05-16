<template>
  <div class="sticky-demo">
    <div class="a"></div>
    <div class="b" v-sticky="'.main-wrapper'"></div>
    <div class="c"></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .sticky-demo {
    height: 1200px;
    .a {
      width: 100px;
      height: 200px;
    }
    .b {
      width: 500px;
      height: 200px;
      padding: 50px;
      background-color: #409eff;
    }
    .c {
      clear: both;
      height: 1000px;
    }
  }
</style>
