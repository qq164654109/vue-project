<template>
  <div class="sticky-demo">
    <div class="a"></div>
    <div class="b" v-sticky></div>
    <div class="c"></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .sticky-demo {
    padding-top: 100px;
    .a {
      float: left;
      width: 100px;
      height: 200px;
    }
    .b {
      float: left;
      width: 100px;
      height: 200px;
      background-color: #409eff;
    }
    .c {
      clear: both;
      height: 1000px;
    }
    .test {
      width: 200px;
      height: 40px;
      background: linear-gradient(90deg,#20b6f9,#20b6f9 0,#2178f1 100%,#2178f1 0);
    }
    .content {
      height: 1200px;
    }
  }
</style>
