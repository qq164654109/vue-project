<script>
  import { marker } from 'leaflet'
  import { optionsMerger } from "./utils";

  export default {
      inject: ['getMap'],
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
        icon: {
          type: [Object],
          custom: false,
          default: () => new Icon.Default()
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
      mounted() {
        const options = optionsMerger(this);
        this.LMarker = marker(this.latLng, options);
        this.LMap = this.getMap();
        this.LMap.addLayer(this.LMarker);
        this.ready = true;
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