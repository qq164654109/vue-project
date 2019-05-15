<template>
    <div :id="id" class="leaflet-map">
        <slot v-if="ready"></slot>
    </div>
</template>

<script>
  import 'leaflet/dist/leaflet.css';
  import { map, control, DomEvent, CRS } from 'leaflet';
  import propsMixin from '../mixins/props';

  export default {
    mixins: [propsMixin],
    provide() {
      return {
        getMap: this.getMap
      }
    },
    props: {
      options: {
        type: Object,
        default: () => {}
      },
      id: {
        type: String,
        required: true
      },
      zoom: {
        type: Number,
        default: 8,
      },
      minZoom: {
        type: Number,
        default: null,
      },
      maxZoom: {
        type: Number,
        default: null
      },
      zoomSnap: {
        type: Number,
        default: 1
      },
      center: {
        type: Array,
        default: () => []
      },
      doubleClickZoom: {
        type: Boolean,
        default: false
      },
      dragging: {
        type: Boolean,
        default: true
      },
      crs: {
        type: Object,
        default: () => CRS.EPSG3857
      },
      panes: {
        type: Array,
        default: () => []
      },
      plugins: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        ready: false
      }
    },
    mounted() {
      const options = this.mergeProps({
        center: this.center,
        zoom: this.zoom,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
        zoomSnap: this.zoomSnap,
        doubleClickZoom: this.doubleClickZoom,
        dragging: this.dragging,
        crs: this.crs
      });

      this.layer = map(this.id, options);
      this.createPanes(this.panes);
      this.addMoveEndListener();
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.addPlugins();

      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded');
      })
    },
    beforeDestroy() {
      this.layer.off();
      this.layer.remove();
    },
    methods: {
      setCenter(newVal, oldVal) {
        const oldCenter = oldVal || this.layer.getCenter();

        if (oldCenter[0] !== newVal[0] || oldCenter[1] !== newVal[1]) {
          this.layer.panTo(center, {
            animate: false
          });
        }
      },
      setZoom(newVal, oldVal) {
        const oldZoom = oldVal || this.layer.getZoom();

        if (oldZoom !== newVal) {
          this.layer.setZoom(newVal);
        }
      },
      setView(center, zoom) {
        const oldCenter = this.layer.getCenter();
        const oldZoom = this.layer.getZoom();

        if (oldCenter[0] !== center[0] || oldCenter[1] !== center[1] || oldZoom !== zoom) {
          this.layer.setView(center, zoom, {
            animate: false
          });
          this.$emit('update:center', center);
          this.$emit('update:zoom', zoom);
        }
      },
      createPanes(paneNames) {
        paneNames.forEach(pName => {
          this.layer.createPane(pName)
        })
      },
      toggleMeasure() {
        if (!this.measureControl) {
          this.measureControl = control.linearMeasurement({
            unitSystem: 'metric',
            color: '#78a4ff',
            fillColor: 'red'
          }).addTo(this.layer);
        }
        this.measureControl.toggleMeasure();
      },
      addMoveEndListener() {
        this._moveEndHandler = () => {
          const center = this.layer.getCenter();
          const zoom = this.layer.getZoom();

          this.$emit('update:center', center);
          this.$emit('update:zoom', zoom);
        };
        this.layer.on('moveend', this._moveEndHandler);
      },
      addPlugins() {
        this.plugins.forEach(pName => {
          import(`../plugins/leaflet.${pName}.scss`).catch(() => {});
          import(`../plugins/leaflet.${pName}.js`).catch(() => {});
        })
      },
      getMap() {
        return this.layer
      }
    },
  }
</script>

<style lang="scss" scoped>
    .leaflet-map {
        width: 100%;
        height: 100%;
    }
</style>