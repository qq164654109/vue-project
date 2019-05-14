<script>
  import { geoJSON, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import { optionsMerger, propsWatchBind } from "../utils/index";

  export default {
    mixins: [layerMixin],
    inject: ['getMap'],
    props: {
      geoData: {
        type: [Object, Array],
        default: () => {}
      },
      geoStyle: {
        type: [Object, Function],
        default: null
      },
      pointToLayer: {
        type: Function,
        default: null
      },
      onEachFeature: {
        type: Function,
        default: null
      },
      filter: {
        type: Function,
        default: null
      }
    },
    data() {
      return {
        ready: false
      }
    },
    mounted() {
      const options = optionsMerger(this, {
        ...this.layerOptions,
        style: this.geoStyle,
        pointToLayer: this.pointToLayer,
        onEachFeature: this.onEachFeature,
        filter: this.filter
      });

      this.layer = geoJSON(this.geoData, options);
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