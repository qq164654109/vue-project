<script>
  import { layerGroup, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import propsMixin from '../mixins/props';

  export default {
    mixins: [layerMixin, propsMixin],
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
      const options = this.mergeProps(this, {
        ...this.layerOptions
      });

      this.layer = layerGroup([], options);
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.parentLayer = this.$parent.layer;
      this.visible && this.parentLayer.addLayer(this.layer);

      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded', this.layer)
      })
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