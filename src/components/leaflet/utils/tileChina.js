import { TileLayer, tileLayer} from 'leaflet';

TileLayer.chinaProvider = TileLayer.extend({
  initialize: function (type, options) {
    let providers = TileLayer.chinaProvider.providers;

    let parts = type.split('.');

    let providerName = parts[0];
    let mapName = parts[1];
    let mapType = parts[2];

    let url = providers[providerName][mapName][mapType];
    options.subdomains = providers[providerName].Subdomains;

    TileLayer.prototype.initialize.call(this, url, options);
  }
});

TileLayer.ChinaProvider.providers = {
  TianDiTu: {
    Normal: {
      Map: 'http://t0.tianditu.gov.cn/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=5d1f892a1e0dcf94010069d4801a21b5',
      Annotion: 'http://t0.tianditu.gov.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=5d1f892a1e0dcf94010069d4801a21b5'
    },
    Satellite: {
      Map: 'http://t0.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=5d1f892a1e0dcf94010069d4801a21b5',
      Annotion: 'http://t0.tianditu.gov.cn/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=5d1f892a1e0dcf94010069d4801a21b5'
    },
    Terrain: {
      Map: 'http://t0.tianditu.gov.cn/ter_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=ter&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=5d1f892a1e0dcf94010069d4801a21b5',
      Annotion: 'http://t0.tianditu.gov.cn/cta_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cta&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=5d1f892a1e0dcf94010069d4801a21b5'
    },
    Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
  },

  GaoDe: {
    Normal: {
      Map: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
    },
    Satellite: {
      Map: 'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
      Annotion: 'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
    },
    Subdomains: ['1', '2', '3', '4']
  },

  Google: {
    Normal: {
      Map: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
    },
    Satellite: {
      Map: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
    },
    Subdomains: []
  },

  Geoq: {
    Normal: {
      Map: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}',
      Color: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer/tile/{z}/{y}/{x}',
      PurplishBlue: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
      Gray: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}',
      Warm: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}',
      Cold: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetCold/MapServer/tile/{z}/{y}/{x}'
    },
    Subdomains: []
  },
  changchun: {
    Normal: {
      Map: 'http://iwater.ecidi.com/changchun/basemap/traffic/{z}/{x}/{y}',
    },
    Satellite: {
      Map: 'http://iwater.ecidi.com/changchun/basemap/satellite/{z}/{x}/{y}',
    },
    Terrain: {
      Map: 'http://iwater.ecidi.com/changchun/basemap/terrain/{z}/{x}/{y}',
    }
  }
};

tileLayer.chinaProvider = function (type, options) {
  return new L.TileLayer.ChinaProvider(type, options);
};