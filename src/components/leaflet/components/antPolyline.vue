<script>
  import 'leaflet-ant-path';
  import { polyline, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import pathMixin from '../mixins/path';
  import { optionsMerger, propsWatchBind } from "../utils";

  export default {
    mixins: [layerMixin, pathMixin],
    data() {
      return {
        ready: false
      }
    },
    props: {
      latLngs: {
        type: Array,
        default: () => []
      },
      noClip: {
        type: Boolean,
        default: false
      },
      delay: {
        type: Number,
        default: 600
      },
      dashArray: {
        type: Array,
        default: () => [15, 30]
      },
      pulseColor: {
        type: String,
        default: '#FFFFFF'
      },
      paused: {
        type: Boolean,
        default: false
      },
      reverse: {
        type: Boolean,
        default: false
      },
      hardwareAccelerated: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      setPaused(newVal, oldVal) {
        if (newVal === oldVal) return;
        if (newVal) {
         this.layer.resume()
        } else {
          this.layer.pause()
        }
      },
      setPulseColor(newVal, oldVal) {
        if (newVal === oldVal) return;
        this.layer.setStyle({
          pulseColor: newVal
        })
      }
    },
    mounted() {
      const options = optionsMerger(this, {
        ...this.layerOptions,
        ...this.pathOptions,
        smoothFactor: this.smoothFactor,
        noClip: this.noClip,
        delay: this.delay,
        pulseColor: this.pulseColor,
        paused: this.paused,
        reverse: this.reverse,
        hardwareAccelerated: this.hardwareAccelerated
      });

      this.layer = polyline.antPath(this.latLngs, options);
      DomEvent.on(this.layer, this.$listeners);
      propsWatchBind(this, this.layer);
      this.parentLayer = this.$parent.layer;
      this.visible && this.parentLayer.addLayer(this.layer);

      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded', this.layer)
      });
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