<template>
  <div class="guide">
    <el-button type="primary" icon="el-icon-question" @click.stop="startGuide">{{$t('guide.startGuide')}}</el-button>
  </div>
</template>

<script>
  import * as Driver from 'driver.js';
  import 'driver.js/dist/driver.min.css';

  export default {
    data() {
      return {
        driver: null
      }
    },
    methods: {
      startGuide() {
        this.driver.defineSteps(this.steps);
        this.driver.start();
      }
    },
    computed: {
      steps() {
        return [
          {
            element: '.collapse-btn',
            popover: {
              title: this.$t('guide.switchBtn'),
              description: this.$t('guide.sidebarSwitch'),
              position: 'bottom'
            }
          },
          {
            element: '.bread-wrapper',
            popover: {
              title: this.$t('guide.breadcrumb'),
              description: this.$t('guide.showPageLocation'),
              position: 'bottom'
            }
          },
          {
            element: '.lang-wrapper',
            popover: {
              title: this.$t('guide.langSwitch'),
              description: this.$t('guide.switchSystemLang'),
              position: 'left'
            }
          },
          {
            element: '.tags-view',
            popover: {
              title: this.$t('guide.tagsView'),
              description: this.$t('guide.showPageHistory'),
              position: 'bottom'
            }
          }
        ]
      }
    },
    created() {
      this.driver = new Driver();
    },
    beforeDestroy() {
      this.driver = null;
    }
  }
</script>

<style lang="scss" scoped>
  .guide {
    padding: 30px 50px;
  }
</style>
