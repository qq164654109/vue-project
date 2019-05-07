<script>
  import { featureGroup, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import { optionsMerger } from "../utils/index";

  export default {
    mixins: [layerMixin],
    data() {
      return {
        ready: false
      }
    },
    methods: {
      addLayer(layer) {
        this.layer && this.layer.addLayer(layer)
      }
    },
    mounted() {
      const options = optionsMerger(this, {
        ...this.layerOptions
      });

      this.layer = featureGroup([], options);
      DomEvent.on(this.layer, this.$listeners);
      this.parentLayer = this.$parent.layer;
      this.parentLayer.addLayer(this.layer);

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