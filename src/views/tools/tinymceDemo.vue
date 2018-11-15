<template>
  <div class="tinymce-demo">
    <code class="code-wrapper" v-html="info"></code>
    <div class="text-wrapper">
      <tinymce ref="tinymce" v-model="content" :height="600"></tinymce>
      <button class="save-btn" @click="save"><i class="el-icon-document"></i>{{$t('tools.save')}}</button>
    </div>
  </div>
</template>

<script>
  import tinymce from '@/components/tinymce/index';

  export default {
    data() {
      return {
        info: `
        富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见
        <a href="#" target="_blank">文档</a>
        `,
        content: ''
      }
    },
    methods: {
      save() {
        console.log(this.content);
        this.$message.success('保存成功！')
      }
    },
    mounted() {
      setTimeout(() => {
        this.content = `<h2 style="text-align: center;color: #409eff;">初始化成功</h2>
            <p style="text-align: center;"><img src="../../../static/images/avatar.gif" alt=""></p>
            <h2 style="text-align: center;color: #E45F47;">郑康个丑逼</h2>`
      }, 200)
    },
    components: {
      tinymce
    }
  }
</script>

<style lang="scss" scoped>
  .tinymce-demo {
    padding: 30px 50px;
    .code-wrapper {
      margin-bottom: 20px;
    }
    .text-wrapper {
      position: relative;
      .save-btn {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 0 8px;
        color: #337ab7;
        letter-spacing: 1px;
        line-height: 24px;
        background-color: #fff;
        border: none;
        cursor: pointer;
        outline: none;
      }
    }
  }
</style>
