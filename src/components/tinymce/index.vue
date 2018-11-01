<template>
  <textarea :id="id" style="visibility: hidden"></textarea>
</template>

<script>
  import tinymce from 'tinymce/tinymce';
  import 'tinymce/themes/modern/theme';
  import 'tinymce/skins/lightgray/skin.min.css';

  // plugins
  import 'tinymce/plugins/advlist'
  import 'tinymce/plugins/link'
  import 'tinymce/plugins/image'
  import 'tinymce/plugins/code'
  import 'tinymce/plugins/table'
  import 'tinymce/plugins/textcolor'
  import 'tinymce/plugins/paste'
  import 'tinymce/plugins/textcolor'
  import 'tinymce/plugins/colorpicker'


  import { plugins, toolbar } from './config';

  export default {
    props: {
      value: {
        type: String,
        default: ''
      },
      settings: {
        type: Object,
        default() {
          return {}
        }
      },
      height: {
        type: Number,
        default: 350
      }
    },
    data() {
      return {
        id: 'editor-' + new Date().getTime(),
        languageMap: {
          'en': 'en',
          'cn': 'zh_CN'
        }
      }
    },
    methods: {
      initTinymce() {
        const settings = Object.assign({
          selector: `#${this.id}`,
          language_url: '/static/tinymce/zh_CN.js',
          language: this.languageMap[this.$i18n.locale] || 'cn',
          height: this.height,
          plugins,
          toolbar
        }, this.settings);
        tinymce.init(settings);
        tinymce.get(this.id).on('change KeyUp SetContent', () => {
          this.$emit('input', tinymce.get(this.id).getContent())
        })
      },
      unInitTinymce() {
        tinymce.get(this.id) && tinymce.get(this.id).destroy();
      }
    },
    watch: {
      value(val) {
        if (val === tinymce.get(this.id).getContent()) return;
        tinymce.get(this.id).setContent(val);
      },
      '$i18n.locale'() {
        this.unInitTinymce();
        this.initTinymce();
      }
    },
    mounted() {
      this.initTinymce();
    },
    beforeDestroy() {
      this.unInitTinymce();
    }
  }
</script>

<style>

</style>
