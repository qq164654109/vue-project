<template>
    <div class="leaflet">
        <div class="test-btn">
            <el-button @click="test">测试</el-button>
        </div>
        <L-map ref="map" :id="mapId" :zoom="zoom" :center="center" :min-zoom="minZoom" :max-zoom="maxZoom">
            <!--<L-single-popup :lat-lng="[31.323, 118.184]" :visible="layerVisible">-->
                <!--<popup></popup>-->
            <!--</L-single-popup>-->
            <!--<L-marker-cluster :options="clusterOptions" @click="test">-->
                <!--<L-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng">-->
                    <!--<L-icon></L-icon>-->
                <!--</L-marker>-->
            <!--</L-marker-cluster>-->
            <!--<L-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng">-->
                <!--<L-icon></L-icon>-->
                <!--<L-tooltip :permanent="true" :offset="[0, -15]" :content="layerContent"></L-tooltip>-->
            <!--</L-marker>-->
            <!--<L-marker-collision :margin="5">-->
                <!--<L-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng">-->
                    <!--<L-icon></L-icon>-->
                    <!--<L-tooltip :offset="[0, -15]" :content="layerContent"></L-tooltip>-->
                <!--</L-marker>-->
            <!--</L-marker-collision>-->
            <L-feature-group>
                <L-popup :content="layerContent"><div @click="onLayerClick">adadad</div></L-popup>
                <L-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng">
                    <L-icon></L-icon>
                    <L-label-text :limitZoom="12" :font-style="fontStyle" :hover-style="{color: 'red'}" content="1231231"></L-label-text>
                </L-marker>
            </L-feature-group>
            <!--<L-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng">-->
                <!--<L-icon></L-icon>-->
            <!--</L-marker>-->
            <!--<L-rotated-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng" :angle="45">-->
                <!--<L-icon></L-icon>-->
            <!--</L-rotated-marker>-->
            <!--<L-label-geoJSON  v-if="geoLayers" :geo-data="geoLayers" :visible="false" :geo-style="geoStyle" :label-opt="labelOptions" :font-style="labelFontStyle"></L-label-geoJSON>-->
            <L-geoJSON v-if="geoLayers" :geo-data="geoLayers" :geo-style="geoStyle" @click="onLayerClick" @mousemove="onMouseMove" @mouseout="onMouseLeave">
            </L-geoJSON>
            <L-wms-tileLayer :url="wmsUrl" :options="{layers: '0,1,2,3,4,5,6,7,8,9,10'}"></L-wms-tileLayer>
        </L-map>
    </div>
</template>

<script>
  import axios from 'axios';
  import { LMap, LMarker, LRotatedMarker, LMarkerCollision, LMarkerCluster, LGeoJSON, LLabelGeoJSON, LIcon, LTooltip, LLabelText,
    LPopup, LSinglePopup, LDivIcon, LWmsTileLayer, LLayerGroup, LFeatureGroup } from '@/components/leaflet';
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
          zoomToBoundsOnClick: true,
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
        },
        layerVisible: false,
        layerOffset: [0, 0],
        layerOpacity: 1,
        layerContent: '22222',
        fontStyle: {
          color: '#409eff'
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
        console.log(e);
        this.layerContent = e.layer.feature.properties.PSIZE
      },
      onMouseMove(e) {
        e.layer.setStyle({
          color: 'red'
        })
      },
      onMouseLeave(e) {
        e.target.resetStyle(e.layer);
      },
      test(a) {
        this.fontStyle.color = 'red'
      }
    },
    mounted() {
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
      setTimeout(() => {
        // this.zoom = 14
        this.layerOffset = [0, 20];
        this.layerOpacity = 0.2;
      }, 1000);
      this.getGeoJsonData();
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
      LLabelText,
      LPopup,
      LSinglePopup,
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