<template>
  <div class="split-pane-demo">
    <split-pane :min-percent='20' :default-percent='30' split="vertical">
      <template slot="paneL">
        <div class="a">A</div>
      </template>
      <template slot="paneR">
        <split-pane split="horizontal">
          <template slot="paneL">
            <div class="b">B</div>
          </template>
          <template slot="paneR">
            <div class="c">C</div>
          </template>
        </split-pane>
      </template>
    </split-pane>
  </div>
</template>

<script>
  import splitPane from 'vue-splitpane';

  export default {
    components: {
      splitPane
    }
  }
</script>

<style lang="scss" scoped>
  .split-pane-demo {
    padding: 30px 50px;
    height: 100%;
    .a {
      display:flex;
      justify-content:center;
      align-items:center;
      height: 100%;
      font-size: 40px;
      color: #fff;
      background-color: #F28180;
    }
    .b {
      display:flex;
      justify-content:center;
      align-items:center;
      height: 100%;
      font-size: 40px;
      color: #fff;
      background-color: #FBE28B;
    }
    .c {
      display:flex;
      justify-content:center;
      align-items:center;
      height: 100%;
      font-size: 40px;
      color: #fff;
      background-color: #01CE84;
    }
    .d {
      display:flex;
      justify-content:center;
      align-items:center;
      height: 100%;
      font-size: 40px;
      color: #fff;
      background-color: #94E0D2;
    }
  }
</style>
