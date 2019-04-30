<template>
    <div :id="id" class="leaflet-map">
        <slot v-if="ready"></slot>
    </div>
</template>

<script>
    import { map, CRS } from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    import { optionsMerger } from "./utils";

    export default {
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
        getMap() {
          return this.LMap
        }
      },
      mounted() {
        const options = optionsMerger(this);
        this.LMap = map(this.$el, options);
        this.$emit('map-load')
      },
      beforeDestroy() {
        // this.LMap.destroy();
      }
    }
</script>

<style lang="scss" scoped>
    .leaflet-map {
        width: 100%;
        height: 100%;
    }
</style>