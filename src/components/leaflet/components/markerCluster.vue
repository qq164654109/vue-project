<script>
  import 'leaflet.markercluster/dist/MarkerCluster.css';
  import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
  import { MarkerClusterGroup, DomEvent } from 'leaflet.markercluster';
  import { propsWatchBind } from '../utils';

  export default {
    props: {
      options: {
        type: Object,
        default: () => {}
      },
      visible: {
        type: Boolean,
        default: true
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
      },
      removeLayer(layer) {
        this.layer && this.layer.removeLayer(layer)
      },
      clearLayers() {
        this.layer && this.layer.clearLayers()
      },
      setVisible(newVal, oldVal) {
        if (newVal === oldVal) return;
        if (newVal) {
          if (!this.parentLayer.hasLayer(this.layer)) {
            this.parentLayer.addLayer(this.layer);
          }
        } else {
          this.parentLayer.removeLayer(this.layer);
        }
      },
      bindEvent() {
        const listeners = this.$listeners;
        Object.keys(listeners).forEach(evtName => {
          const fnc = listeners[evtName];
          this.layer.on(evtName, fnc);
        })
      }
    },
    mounted() {
      this.layer = new MarkerClusterGroup(this.options);
      propsWatchBind(this, this.layer, this.$options.props);
      this.bindEvent();
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