<script>
  import { tileLayer, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import gridLayerMixin from '../mixins/gridLayer';
  import { TILE_URL, optionsMerger } from "../utils/index";

  export default {
    mixins: [layerMixin, gridLayerMixin],
    inject: ['getMap'],
    props: {
      url: {
        type: String,
        default: () => TILE_URL
      },
      minZoom: {
        type: Number,
        default: 1,
      },
      maxZoom: {
        type: Number,
        default: 10,
      },
      // tileLayerClass: {
      //   type: Function,
      //   default: tileLayer
      // }
    },
    mounted() {
      const options = optionsMerger(this, {
        ...this.layerOptions,
        ...this.gridLayerOptions,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom
      });

      this.layer = tileLayer(this.url, options);
      DomEvent.on(this.layer, this.$listeners);
      this.LMap = this.getMap();
      this.LMap.addLayer(this.layer)
    },
    render(h) {
      return null
    }
  }
</script>
