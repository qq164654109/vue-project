<script>
  import { objToStyleStr } from "../utils";

  export default {
    inject: ['getHt'],
    props: {
      className: {
        type: String,
        default: 'border-pane'
      },
      viewStyle: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        ready: false
      }
    },
    mounted() {
      this.ht = this.getHt();
      this.instance = new this.ht.widget.BorderPane();

      const viewStyle = objToStyleStr(this.viewStyle);
      this.view = this.instance.getView();
      this.view.className = this.className;
      this.view.style = viewStyle;

      this.parentInstance = this.$parent.instance;
      if (this.parentInstance instanceof this.ht.widget.BorderPane) {
        this.setBorderPosition();
      } else if (this.parentInstance instanceof this.ht.widget.SplitView) {
        this.setSplitPosition();
      } else {
        this.parentView = this.$parent.view;
        this.parentView.appendChild(this.view);
      }

      this.addResizeListener();

      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded', this.instance)
      })
    },
    beforeDestroy() {
      !!this._handleResize && window.removeEventListener('resize', this._handleResize);
      this.parentView.removeChild(this.view);
    },
    methods: {
      addResizeListener() {
        this._handleResize = () => {
          this.instance.invalidate();
        };
        window.addEventListener('resize', this._handleResize);
      },
      getView() {
        return this.view;
      },
      getInstance() {
        return this.instance;
      }
    },
    render(h) {
      if (this.ready && this.$slots.default) {
        return  h('div', {
          style: {
            display: 'none'
          }
        }, this.$slots.default)
      } else {
        return null;
      }
    }
  }
</script>