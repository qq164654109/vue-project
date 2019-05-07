<script>
  import 'leaflet.layergroup.collision';
  import { layerGroup } from 'leaflet';

  export default {
    props: {
      margin: {
        type: Number,
        default: 5
      }
    },
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
      this.layer = layerGroup.collision({ margin : this.margin });
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