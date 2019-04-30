<template>
    <div class="leaflet">
        <leaflet>

        </leaflet>
    </div>
</template>

<script>
  import leaflet from '@/components/leaflet/index'

  export default {
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