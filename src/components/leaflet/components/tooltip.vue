<script>
  import Vue from 'vue';
  import { tooltip, DomEvent } from 'leaflet';
  import layer from '../mixins/layer';
  import { optionsMerger } from "../utils/index";

  export default {
    mixins: [layer],
    props: {
      pane: {
        type: String,
        default: 'tooltipPane'
      },
      content: {
        type: String,
        default: '提示'
      },
      offset: {
        type: Array,
        default: () => [0, 0]
      },
      permanent: {
        type: Boolean,
        default: false
      },
      sticky: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: 'top'
      },
      opacity: {
        type: Number,
        default: 1
      }
    },
    methods: {
      setContent() {
        const slots = this.$slots.default || [];
        if (slots.length) {
          const TooltipComp = Vue.extend({
            data() {
              return {
                vnode: null
              }
            },
            render(h) {
              const { vnode } = this;
              return h('div', {
                className: 'popup-component'
              }, Array.isArray(vnode) ? vnode : [vnode])
            }
          });
          this.tooltipComp = new TooltipComp().$mount();
          this.layer.setContent(this.tooltipComp.$el);
        } else {
          this.layer.setContent(this.content);
        }
      }
    },
    mounted() {
      const options = optionsMerger(this, {
        ...this.layerOptions,
        offset: this.offset,
        permanent: this.permanent,
        sticky: this.sticky,
        direction: this.direction,
        opacity: this.opacity
      });
      this.layer = tooltip(options);
      DomEvent.on(this.layer, this.$listeners);
      this.setContent();
      this.parentLayer = this.$parent.layer;
      this.parentLayer && this.parentLayer.bindTooltip(this.layer);

      this.$nextTick(() => {
        this.$emit('loaded', this.layer)
      })
    },
    beforeDestroy() {
      this.tooltipComp && this.tooltipComp.$destroy();
      this.parentLayer && this.parentLayer.unbindTooltip();
    },
    render(h) {
      const slots = this.$slots.default || [];
      if (slots.length) {
        this.tooltipComp && (this.tooltipComp.vnode = Object.freeze(slots));
      }
      return null
    }
  }
</script>