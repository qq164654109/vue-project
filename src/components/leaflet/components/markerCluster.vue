<script>
  import 'leaflet.markercluster/dist/MarkerCluster.css';
  import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
  import { MarkerClusterGroup } from 'leaflet.markercluster';
  import { divIcon } from 'leaflet'
  import optionsMixin from '../mixins/options';

  export default {
    mixins: ['optionsMixin'],
    data() {
      return {
        ready: false
      }
    },
    methods: {
      addLayer(layer) {
        this.layer && this.layer.addLayer(layer)
      },
      removeLayer(layer) {
        this.layer && this.layer.removeLayer(layer)
      },
      clearLayers() {
        this.layer && this.layer.clearLayers()
      }
    },
    mounted() {
      this.layer = new MarkerClusterGroup(this.options);
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