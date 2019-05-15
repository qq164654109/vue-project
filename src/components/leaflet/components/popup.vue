<script>
  import Vue from 'vue';
  import { popup, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import divOverlayMixin from '../mixins/divOverlay';
  import propsMixin from '../mixins/props';

  export default {
    mixins: [layerMixin, divOverlayMixin, propsMixin],
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
      closeButton: {
        type: Boolean,
        default: true
      },
      autoClose: {
        type: Boolean,
        default: true
      },
      closeOnClick: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      const options = this.mergeProps({
        ...this.layerOptions,
        offset: this.offset,
        maxWidth: this.maxWidth,
        minWidth: this.minWidth,
        maxHeight: this.maxHeight,
        closeButton: this.closeButton,
        autoClose: this.autoClose,
        closeOnClick: this.closeOnClick
      });

      this.layer = popup(options);
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.setContent();
      this.parentLayer = this.$parent.layer;
      this.visible && this.parentLayer.bindPopup(this.layer);

      this.$nextTick(() => {
        this.$emit('loaded', this.layer)
      })
    },
    beforeDestroy() {
      !!this.popupComp && this.popupComp.$destroy();
      !!this.parentLayer && this.parentLayer.unbindPopup();
    },
    methods: {
      setContent() {
        const slots = this.$slots.default || [];
        if (slots.length) {
          const PopupComp = Vue.extend({
            data() {
              return {
                vnode: Object.freeze(slots)
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
      },
      setVisible(newVal, oldVal) {
        if (newVal === oldVal) return;
        if (newVal) {
          this.parentLayer.bindPopup(this.layer);
        } else {
          this.parentLayer.closePopup();
          this.parentLayer.unbindPopup(this.layer);
        }
      }
    },
    render(h) {
      const slots = this.$slots.default || [];
      if (slots.length) {
        !!this.popupComp && (this.popupComp.vnode = Object.freeze(slots));
      }
      return null;
    }
  }
</script>