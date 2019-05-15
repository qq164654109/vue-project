<script>
  import 'leaflet-ant-path';
  import { polyline } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import pathMixin from '../mixins/path';
  import propsMixin from '../mixins/props';

  // const defaultAntStyle = {
  //   delay: 600,
  //   dashArray: [15, 30],
  //   pulseColor: '#FFFFFF',
  //   paused: false,
  //   reverse: false,
  //
  // };

  export default {
    mixins: [layerMixin, pathMixin, propsMixin],
    props: {
      latLngs: {
        type: Array,
        default: () => []
      },
      smoothFactor: {
        type: Number,
        default: 1
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
      //DomEvent.on(this.layer, this.$listeners);
      this.bindDomEvent();
      this.bindPropsWatch();
      this.parentLayer = this.$parent.layer;
      this.visible && this.parentLayer.addLayer(this.layer);

      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded', this.layer)
      });
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
      },
      bindDomEvent() {
        const listeners = this.$listeners;
        Object.keys(listeners).forEach(evtName => {
          const evtFnc = listeners[evtName];

          this.layer.on(evtName, e => {
            e.layer = this.layer;
            evtFnc(e);
          })
        })
      }
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