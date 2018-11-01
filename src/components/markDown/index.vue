<template>
  <div class="markdown">
    <textarea id="mark" style="visibility: hidden"></textarea>
  </div>
</template>

<script>
  import 'font-awesome/css/font-awesome.min.css';
  import 'simplemde/dist/simplemde.min.css';
  import 'highlight.js/styles/github.css';

  import SimpleMDE from 'simplemde';
  import highlight from 'highlight.js';
  import marked from 'marked';

  export default {
    props: {
      value: {
        type: String,
        default: ''
      },
      configs: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        simpleMde: null
      }
    },
    methods: {
      initSimpleMDE() {
        const config = Object.assign({
          element: this.$el.firstElementChild,
          autoDownloadFontAwesome: false,
          autofocus: false,
          autosave: {
            enable: true,
            uniqueId: "MyUniqueID",
            delay: 1000
          },
          initialValue: this.value,
          status: ['autosave'],
          styleSelectedText: false,
          spellChecker: false,
          placeholder: '请输入内容',
          renderingConfig: {
            codeSyntaxHighlighting: true
          },
          toolbar: ["bold", "italic", "strikethrough", "heading", "code", "quote", "unordered-list",
            "ordered-list", "clean-block", "link", "image", "table", "horizontal-rule", "preview", "side-by-side", "fullscreen", "guide",
          ],
          previewRender: (plainText) => {
            return marked(plainText, {
              renderer: new marked.Renderer(),
              gfm: true,
              pedantic: false,
              sanitize: false,
              tables: true,
              breaks: true,
              smartLists: true,
              smartypants: true,
              highlight: function (code) {
                return highlight.highlightAuto(code).value;
              }
            });
          },
        }, this.configs);
        this.simpleMde = new SimpleMDE(config);
        this.simpleMde.codemirror.on('change', () => {
          this.$emit('input', this.simpleMde.value())
        })
      },
      unInitSimpleMDE() {
        this.simpleMde.toTextArea();
        this.simpleMde = null;
      }
    },
    watch: {
      value(val) {
        if (val === this.simpleMde.value()) return
        this.simpleMde.value(val)
      }
    },
    mounted() {
      this.initSimpleMDE();
    },
    beforeDestroy() {
      this.unInitSimpleMDE();
    }
  }
</script>

<style>
  .markdown-editor .markdown-body {
    padding: 0.5em
  }
  .markdown-editor .editor-preview-active, .markdown-editor .editor-preview-active-side {
    display: block;
  }
</style>
