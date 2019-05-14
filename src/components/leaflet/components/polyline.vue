<script>
    import { polyline, DomEvent } from 'leaflet';
    import layerMixin from '../mixins/layer';
    import pathMixin from '../mixins/path';
    import { optionsMerger, propsWatchBind } from "../utils";

    export default {
      mixins: [layerMixin, pathMixin],
      data() {
        return {
          ready: false
        }
      },
      props: {
        latLngs: {
          type: Array,
          default: () => []
        },
        smoothFactor: {
          type: Number,
          default: 1
        },
        noClip: {
          type: Boolean,
          default: false
        }
      },
      mounted() {
        const options = optionsMerger(this, {
          ...this.layerOptions,
          ...this.pathOptions,
          smoothFactor: this.smoothFactor,
          noClip: this.noClip
        });

        this.layer = polyline(this.latLngs, options);
        DomEvent.on(this.layer, this.$listeners);
        propsWatchBind(this, this.layer);
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