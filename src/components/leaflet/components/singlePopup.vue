<script>
  import Vue from 'vue';
  import { popup, DomEvent } from 'leaflet';
  import divOverlayMixin from '../mixins/divOverlay';
  import propsMixin from '../mixins/props';

  export default {
    mixins: [divOverlayMixin, propsMixin],
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
        type: Array,
        require: true
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
      }
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
          this.parentLayer.openPopup(this.layer);
        } else {
          this.parentLayer.closePopup(this.layer);
        }
      },
      setLatLng(newVal, oldVal) {
        const oldLatLng = oldVal || this.layer.getLatLng();

        if (oldLatLng !== newVal) {
          this.layer.setLatLng(newVal)
        }
      }
    },
    mounted() {
      const options = this.mergeProps({
        ...this.divOverlayOptions,
        pane: this.pane,
        offset: this.offset,
        maxWidth: this.maxWidth,
        minWidth: this.minWidth,
        maxHeight: this.maxHeight,
        closeButton: false,
        autoClose: false,
        closeOnClick: false
      });

      this.layer = popup(options);
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.setContent();
      this.parentLayer = this.$parent.layer;
      this.layer.setLatLng(this.latLng);
      this.latLng && this.visible && this.parentLayer.openPopup(this.layer);

      this.$nextTick(() => {
        this.$emit('loaded', this.layer)
      })
    },
    beforeDestroy() {
      !!this.popupComp && this.popupComp.$destroy();
      !!this.parentLayer && this.parentLayer.closePopup(this.layer);
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