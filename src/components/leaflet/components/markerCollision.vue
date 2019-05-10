<script>
  import '../utils/Leaflet.LayerGroup.Collision';
  import { layerGroup, DomEvent } from 'leaflet';
  import { propsWatchBind } from '../utils';

  export default {
    props: {
      margin: {
        type: Number,
        default: 5
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
      this.layer = layerGroup.collision({ margin : this.margin });
      this.bindEvent();
      propsWatchBind(this, this.layer, this.$options.props);
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