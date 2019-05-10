<script>
  import { marker, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import { optionsMerger, propsWatchBind } from "../utils/index";

  export default {
      mixins: [layerMixin],
      props: {
        pane: {
          type: String,
          default: 'markerPane'
        },
        draggable: {
          type: Boolean,
          default: false
        },
        latLng: {
          type: [Object, Array],
          custom: true,
          default: null
        },
        zIndexOffset: {
          type: Number,
          custom: false,
          default: null
        }
      },
      data() {
        return {
          ready: false
        }
      },
      methods: {
        setLatLng(newVal, oldVal) {
          this.layer.setLatLng(newVal);
        }
      },
      mounted() {
        const options = optionsMerger(this, {
          ...this.layerOptions,
          draggable: this.draggable,
          zIndexOffset: this.zIndexOffset
        });

        this.layer = marker(this.latLng, options);
        DomEvent.on(this.layer, this.$listeners);
        propsWatchBind(this, this.layer, this.$options.props);
        this.parentLayer = this.$parent.layer;
        this.visible && this.parentLayer.addLayer(this.layer);

        this.$nextTick(() => {
          this.ready = true;
          this.$emit('loaded', this.layer)
        })
      },
      beforeDestroy() {
        this.parentLayer && this.parentLayer.removeLayer(this.layer);
      },
      render(h) {
        if (this.ready && this.$slots.default) {
            return h('div', {
              style: {
                display: 'none'
              }
            }, this.$slots.default)
        } else {
          return null
        }
      }
  }
</script>