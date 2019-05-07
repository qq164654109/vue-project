<template>
    <div class="leaflet">
        <div class="test-btn">
            <el-button @click="test">测试</el-button>
        </div>
        <L-map ref="map" :id="mapId" :zoom="zoom" :center="center" :min-zoom="minZoom" :max-zoom="maxZoom">
            <!--<L-marker-cluster :options="clusterOptions">-->
                <!--<L-rotated-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng" :angle="45">-->
                    <!--<L-icon></L-icon>-->
                <!--</L-rotated-marker>-->
            <!--</L-marker-cluster>-->
            <!--<L-marker-collision :margin="5">-->
                <!--<L-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng">-->
                    <!--<L-icon></L-icon>-->
                <!--</L-marker>-->
            <!--</L-marker-collision>-->
            <L-feature-group @click="onLayerClick">
                <L-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng">
                    <L-icon></L-icon>
                </L-marker>
            </L-feature-group>
            <!--<L-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng">-->
                <!--<L-icon></L-icon>-->
            <!--</L-marker>-->
            <!--<L-label-geoJSON v-if="geoLayers" :geo-data="geoLayers" :geo-style="geoStyle" :label-opt="labelOptions" :font-style="labelFontStyle"></L-label-geoJSON>-->
            <!--<L-geoJSON v-if="geoLayers" :geo-data="geoLayers" :geo-style="geoStyle"></L-geoJSON>-->
            <L-wms-tileLayer :url="wmsUrl" :options="{layers: '0,1,2,3,4,5,6,7,8,9,10'}"></L-wms-tileLayer>
        </L-map>
    </div>
</template>

<script>
  import axios from 'axios';
  import { LMap, LMarker, LRotatedMarker, LMarkerCollision, LMarkerCluster, LGeoJSON, LLabelGeoJSON, LIcon, LTooltip,
    LPopup, LDivIcon, LWmsTileLayer, LLayerGroup, LFeatureGroup } from '@/components/leaflet';
  import popup from './parts/popup'

  export default {
    data() {
      return {
        mapId: 'map',
        zoom: 10,
        minZoom: 5,
        maxZoom: 20,
        center: [31.323, 118.184],
        wmsUrl: 'http://iwater.ecidi.com/wuhu-arcgis/services/wisdomwater/芜湖浅色地图配色/MapServer/WMSServer?',
        markers: [],
        geoLayers: null,
        geoStyle: {
          color: 'rgba(64, 158, 255, 1)'
        },
        clusterOptions: {
          showCoverageOnHover: false,
          zoomToBoundsOnClick: false,
          removeOutsideVisibleBounds: true
        },
        labelOptions: {
          offset: [0, 10],
          limitZoom: 13,
          propertyName: 'PSIZE',
          showArrowIf: true
        },
        labelFontStyle: {
          dynamicFontSize: true,
          fontSize: 8
        }
      }
    },
    methods: {
      getGeoJsonData() {
        axios.get('static/json/wspipe.json').then(res => {
          const { data } = res;
          this.geoLayers = Object.freeze(data);
        })
      },
      onLayerClick(e) {
        const latlng = e.latlng;
        this.$refs.map.setCenter(latlng)
      },
      test() {

      }
    },
    mounted() {
      setTimeout(() => {
        this.markers = [
          {
            latLng: [31.32, 118.20],
          },
          {
            latLng: [31.34, 118.22],
          },
          {
            latLng: [31.36, 118.16],
          },
          {
            latLng: [31.38, 118.24],
          },
          {
            latLng: [31.32, 118.26],
          },
          {
            latLng: [31.34, 118.18],
          },
          {
            latLng: [31.36, 118.28],
          },
          {
            latLng: [31.38, 118.30],
          },
          {
            latLng: [31.32, 118.32],
          },
          {
            latLng: [31.34, 118.33],
          },
          {
            latLng: [31.36, 118.36],
          },
          {
            latLng: [31.38, 118.38],
          }
        ];
      }, 300);
      // this.getGeoJsonData();
    },
    components: {
      LMap,
      LWmsTileLayer,
      LMarker,
      LRotatedMarker,
      LMarkerCollision,
      LMarkerCluster,
      LGeoJSON,
      LLabelGeoJSON,
      LIcon,
      LDivIcon,
      LTooltip,
      LPopup,
      LLayerGroup,
      LFeatureGroup,
      popup
    }
  }
</script>

<style lang="scss" scoped>
    .leaflet {
        position: relative;
        height: 100%;
        padding: 15px;
        .test-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 1000;
        }
    }
</style>