<script>
  import { geoJSON, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import propsMixin from '../mixins/props';

  export default {
    mixins: [layerMixin, propsMixin],
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
      const options = this.mergeProps({
        ...this.layerOptions,
        style: this.geoStyle,
        pointToLayer: this.pointToLayer,
        onEachFeature: this.onEachFeature,
        filter: this.filter
      });

      this.layer = geoJSON(this.geoData, options);
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.parentLayer = this.$parent.layer;
      this.visible && this.parentLayer.addLayer(this.layer);

      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded', this.layer)
      })

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