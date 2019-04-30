<script>
    import { tileLayer } from 'leaflet';
    import { TILE_URL } from './config';
    import tileLayerMixin from './mixins/tileLayer';

    export default {
      mixins: [tileLayerMixin],
      inject: ['getMap'],
      props: {
        url: {
          type: String,
          default: () => TILE_URL
        },
        opacity: {
          type: Number,
          default: 1,
        },
        tileLayerClass: {
          type: Function,
          default: tileLayer
        }
      },
      mounted() {
        this.LTileLayer = this.tileLayerClass(url, {

        });
        this.LMap = this.getMap();
        this.LMap.addLayer(LTileLayer)
      },
      render(h) {
        return h('div', {
          style: {
            display: 'none'
          }
        })
      }
    }
</script>
