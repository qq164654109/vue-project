<template>
    <div :id="id" class="leaflet-map">
        <slot v-if="ready"></slot>
    </div>
</template>

<script>
  import 'leaflet/dist/leaflet.css';
  import { map, DomEvent, CRS } from 'leaflet';
  import optionsMixin from '../mixins/options';
  import { optionsMerger } from "../utils/index";

  export default {
    mixins: [optionsMixin],
    provide() {
      return {
        getMap: this.getMap
      }
    },
    props: {
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
        custom: true,
        default: () => CRS.EPSG3857
      },
    },
    data() {
      return {
        ready: false
      }
    },
    methods: {
      setCenter(center) {
        const oldCenter = this.layer.getCenter();

        if (oldCenter !== center) {
          this.layer.panTo(center, {
            animate: false
          });
          this.$emit('update:center', center);
        }
      },
      setZoom(zoom) {
        const oldZoom = this.layer.getZoom();

        if (oldZoom !== zoom) {
          this.layer.setZoom(zoom);
          this.$emit('update:zoom', zoom);
        }
      },
      setView(center, zoom) {
        const oldCenter = this.layer.getCenter();
        const oldZoom = this.layer.getZoom();

        if (oldCenter !== center || oldZoom !== zoom) {
          this.layer.setView(center, zoom);
          this.$emit('update:center', center);
          this.$emit('update:zoom', zoom);
        }
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
      DomEvent.on(this.layer, this.$listeners);

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