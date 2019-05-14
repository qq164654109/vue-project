<template>
    <div class="leaflet">
        <div class="test-btn">
            <el-button @click="test">测试</el-button>
        </div>
        <L-map ref="map" :id="mapId" :zoom="zoom" :center="center" :min-zoom="minZoom" :max-zoom="maxZoom">
            <!--<L-single-popup :lat-lng="[31.323, 118.184]" :visible="layerVisible">-->
                <!--<popup></popup>-->
            <!--</L-single-popup>-->
            <!--<L-marker-cluster :options="clusterOptions" :visible="layerVisible">-->
                <!--<L-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng" >-->
                    <!--<L-icon></L-icon>-->
                <!--</L-marker>-->
            <!--</L-marker-cluster>-->
            <!--<L-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng">-->
                <!--<L-icon></L-icon>-->
                <!--<L-tooltip :permanent="true" :offset="[0, -15]" :content="layerContent"></L-tooltip>-->
            <!--</L-marker>-->
            <!--<L-marker-collision :margin="5" :visible="layerVisible">-->
                <!--<L-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng">-->
                    <!--<L-icon></L-icon>-->
                    <!--<L-tooltip :offset="[0, -15]" :content="layerContent"></L-tooltip>-->
                <!--</L-marker>-->
            <!--</L-marker-collision>-->
            <L-feature-group>
                <L-popup :content="layerContent"><div @click="onLayerClick">adadad</div></L-popup>
                <L-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng">
                    <L-icon></L-icon>
                    <!--<L-div-icon :font-style="{color: '#409eff', fontSize: '20px'}" :icon-size="[53, 30]"><i class='el-icon-location'></i>tips</L-div-icon>-->
                </L-marker>
            </L-feature-group>
            <!--<L-ant-polyline v-if="latLngs" :lat-lngs="latLngs" :paused="antPaused" :pulse-color="pulseColor" @mousemove="onMouseMove" @mouseout="onMouseLeave"></L-ant-polyline>-->
            <!--<L-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng">-->
                <!--<L-icon></L-icon>-->
            <!--</L-marker>-->
            <!--<L-rotated-marker v-for="(item, index) in markers" :key="index" :lat-lng="item.latLng" :angle="45">-->
                <!--<L-icon></L-icon>-->
            <!--</L-rotated-marker>-->
            <!--<L-label-geoJSON  v-if="geoLayers" :geo-data="geoLayers" :visible="false" :geo-style="geoStyle" :label-opt="labelOptions" :font-style="labelFontStyle"></L-label-geoJSON>-->
            <!--<L-geoJSON v-if="geoLayers" :geo-data="geoLayers" :geo-style="geoStyle" @click="onLayerClick">-->
                <!--&lt;!&ndash;<L-tooltip :offset="[0, -15]" :content="layerContent"></L-tooltip>&ndash;&gt;-->
            <!--</L-geoJSON>-->
            <L-tileLayer :url="tileUrl1" :options="{subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']}" :max-zoom="20" :min-zoom="2" :opacity=".8"></L-tileLayer>
            <L-tileLayer :url="tileUrl2" :options="{subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']}" :max-zoom="20" :min-zoom="2" :opacity=".8"></L-tileLayer>
        </L-map>
    </div>
</template>

<script>
  import { divIcon } from 'leaflet';
  import axios from 'axios';
  import { LMap, LMarker, LRotatedMarker, LMarkerCollision, LMarkerCluster, LGeoJSON, LLabelGeoJSON, LIcon, LTooltip, LLabelText,
    LPopup, LSinglePopup, LDivIcon, LTileLayer, LWmsTileLayer, LPolyline, LAntPolyline, LLayerGroup, LFeatureGroup } from '@/components/leaflet';
  import popup from './parts/popup'

  export default {
    data() {
      return {
        mapId: 'map',
        zoom: 10,
        minZoom: 5,
        maxZoom: 20,
        center: [31.323, 118.184],
        tileUrl1: 'http://t0.tianditu.gov.cn/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=5d1f892a1e0dcf94010069d4801a21b5',
        tileUrl2: 'http://t0.tianditu.gov.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=5d1f892a1e0dcf94010069d4801a21b5',
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
        iconCreateFunction: cluster => {
          if (cluster.getChildCount() > 5) {
            return divIcon({ html: `<div class="cluster-red">${cluster.getChildCount()}</div>` , iconSize: [25, 25]});
          } else {
            return divIcon({ html: `<div class="cluster">${cluster.getChildCount()}</div>` , iconSize: [25, 25]});
          }
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
        },
        latLngs: null,
        antPaused: false,
        pulseColor: '#FFFFFF'
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
      },
      onMouseMove(e) {
        this.pulseColor = '#8FFFA4'
      },
      onMouseLeave(e) {
        this.pulseColor = '#FFFFFF'
      },
      test(a) {
        alert(1)
      },
      alertA() {
        alert('1111')
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
      this.latLngs = [
        [31.32, 118.20],
        [31.36, 118.16],
        [31.38, 118.24],
        [31.38, 118.30],
        [31.36, 118.36]
      ]
      setTimeout(() => {
        // this.zoom = 14
        this.layerOffset = [0, 20];
        this.layerOpacity = 0.2;
        this.layerVisible = true;
      }, 1000);
      this.getGeoJsonData();
    },
    components: {
      LMap,
      LTileLayer,
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
      LPolyline,
      LAntPolyline,
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
        /deep/ {
            .cluster {
                width: 25px;
                height: 25px;
                font-size: 16px;
                line-height: 25px;
                text-align: center;
                background-color: #409eff;
                color: #fff;
                border-radius: 50%;
            }
            .cluster-red {
                width: 25px;
                height: 25px;
                font-size: 16px;
                line-height: 25px;
                text-align: center;
                background-color: red;
                color: #fff;
                border-radius: 50%;
            }
        }
    }
</style>