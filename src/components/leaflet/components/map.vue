<template>
    <div :id="id" class="leaflet-map">
        <slot v-if="ready"></slot>
    </div>
</template>

<script>
  import 'leaflet/dist/leaflet.css';
  import { map, DomEvent, CRS } from 'leaflet';
  import { optionsMerger, propsWatchBind } from "../utils/index";

  export default {
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
      crs: {
        type: Object,
        default: () => CRS.EPSG3857
      },
    },
    data() {
      return {
        ready: false
      }
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
      moveEndHandler() {
        const center = this.layer.getCenter();
        const zoom = this.layer.getZoom();

        this.$emit('update:center', center);
        this.$emit('update:zoom', zoom);
      },
      getMap() {
        return this.layer
      }
    },
    mounted() {
      const options = optionsMerger(this, {
        center: this.center,
        zoom: this.zoom,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
        zoomSnap: this.zoomSnap,
        crs: this.crs
      });

      this.layer = map(this.id, options);
      this.layer.on('moveend', this.moveEndHandler);
      DomEvent.on(this.layer, this.$listeners);
      propsWatchBind(this, this.layer, this.$options.props);

      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded');
      })
    },
    beforeDestroy() {
      // this.layer.destroy();
    }
  }
</script>

<style lang="scss" scoped>
    .leaflet-map {
        width: 100%;
        height: 100%;
    }
</style>