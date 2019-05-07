<script>
  import Vue from 'vue';
  import { popup, DomEvent } from 'leaflet';
  import layer from '../mixins/layer';
  import { optionsMerger } from "../utils/index";

  export default {
    mixins: [layer],
    inject: ['getMap'],
    props: {
      pane: {
        type: String,
        default: 'popupPane'
      },
      content: {
        type: String,
        default: '弹窗'
      },
      latLng: {
        default: () => []
      },
      maxWidth: {
        type: Number,
        default: 300
      },
      minWidth: {
        type: Number,
        default: 50
      },
      maxHeight: {
        type: Number,
        default: null
      },
      offset: {
        type: Array,
        default: () => [0, 0]
      },
      closeButton: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      setContent() {
        const slots = this.$slots.default || [];
        if (slots.length) {
          const PopupComp = Vue.extend({
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
          this.popupComp = new PopupComp().$mount();
          this.layer.setContent(this.popupComp.$el);
        } else {
          this.layer.setContent(this.content);
        }
      }
    },
    mounted() {
      const options = optionsMerger(this, {
        ...this.layerOptions,
        offset: this.offset,
        maxWidth: this.maxWidth,
        minWidth: this.minWidth,
        maxHeight: this.maxHeight,
        closeButton: this.closeButton
      });

      this.layer = popup(options);
      DomEvent.on(this.layer, this.$listeners);
      this.setContent();
      this.parentLayer = this.$parent.layer;
      if (this.parentLayer) {
        this.parentLayer.bindPopup(this.layer);
      } else {
        const LMap = this.getMap();
        this.layer.setLatLng(this.latLng);
        this.visible && this.layer.openOn(LMap);
      }

      this.$nextTick(() => {
        this.$emit('loaded', this.layer)
      })
    },
    beforeDestroy() {
      this.popupComp && this.popupComp.$destroy();
      this.parentLayer && this.parentLayer.unbindPopup();
    },
    render(h) {
      const slots = this.$slots.default || [];
      if (slots.length) {
        this.popupComp && (this.popupComp.vnode = Object.freeze(slots));
      }
      return null;
    }
  }
</script>