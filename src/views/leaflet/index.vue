<template>
    <div class="leaflet">
        <leaflet :id="mapId" :zoom="10" :center="center">
            <marker></marker>
        </leaflet>
    </div>
</template>

<script>
  import leaflet from '@/components/leaflet/index'

  export default {
    data() {
      return {
        mapId: 'map',
        zoom: 10,
        center: [31.323140440957427, 118.18468872070312]
      }
    },
    components: {
      // calendar,
      leaflet
    }
  }
</script>

<style lang="scss" scoped>
    .leaflet {
        height: 100%;
        padding: 15px;
    }
</style>