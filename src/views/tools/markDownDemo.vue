<template>
  <div class="mark-down-demo">
    <div class="text-wrapper">
      <mark-down v-model="content"></mark-down>
      <button class="btn" @click="toHTML">转出 HTML</button>
    </div>
    <div class="html-wrapper" v-html="previewHTML">
    </div>
  </div>
</template>

<script>
  import showdown from 'showdown';
  import markDown from '@/components/markDown/index';

  export default {
    data() {
      return {
        content: '***测试***',
        previewHTML: ''
      }
    },
    methods: {
      toHTML() {
        const converter = new showdown.Converter();
        this.previewHTML = converter.makeHtml(this.content);
      }
    },
    mounted() {
      setTimeout(() => {
        this.content = '***测试***';
      }, 200)
    },
    components: {
      markDown
    }
  }
</script>

<style lang="scss" scoped>
  .mark-down-demo {
    padding: 30px 50px;
    .text-wrapper {
      position: relative;
      .btn {
        position: absolute;
        top: 8px;
        right: 5px;
        padding: 0 8px;
        color: #337ab7;
        letter-spacing: 1px;
        line-height: 30px;
        background-color: #fff;
        border: none;
        cursor: pointer;
        outline: none;
      }
    }
  }
</style>
