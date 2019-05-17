<template>
    <div class="hightopo-node">
        <ht :images="images">
            <ht-graph ref="graph" border-position="left" :border-size="40" :view-style="{width: '100%',height: '100%', backgroundColor: '#fff'}" >
                <ht-data-model :data="htData" @loaded="onLoaded"></ht-data-model>
                <ht-node :size="[450, 225]" :position="[450, 225]" image="zhilang"></ht-node>
            </ht-graph>
        </ht>
    </div>
</template>

<script>
  import { ht, htBorderPane, htGraph, htDataModel, htNode} from '@/components/ht';

  export default {
    data() {
      return {
        images: [
          {
            name: 'zhilang',
            src: 'static/images/只狼.jpg'
          }
        ],
        editableFunc: data => {
          return true;
        },
        htData: {
          "v": "6.2.9",
          "p": {
            "background": "rgb(255,255,255)",
            "layers": [
              "0",
              1
            ],
            "autoAdjustIndex": true,
            "hierarchicalRendering": true
          },
          "d": [
            {
              "c": "ht.Text",
              "i": 3,
              "p": {
                "name": "文字",
                "layer": 1,
                "position": {
                  "x": 146.39194,
                  "y": 50.40543
                },
                "height": 17
              },
              "s": {
                "text": "北郊污水处理厂",
                "label": "",
                "text.color": "rgb(0,0,0)",
                "text.font": "16px arial"
              },
              "a": {
                "buildId": "10001",
                "labelIndex": "1"
              }
            },
            {
              "c": "ht.Text",
              "i": 4,
              "p": {
                "name": "文字",
                "layer": 1,
                "position": {
                  "x": 144.39194,
                  "y": 74.64764
                },
                "height": 10
              },
              "s": {
                "text": "进厂流量： 9m³/s",
                "label": "",
                "text.color": "#666666",
                "text.font": "12px arial"
              },
              "a": {
                "buildId": "10001",
                "labelIndex": "2"
              }
            },
            {
              "c": "ht.Text",
              "i": 5,
              "p": {
                "name": "文字",
                "layer": 1,
                "position": {
                  "x": 145.39194,
                  "y": 92.40543
                },
                "height": 9
              },
              "s": {
                "text": "处理余量： 20%",
                "label": "",
                "text.color": "#666666",
                "text.font": "12px arial"
              },
              "a": {
                "buildId": "10001",
                "labelIndex": "3"
              }
            },
            {
              "c": "ht.Text",
              "i": 6,
              "p": {
                "name": "文字",
                "layer": 1,
                "position": {
                  "x": 143.02083,
                  "y": 192.11648
                },
                "height": 15
              },
              "s": {
                "text": "当前状态： 进水",
                "label": "",
                "text.color": "rgb(102,102,102)",
                "text.font": "12px arial"
              },
              "a": {
                "buildId": "pool10003",
                "labelIndex": "2"
              }
            },
            {
              "c": "ht.Text",
              "i": 7,
              "p": {
                "name": "文字",
                "layer": 1,
                "position": {
                  "x": 143.64972,
                  "y": 211.87427
                },
                "height": 12
              },
              "s": {
                "text": "储量： 60%",
                "label": "",
                "text.color": "#666666",
                "text.font": "12px arial"
              },
              "a": {
                "buildId": "pool10003",
                "labelIndex": "3"
              }
            },
            {
              "c": "ht.Node",
              "i": 8,
              "p": {
                "layer": 1,
                "image": "static/icon/integration/drainage.png",
                "position": {
                  "x": 70.02947,
                  "y": 545.2515
                }
              },
              "s": {
                "select.color": "transparent"
              },
              "a": {
                "buildName": "排涝泵站",
                "clickable": true,
                "buildType": 126011002,
                "id": "18010",
                "bindProp": "facility",
                "stationId": "18010",
                "buildId": "10004"
              }
            },
            {
              "c": "ht.Node",
              "i": 9,
              "p": {
                "layer": 1,
                "image": "static/icon/integration/drainage.png",
                "position": {
                  "x": 288.39271,
                  "y": 549.19636
                }
              },
              "s": {
                "select.color": "transparent"
              },
              "a": {
                "buildName": "排涝泵站",
                "clickable": true,
                "buildType": 126011002,
                "id": "18013",
                "bindProp": "facility",
                "stationId": "18013",
                "buildId": "10000"
              }
            },
            {
              "c": "ht.Node",
              "i": 10,
              "p": {
                "layer": 1,
                "image": "static/icon/integration/storagePool.png",
                "position": {
                  "x": 287.45488,
                  "y": 464.82466
                }
              },
              "s": {
                "select.color": "transparent"
              },
              "a": {
                "buildName": "调蓄池",
                "clickable": true,
                "buildType": 126013,
                "id": "18003",
                "bindProp": "facility",
                "stationId": "18003",
                "buildId": "pool10001"
              }
            },
            {
              "c": "ht.Node",
              "i": 11,
              "p": {
                "layer": 1,
                "image": "static/icon/integration/drainage.png",
                "position": {
                  "x": 287.70786,
                  "y": 362.45821
                }
              },
              "s": {
                "select.color": "transparent"
              },
              "a": {
                "buildName": "排涝泵站",
                "clickable": true,
                "buildType": 126011002,
                "id": "10002",
                "bindProp": "facility",
                "stationId": "18004",
                "buildId": "10002"
              }
            },
            {
              "c": "ht.Node",
              "i": 12,
              "p": {
                "layer": 1,
                "image": "static/icon/integration/drainage.png",
                "position": {
                  "x": 69.77169,
                  "y": 410.20414
                }
              },
              "s": {
                "select.color": "transparent"
              },
              "a": {
                "buildName": "排涝泵站",
                "clickable": true,
                "buildType": 126011002,
                "id": "18014",
                "bindProp": "facility",
                "stationId": "18014",
                "buildId": "pump10009"
              }
            },
            {
              "c": "ht.Node",
              "i": 13,
              "p": {
                "layer": 1,
                "image": "static/icon/integration/sewageFactory.png",
                "position": {
                  "x": 70.16628,
                  "y": 57.52419
                }
              },
              "s": {
                "select.color": "transparent"
              },
              "a": {
                "buildName": "污水厂",
                "clickable": true,
                "buildType": 126012,
                "id": "10001",
                "bindProp": "facility",
                "stationId": "18016",
                "buildId": "10001"
              }
            },
            {
              "c": "ht.Node",
              "i": 14,
              "p": {
                "layer": 1,
                "image": "static/icon/integration/storagePool.png",
                "position": {
                  "x": 70.16628,
                  "y": 176.57634
                }
              },
              "s": {
                "select.color": "transparent"
              },
              "a": {
                "buildName": "调蓄池",
                "clickable": true,
                "buildType": 126013,
                "id": "pool10003",
                "bindProp": "facility",
                "stationId": "18015",
                "buildId": "pool10003"
              }
            },
            {
              "c": "ht.Text",
              "i": 15,
              "p": {
                "layer": 1,
                "position": {
                  "x": 143.02083,
                  "y": 169.51041
                },
                "height": 17
              },
              "s": {
                "text": "福山路调蓄池",
                "text.color": "#000000",
                "text.font": "16px arial"
              },
              "a": {
                "buildName": "文字",
                "buildId": "pool10003",
                "labelIndex": "1"
              }
            },
            {
              "c": "ht.Node",
              "i": 16,
              "p": {
                "layer": 1,
                "image": "static/icon/integration/drainage.png",
                "position": {
                  "x": 70.02083,
                  "y": 289.01041
                }
              },
              "s": {
                "select.color": "transparent"
              },
              "a": {
                "buildName": "排涝泵站",
                "clickable": true,
                "buildType": "126011002",
                "id": "18009",
                "bindProp": "facility",
                "stationId": "18009",
                "buildId": "10005"
              }
            },
            {
              "c": "ht.Node",
              "i": 17,
              "p": {
                "layer": 1,
                "tag": "selected",
                "image": "static/icon/integration/selection.png",
                "position": {
                  "x": -33.60806,
                  "y": 93.90543
                }
              },
              "s": {
                "2d.visible": false,
                "select.color": "transparent"
              },
              "a": {
                "buildName": "选中设施"
              }
            },
            {
              "c": "ht.Text",
              "i": 18,
              "p": {
                "layer": 1,
                "position": {
                  "x": 145.02083,
                  "y": 279.51041
                }
              },
              "s": {
                "text": "三道排涝站",
                "text.color": "#000000",
                "text.font": "16px arial",
                "select.color": "transparent",
                "label.opacity": 0
              },
              "a": {
                "buildName": "文字",
                "labelIndex": "1",
                "buildId": "10005"
              }
            },
            {
              "c": "ht.Text",
              "i": 19,
              "p": {
                "layer": 1,
                "position": {
                  "x": 145.02083,
                  "y": 302.11648
                }
              },
              "s": {
                "text": "设计流量： 5.079m³/s",
                "text.color": "rgb(102,102,102)",
                "text.font": "12px arial",
                "select.color": "transparent"
              },
              "a": {
                "labelIndex": "2",
                "buildId": "10005"
              }
            },
            {
              "c": "ht.Text",
              "i": 20,
              "p": {
                "layer": 1,
                "position": {
                  "x": 141.02083,
                  "y": 426.11648
                }
              },
              "s": {
                "text": "设计流量： 5.079m³/s",
                "text.color": "rgb(102,102,102)",
                "text.font": "12px arial",
                "select.color": "transparent"
              },
              "a": {
                "labelIndex": "2",
                "buildId": "pump10009"
              }
            },
            {
              "c": "ht.Text",
              "i": 21,
              "p": {
                "layer": 1,
                "position": {
                  "x": 142.02083,
                  "y": 403.51041
                }
              },
              "s": {
                "text": "团山排涝站",
                "text.color": "#000000",
                "text.font": "16px arial",
                "select.color": "transparent"
              },
              "a": {
                "buildName": "文字",
                "labelIndex": "1",
                "buildId": "pump10009"
              }
            },
            {
              "c": "ht.Text",
              "i": 22,
              "p": {
                "layer": 1,
                "position": {
                  "x": 360.02083,
                  "y": 376.51041
                }
              },
              "s": {
                "text": "长新路污水提升泵站",
                "text.color": "#000000",
                "text.font": "16px arial",
                "select.color": "transparent",
                "label.opacity": 0
              },
              "a": {
                "buildName": "文字",
                "labelIndex": "1",
                "buildId": "10002"
              }
            },
            {
              "c": "ht.Text",
              "i": 23,
              "p": {
                "layer": 1,
                "position": {
                  "x": 360.02083,
                  "y": 399.11648
                }
              },
              "s": {
                "text": "当前流量：5.079m³/s",
                "text.color": "rgb(102,102,102)",
                "text.font": "12px arial",
                "select.color": "transparent"
              },
              "a": {
                "labelIndex": "2",
                "buildId": "10002"
              }
            },
            {
              "c": "ht.Text",
              "i": 24,
              "p": {
                "layer": 1,
                "position": {
                  "x": 360.02083,
                  "y": 480.11648
                }
              },
              "s": {
                "text": "当前状态： 进水",
                "text.color": "rgb(102,102,102)",
                "text.font": "12px arial",
                "select.color": "transparent"
              },
              "a": {
                "labelIndex": "2",
                "buildId": "pool10001"
              }
            },
            {
              "c": "ht.Text",
              "i": 25,
              "p": {
                "layer": 1,
                "position": {
                  "x": 360.02083,
                  "y": 457.51041
                }
              },
              "s": {
                "text": "长新路调蓄池",
                "text.color": "#000000",
                "text.font": "16px arial",
                "select.color": "transparent"
              },
              "a": {
                "buildName": "文字",
                "labelIndex": "1",
                "buildId": "pool10001"
              }
            },
            {
              "c": "ht.Text",
              "i": 26,
              "p": {
                "layer": 1,
                "position": {
                  "x": 359.02083,
                  "y": 539.51041
                }
              },
              "s": {
                "text": "吴家排涝站",
                "text.color": "#000000",
                "text.font": "16px arial",
                "select.color": "transparent"
              },
              "a": {
                "buildName": "文字",
                "labelIndex": "1",
                "buildId": "10000"
              }
            },
            {
              "c": "ht.Text",
              "i": 27,
              "p": {
                "layer": 1,
                "position": {
                  "x": 359.02083,
                  "y": 562.11648
                }
              },
              "s": {
                "text": "当前流量： 5.079m³/s",
                "text.color": "rgb(102,102,102)",
                "text.font": "12px arial",
                "select.color": "transparent"
              },
              "a": {
                "labelIndex": "2",
                "buildId": "10000"
              }
            },
            {
              "c": "ht.Text",
              "i": 28,
              "p": {
                "layer": 1,
                "position": {
                  "x": 140.02083,
                  "y": 537.51041
                }
              },
              "s": {
                "text": "永安沟排涝站",
                "text.color": "#000000",
                "text.font": "16px arial",
                "select.color": "transparent"
              },
              "a": {
                "buildName": "文字",
                "labelIndex": "1",
                "buildId": "10004"
              }
            },
            {
              "c": "ht.Text",
              "i": 29,
              "p": {
                "layer": 1,
                "position": {
                  "x": 140.02083,
                  "y": 560.11648
                }
              },
              "s": {
                "text": "当前流量： 5.079m³/s",
                "text.color": "rgb(102,102,102)",
                "text.font": "12px arial",
                "select.color": "transparent"
              },
              "a": {
                "labelIndex": "2",
                "buildId": "10004"
              }
            },
            {
              "c": "ht.Shape",
              "i": 30,
              "p": {
                "position": {
                  "x": 69.94007,
                  "y": 116.35191
                },
                "width": 1,
                "height": 120.54187,
                "points": {
                  "__a": [
                    {
                      "x": 69.61776,
                      "y": 56.08098
                    },
                    {
                      "x": 70.26237,
                      "y": 176.62284
                    }
                  ]
                }
              },
              "s": {
                "shape.background": null,
                "select.color": "transparent",
                "shape.border.width": 3,
                "shape.border.color": {}
              },
              "a": {
                "startNode": "18016",
                "endNode": "18015"
              }
            },
            {
              "c": "ht.Shape",
              "i": 31,
              "p": {
                "position": {
                  "x": 70.41324,
                  "y": 231.14944
                },
                "width": 1,
                "height": 111.40305,
                "points": {
                  "__a": [
                    {
                      "x": 70.56412,
                      "y": 175.44791
                    },
                    {
                      "x": 70.26237,
                      "y": 286.85097
                    }
                  ]
                }
              },
              "s": {
                "shape.background": null,
                "select.color": "transparent",
                "shape.border.width": 3,
                "shape.border.color": {}
              },
              "a": {
                "startNode": "18015",
                "endNode": "18009"
              }
            },
            {
              "c": "ht.Shape",
              "i": 32,
              "p": {
                "position": {
                  "x": 69.29648,
                  "y": 347.91606
                },
                "width": 1,
                "height": 122.98405,
                "points": {
                  "__a": [
                    {
                      "x": 69.12087,
                      "y": 286.42404
                    },
                    {
                      "x": 69.4721,
                      "y": 409.40808
                    }
                  ]
                }
              },
              "s": {
                "shape.background": null,
                "select.color": "transparent",
                "shape.border.width": 3,
                "shape.border.color": {}
              },
              "a": {
                "startNode": "18009",
                "endNode": "18014"
              }
            },
            {
              "c": "ht.Shape",
              "i": 33,
              "p": {
                "position": {
                  "x": 69.44684,
                  "y": 476.27908
                },
                "width": 1,
                "height": 135.35821,
                "points": {
                  "__a": [
                    {
                      "x": 69.19431,
                      "y": 408.59997
                    },
                    {
                      "x": 69.69938,
                      "y": 543.95819
                    }
                  ]
                }
              },
              "s": {
                "shape.background": null,
                "select.color": "transparent",
                "shape.border.width": 3,
                "shape.border.color": {}
              },
              "a": {
                "startNode": "18014",
                "endNode": "18010"
              }
            },
            {
              "c": "ht.Shape",
              "i": 34,
              "p": {
                "position": {
                  "x": 178.02567,
                  "y": 361.7368
                },
                "width": 218.17917,
                "height": 1.42136,
                "points": {
                  "__a": [
                    {
                      "x": 287.11526,
                      "y": 361.02612
                    },
                    {
                      "x": 68.93609,
                      "y": 362.44748
                    }
                  ]
                }
              },
              "s": {
                "shape.background": null,
                "select.color": "transparent",
                "shape.border.width": 3,
                "shape.border.color": {}
              },
              "a": {
                "startNode": "18014",
                "endNode": "18004"
              }
            },
            {
              "c": "ht.Shape",
              "i": 35,
              "p": {
                "position": {
                  "x": 397.27086,
                  "y": 362.02612
                },
                "width": 218.88985,
                "height": 1,
                "points": {
                  "__a": [
                    {
                      "x": 287.82594,
                      "y": 362.02612
                    },
                    {
                      "x": 506.71579,
                      "y": 362.02612
                    }
                  ]
                }
              },
              "s": {
                "shape.background": null,
                "select.color": "transparent",
                "shape.border.width": 3,
                "shape.border.color": {}
              },
              "a": {
                "startNode": "18004",
                "endNode": "18004"
              }
            },
            {
              "c": "ht.Shape",
              "i": 36,
              "p": {
                "position": {
                  "x": 287.82594,
                  "y": 413.26119
                },
                "width": 1,
                "height": 104.47016,
                "points": {
                  "__a": [
                    {
                      "x": 287.82594,
                      "y": 361.02612
                    },
                    {
                      "x": 287.82594,
                      "y": 465.49627
                    }
                  ]
                }
              },
              "s": {
                "shape.background": null,
                "select.color": "transparent",
                "shape.border.width": 3,
                "shape.border.color": {}
              },
              "a": {
                "startNode": "18004",
                "endNode": "18003"
              }
            },
            {
              "c": "ht.Shape",
              "i": 37,
              "p": {
                "position": {
                  "x": 288.06369,
                  "y": 505.47884
                },
                "width": 1,
                "height": 84.91293,
                "points": {
                  "__a": [
                    {
                      "x": 287.87928,
                      "y": 463.02238
                    },
                    {
                      "x": 288.24811,
                      "y": 547.93531
                    }
                  ]
                }
              },
              "s": {
                "shape.background": null,
                "select.color": "transparent",
                "shape.border.width": 3,
                "shape.border.color": {}
              },
              "a": {
                "startNode": "18003",
                "endNode": "18013"
              }
            }
          ]
        }
      }
    },
    components: {
      ht,
      htBorderPane,
      htGraph,
      htNode,
      htDataModel
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
        width: 100%;
        height: 100%;
        padding: 15px;
    }
</style>