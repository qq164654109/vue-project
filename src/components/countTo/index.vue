<template>
  <div ref="countObj" class="count-to"></div>
</template>

<script>
  import CountUp from 'countup.js';

  export default {
    props: {
      startVal: {
        type: Number,
        default: 0
      },
      endVal: {
        type: Number,
        default: 0
      },
      decimals: {
        type: Number,
        default: 0
      },
      duration: {
        type: Number,
        default: 1.5
      },
      options: {
        type: Object
      }
    },
    methods: {
      initCount() {
        let $countObj = this.$refs['countObj'];
        let c = new CountUp(
          $countObj,
          this.startVal,
          this.endVal,
          this.decimals,
          this.duration,
          this.options
        );
        c.start();
      }
    },
    mounted() {
      this.initCount();
    }
  }
</script>

<style lang="scss" scoped>
  .count-to {
    display: inline-block;
  }
</style>
