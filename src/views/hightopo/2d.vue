<template>
    <div class="hightopo-node">
        <ht :images="images">
            <ht-graph ref="graph" border-position="left" :border-size="40" :selectable="selectableFunc" :view-style="{width: '100%',height: '100%', backgroundColor: '#fff'}" >
                <ht-node name="111" :size="[450, 225]" :position="[450, 225]" image="zhilang"></ht-node>
                <ht-node name="222" :size="[450, 225]" :position="[480, 325]" image="zhilang"></ht-node>
            </ht-graph>
        </ht>
        <div class="btn">
            <el-button @click="a = !a"></el-button>
        </div>
    </div>
</template>

<script>
  import { ht, htBorderPane, htGraph, htNode} from '@/components/ht';

  export default {
    data() {
      return {
        images: [
          {
            name: 'zhilang',
            src: 'static/images/只狼.jpg'
          }
        ],
        selectableFunc: data => {
          console.log(data.getName());
          return data.getName() !== '111'
        },
        editableFunc: data => {
          return true;
        },
        htData: '{\n' +
        '          "v": "6.2.9",\n' +
        '          "p": {\n' +
        '            "background": "rgb(255,255,255)",\n' +
        '            "layers": [\n' +
        '              "0",\n' +
        '              1\n' +
        '            ],\n' +
        '            "autoAdjustIndex": true,\n' +
        '            "hierarchicalRendering": true\n' +
        '          },\n' +
        '          "d": [\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 3,\n' +
        '              "p": {\n' +
        '                "name": "文字",\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 146.39194,\n' +
        '                  "y": 50.40543\n' +
        '                },\n' +
        '                "height": 17\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "北郊污水处理厂",\n' +
        '                "label": "",\n' +
        '                "text.color": "rgb(0,0,0)",\n' +
        '                "text.font": "16px arial"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildId": "10001",\n' +
        '                "labelIndex": "1"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 4,\n' +
        '              "p": {\n' +
        '                "name": "文字",\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 144.39194,\n' +
        '                  "y": 74.64764\n' +
        '                },\n' +
        '                "height": 10\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "进厂流量： 9m³/s",\n' +
        '                "label": "",\n' +
        '                "text.color": "#666666",\n' +
        '                "text.font": "12px arial"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildId": "10001",\n' +
        '                "labelIndex": "2"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 5,\n' +
        '              "p": {\n' +
        '                "name": "文字",\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 145.39194,\n' +
        '                  "y": 92.40543\n' +
        '                },\n' +
        '                "height": 9\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "处理余量： 20%",\n' +
        '                "label": "",\n' +
        '                "text.color": "#666666",\n' +
        '                "text.font": "12px arial"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildId": "10001",\n' +
        '                "labelIndex": "3"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 6,\n' +
        '              "p": {\n' +
        '                "name": "文字",\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 143.02083,\n' +
        '                  "y": 192.11648\n' +
        '                },\n' +
        '                "height": 15\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "当前状态： 进水",\n' +
        '                "label": "",\n' +
        '                "text.color": "rgb(102,102,102)",\n' +
        '                "text.font": "12px arial"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildId": "pool10003",\n' +
        '                "labelIndex": "2"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 7,\n' +
        '              "p": {\n' +
        '                "name": "文字",\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 143.64972,\n' +
        '                  "y": 211.87427\n' +
        '                },\n' +
        '                "height": 12\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "储量： 60%",\n' +
        '                "label": "",\n' +
        '                "text.color": "#666666",\n' +
        '                "text.font": "12px arial"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildId": "pool10003",\n' +
        '                "labelIndex": "3"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Node",\n' +
        '              "i": 8,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "image": "static/icon/integration/drainage.png",\n' +
        '                "position": {\n' +
        '                  "x": 70.02947,\n' +
        '                  "y": 545.2515\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "排涝泵站",\n' +
        '                "clickable": true,\n' +
        '                "buildType": 126011002,\n' +
        '                "id": "18010",\n' +
        '                "bindProp": "facility",\n' +
        '                "stationId": "18010",\n' +
        '                "buildId": "10004"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Node",\n' +
        '              "i": 9,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "image": "static/icon/integration/drainage.png",\n' +
        '                "position": {\n' +
        '                  "x": 288.39271,\n' +
        '                  "y": 549.19636\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "排涝泵站",\n' +
        '                "clickable": true,\n' +
        '                "buildType": 126011002,\n' +
        '                "id": "18013",\n' +
        '                "bindProp": "facility",\n' +
        '                "stationId": "18013",\n' +
        '                "buildId": "10000"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Node",\n' +
        '              "i": 10,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "image": "static/icon/integration/storagePool.png",\n' +
        '                "position": {\n' +
        '                  "x": 287.45488,\n' +
        '                  "y": 464.82466\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "调蓄池",\n' +
        '                "clickable": true,\n' +
        '                "buildType": 126013,\n' +
        '                "id": "18003",\n' +
        '                "bindProp": "facility",\n' +
        '                "stationId": "18003",\n' +
        '                "buildId": "pool10001"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Node",\n' +
        '              "i": 11,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "image": "static/icon/integration/drainage.png",\n' +
        '                "position": {\n' +
        '                  "x": 287.70786,\n' +
        '                  "y": 362.45821\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "排涝泵站",\n' +
        '                "clickable": true,\n' +
        '                "buildType": 126011002,\n' +
        '                "id": "10002",\n' +
        '                "bindProp": "facility",\n' +
        '                "stationId": "18004",\n' +
        '                "buildId": "10002"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Node",\n' +
        '              "i": 12,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "image": "static/icon/integration/drainage.png",\n' +
        '                "position": {\n' +
        '                  "x": 69.77169,\n' +
        '                  "y": 410.20414\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "排涝泵站",\n' +
        '                "clickable": true,\n' +
        '                "buildType": 126011002,\n' +
        '                "id": "18014",\n' +
        '                "bindProp": "facility",\n' +
        '                "stationId": "18014",\n' +
        '                "buildId": "pump10009"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Node",\n' +
        '              "i": 13,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "image": "static/icon/integration/sewageFactory.png",\n' +
        '                "position": {\n' +
        '                  "x": 70.16628,\n' +
        '                  "y": 57.52419\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "污水厂",\n' +
        '                "clickable": true,\n' +
        '                "buildType": 126012,\n' +
        '                "id": "10001",\n' +
        '                "bindProp": "facility",\n' +
        '                "stationId": "18016",\n' +
        '                "buildId": "10001"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Node",\n' +
        '              "i": 14,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "image": "static/icon/integration/storagePool.png",\n' +
        '                "position": {\n' +
        '                  "x": 70.16628,\n' +
        '                  "y": 176.57634\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "调蓄池",\n' +
        '                "clickable": true,\n' +
        '                "buildType": 126013,\n' +
        '                "id": "pool10003",\n' +
        '                "bindProp": "facility",\n' +
        '                "stationId": "18015",\n' +
        '                "buildId": "pool10003"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 15,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 143.02083,\n' +
        '                  "y": 169.51041\n' +
        '                },\n' +
        '                "height": 17\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "福山路调蓄池",\n' +
        '                "text.color": "#000000",\n' +
        '                "text.font": "16px arial"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "文字",\n' +
        '                "buildId": "pool10003",\n' +
        '                "labelIndex": "1"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Node",\n' +
        '              "i": 16,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "image": "static/icon/integration/drainage.png",\n' +
        '                "position": {\n' +
        '                  "x": 70.02083,\n' +
        '                  "y": 289.01041\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "排涝泵站",\n' +
        '                "clickable": true,\n' +
        '                "buildType": "126011002",\n' +
        '                "id": "18009",\n' +
        '                "bindProp": "facility",\n' +
        '                "stationId": "18009",\n' +
        '                "buildId": "10005"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Node",\n' +
        '              "i": 17,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "tag": "selected",\n' +
        '                "image": "static/icon/integration/selection.png",\n' +
        '                "position": {\n' +
        '                  "x": -33.60806,\n' +
        '                  "y": 93.90543\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "2d.visible": false,\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "选中设施"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 18,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 145.02083,\n' +
        '                  "y": 279.51041\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "三道排涝站",\n' +
        '                "text.color": "#000000",\n' +
        '                "text.font": "16px arial",\n' +
        '                "select.color": "transparent",\n' +
        '                "label.opacity": 0\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "文字",\n' +
        '                "labelIndex": "1",\n' +
        '                "buildId": "10005"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 19,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 145.02083,\n' +
        '                  "y": 302.11648\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "设计流量： 5.079m³/s",\n' +
        '                "text.color": "rgb(102,102,102)",\n' +
        '                "text.font": "12px arial",\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "labelIndex": "2",\n' +
        '                "buildId": "10005"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 20,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 141.02083,\n' +
        '                  "y": 426.11648\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "设计流量： 5.079m³/s",\n' +
        '                "text.color": "rgb(102,102,102)",\n' +
        '                "text.font": "12px arial",\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "labelIndex": "2",\n' +
        '                "buildId": "pump10009"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 21,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 142.02083,\n' +
        '                  "y": 403.51041\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "团山排涝站",\n' +
        '                "text.color": "#000000",\n' +
        '                "text.font": "16px arial",\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "文字",\n' +
        '                "labelIndex": "1",\n' +
        '                "buildId": "pump10009"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 22,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 360.02083,\n' +
        '                  "y": 376.51041\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "长新路污水提升泵站",\n' +
        '                "text.color": "#000000",\n' +
        '                "text.font": "16px arial",\n' +
        '                "select.color": "transparent",\n' +
        '                "label.opacity": 0\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "文字",\n' +
        '                "labelIndex": "1",\n' +
        '                "buildId": "10002"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 23,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 360.02083,\n' +
        '                  "y": 399.11648\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "当前流量：5.079m³/s",\n' +
        '                "text.color": "rgb(102,102,102)",\n' +
        '                "text.font": "12px arial",\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "labelIndex": "2",\n' +
        '                "buildId": "10002"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 24,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 360.02083,\n' +
        '                  "y": 480.11648\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "当前状态： 进水",\n' +
        '                "text.color": "rgb(102,102,102)",\n' +
        '                "text.font": "12px arial",\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "labelIndex": "2",\n' +
        '                "buildId": "pool10001"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 25,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 360.02083,\n' +
        '                  "y": 457.51041\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "长新路调蓄池",\n' +
        '                "text.color": "#000000",\n' +
        '                "text.font": "16px arial",\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "文字",\n' +
        '                "labelIndex": "1",\n' +
        '                "buildId": "pool10001"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 26,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 359.02083,\n' +
        '                  "y": 539.51041\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "吴家排涝站",\n' +
        '                "text.color": "#000000",\n' +
        '                "text.font": "16px arial",\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "文字",\n' +
        '                "labelIndex": "1",\n' +
        '                "buildId": "10000"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 27,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 359.02083,\n' +
        '                  "y": 562.11648\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "当前流量： 5.079m³/s",\n' +
        '                "text.color": "rgb(102,102,102)",\n' +
        '                "text.font": "12px arial",\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "labelIndex": "2",\n' +
        '                "buildId": "10000"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 28,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 140.02083,\n' +
        '                  "y": 537.51041\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "永安沟排涝站",\n' +
        '                "text.color": "#000000",\n' +
        '                "text.font": "16px arial",\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "buildName": "文字",\n' +
        '                "labelIndex": "1",\n' +
        '                "buildId": "10004"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Text",\n' +
        '              "i": 29,\n' +
        '              "p": {\n' +
        '                "layer": 1,\n' +
        '                "position": {\n' +
        '                  "x": 140.02083,\n' +
        '                  "y": 560.11648\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "text": "当前流量： 5.079m³/s",\n' +
        '                "text.color": "rgb(102,102,102)",\n' +
        '                "text.font": "12px arial",\n' +
        '                "select.color": "transparent"\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "labelIndex": "2",\n' +
        '                "buildId": "10004"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Shape",\n' +
        '              "i": 30,\n' +
        '              "p": {\n' +
        '                "position": {\n' +
        '                  "x": 69.94007,\n' +
        '                  "y": 116.35191\n' +
        '                },\n' +
        '                "width": 1,\n' +
        '                "height": 120.54187,\n' +
        '                "points": {\n' +
        '                  "__a": [\n' +
        '                    {\n' +
        '                      "x": 69.61776,\n' +
        '                      "y": 56.08098\n' +
        '                    },\n' +
        '                    {\n' +
        '                      "x": 70.26237,\n' +
        '                      "y": 176.62284\n' +
        '                    }\n' +
        '                  ]\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "shape.background": null,\n' +
        '                "select.color": "transparent",\n' +
        '                "shape.border.width": 3,\n' +
        '                "shape.border.color": {}\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "startNode": "18016",\n' +
        '                "endNode": "18015"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Shape",\n' +
        '              "i": 31,\n' +
        '              "p": {\n' +
        '                "position": {\n' +
        '                  "x": 70.41324,\n' +
        '                  "y": 231.14944\n' +
        '                },\n' +
        '                "width": 1,\n' +
        '                "height": 111.40305,\n' +
        '                "points": {\n' +
        '                  "__a": [\n' +
        '                    {\n' +
        '                      "x": 70.56412,\n' +
        '                      "y": 175.44791\n' +
        '                    },\n' +
        '                    {\n' +
        '                      "x": 70.26237,\n' +
        '                      "y": 286.85097\n' +
        '                    }\n' +
        '                  ]\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "shape.background": null,\n' +
        '                "select.color": "transparent",\n' +
        '                "shape.border.width": 3,\n' +
        '                "shape.border.color": {}\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "startNode": "18015",\n' +
        '                "endNode": "18009"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Shape",\n' +
        '              "i": 32,\n' +
        '              "p": {\n' +
        '                "position": {\n' +
        '                  "x": 69.29648,\n' +
        '                  "y": 347.91606\n' +
        '                },\n' +
        '                "width": 1,\n' +
        '                "height": 122.98405,\n' +
        '                "points": {\n' +
        '                  "__a": [\n' +
        '                    {\n' +
        '                      "x": 69.12087,\n' +
        '                      "y": 286.42404\n' +
        '                    },\n' +
        '                    {\n' +
        '                      "x": 69.4721,\n' +
        '                      "y": 409.40808\n' +
        '                    }\n' +
        '                  ]\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "shape.background": null,\n' +
        '                "select.color": "transparent",\n' +
        '                "shape.border.width": 3,\n' +
        '                "shape.border.color": {}\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "startNode": "18009",\n' +
        '                "endNode": "18014"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Shape",\n' +
        '              "i": 33,\n' +
        '              "p": {\n' +
        '                "position": {\n' +
        '                  "x": 69.44684,\n' +
        '                  "y": 476.27908\n' +
        '                },\n' +
        '                "width": 1,\n' +
        '                "height": 135.35821,\n' +
        '                "points": {\n' +
        '                  "__a": [\n' +
        '                    {\n' +
        '                      "x": 69.19431,\n' +
        '                      "y": 408.59997\n' +
        '                    },\n' +
        '                    {\n' +
        '                      "x": 69.69938,\n' +
        '                      "y": 543.95819\n' +
        '                    }\n' +
        '                  ]\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "shape.background": null,\n' +
        '                "select.color": "transparent",\n' +
        '                "shape.border.width": 3,\n' +
        '                "shape.border.color": {}\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "startNode": "18014",\n' +
        '                "endNode": "18010"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Shape",\n' +
        '              "i": 34,\n' +
        '              "p": {\n' +
        '                "position": {\n' +
        '                  "x": 178.02567,\n' +
        '                  "y": 361.7368\n' +
        '                },\n' +
        '                "width": 218.17917,\n' +
        '                "height": 1.42136,\n' +
        '                "points": {\n' +
        '                  "__a": [\n' +
        '                    {\n' +
        '                      "x": 287.11526,\n' +
        '                      "y": 361.02612\n' +
        '                    },\n' +
        '                    {\n' +
        '                      "x": 68.93609,\n' +
        '                      "y": 362.44748\n' +
        '                    }\n' +
        '                  ]\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "shape.background": null,\n' +
        '                "select.color": "transparent",\n' +
        '                "shape.border.width": 3,\n' +
        '                "shape.border.color": {}\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "startNode": "18014",\n' +
        '                "endNode": "18004"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Shape",\n' +
        '              "i": 35,\n' +
        '              "p": {\n' +
        '                "position": {\n' +
        '                  "x": 397.27086,\n' +
        '                  "y": 362.02612\n' +
        '                },\n' +
        '                "width": 218.88985,\n' +
        '                "height": 1,\n' +
        '                "points": {\n' +
        '                  "__a": [\n' +
        '                    {\n' +
        '                      "x": 287.82594,\n' +
        '                      "y": 362.02612\n' +
        '                    },\n' +
        '                    {\n' +
        '                      "x": 506.71579,\n' +
        '                      "y": 362.02612\n' +
        '                    }\n' +
        '                  ]\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "shape.background": null,\n' +
        '                "select.color": "transparent",\n' +
        '                "shape.border.width": 3,\n' +
        '                "shape.border.color": {}\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "startNode": "18004",\n' +
        '                "endNode": "18004"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Shape",\n' +
        '              "i": 36,\n' +
        '              "p": {\n' +
        '                "position": {\n' +
        '                  "x": 287.82594,\n' +
        '                  "y": 413.26119\n' +
        '                },\n' +
        '                "width": 1,\n' +
        '                "height": 104.47016,\n' +
        '                "points": {\n' +
        '                  "__a": [\n' +
        '                    {\n' +
        '                      "x": 287.82594,\n' +
        '                      "y": 361.02612\n' +
        '                    },\n' +
        '                    {\n' +
        '                      "x": 287.82594,\n' +
        '                      "y": 465.49627\n' +
        '                    }\n' +
        '                  ]\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "shape.background": null,\n' +
        '                "select.color": "transparent",\n' +
        '                "shape.border.width": 3,\n' +
        '                "shape.border.color": {}\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "startNode": "18004",\n' +
        '                "endNode": "18003"\n' +
        '              }\n' +
        '            },\n' +
        '            {\n' +
        '              "c": "ht.Shape",\n' +
        '              "i": 37,\n' +
        '              "p": {\n' +
        '                "position": {\n' +
        '                  "x": 288.06369,\n' +
        '                  "y": 505.47884\n' +
        '                },\n' +
        '                "width": 1,\n' +
        '                "height": 84.91293,\n' +
        '                "points": {\n' +
        '                  "__a": [\n' +
        '                    {\n' +
        '                      "x": 287.87928,\n' +
        '                      "y": 463.02238\n' +
        '                    },\n' +
        '                    {\n' +
        '                      "x": 288.24811,\n' +
        '                      "y": 547.93531\n' +
        '                    }\n' +
        '                  ]\n' +
        '                }\n' +
        '              },\n' +
        '              "s": {\n' +
        '                "shape.background": null,\n' +
        '                "select.color": "transparent",\n' +
        '                "shape.border.width": 3,\n' +
        '                "shape.border.color": {}\n' +
        '              },\n' +
        '              "a": {\n' +
        '                "startNode": "18003",\n' +
        '                "endNode": "18013"\n' +
        '              }\n' +
        '            }\n' +
        '          ]\n' +
        '        }',
        a: true
      }
    },
    components: {
      ht,
      htBorderPane,
      htGraph,
      htNode
    },
    mounted() {
      this.nodes = [
        {
          p: {
            name: 'node1',
            image: 'st',
            size: [80, 80],
            position: [100, 100],
          },
          a: {
            id: 123
          }
        }
      ];
    },
    methods: {
      onLoaded(dataModal) {
        // console.log(dataModal);
        // console.log(this.$refs.graph.getInstance().dm())
      }
    }
  }
</script>

<style lang="scss" scoped>
    .hightopo-node {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 15px;
        .btn {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 2000;
        }
    }
</style>