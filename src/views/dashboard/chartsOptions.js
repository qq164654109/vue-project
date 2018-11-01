export const lineOptions = {
  xAxis: {
    data: ['星期一', '星期二','星期三','星期四','星期五','星期六','星期天'],
    boundaryGap: false,
    axisTick: {
      show: false
    }
  },
  grid: {
    left: 20,
    right: 20,
    bottom: 20,
    top: 30,
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    },
    padding: [5, 10]
  },
  yAxis: {
    axisTick: {
      show: false
    }
  },
  legend: {
    data: ['expected', 'actual']
  },
  series: [{
    name: 'expected', itemStyle: {
      normal: {
        color: '#FF005A',
        lineStyle: {
          color: '#FF005A',
          width: 2
        }
      }
    },
    smooth: true,
    type: 'line',
    data: [2, 2, 2, 2, 3, 3, 3],
    animationDuration: 2800,
    animationEasing: 'cubicInOut'
  },
    {
      name: 'actual',
      smooth: true,
      type: 'line',
      itemStyle: {
        normal: {
          color: '#3888fa',
          lineStyle: {
            color: '#3888fa',
            width: 2
          },
          areaStyle: {
            color: '#f3f8ff'
          }
        }
      },
      data: [1, 1, 2, 2, 3, 3, 4],
      animationDuration: 2800,
      animationEasing: 'quadraticOut'
    }]
};

export const radarOptions = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  radar: {
    radius: '56%',
    center: ['50%', '42%'],
    splitNumber: 8,
    splitArea: {
      areaStyle: {
        color: 'rgba(127,95,132,.3)',
        opacity: 1,
        shadowBlur: 45,
        shadowColor: 'rgba(0,0,0,.5)',
        shadowOffsetX: 0,
        shadowOffsetY: 15
      }
    },
    indicator: [
      { name: 'Sales', max: 10000 },
      { name: 'Administration', max: 20000 },
      { name: 'Information Techology', max: 20000 },
      { name: 'Customer Support', max: 20000 },
      { name: 'Development', max: 20000 },
      { name: 'Marketing', max: 20000 }
    ]
  },
  legend: {
    left: 'center',
    bottom: '10',
    data: ['Allocated Budget', 'Expected Spending', 'Actual Spending']
  },
  series: [{
    type: 'radar',
    symbolSize: 0,
    areaStyle: {
      normal: {
        shadowBlur: 13,
        shadowColor: 'rgba(0,0,0,.2)',
        shadowOffsetX: 0,
        shadowOffsetY: 10,
        opacity: 1
      }
    },
    data: [
      {
        value: [5000, 7000, 12000, 11000, 15000, 14000],
        name: 'Allocated Budget'
      },
      {
        value: [4000, 9000, 15000, 15000, 13000, 11000],
        name: 'Expected Spending'
      },
      {
        value: [5500, 11000, 12000, 15000, 12000, 12000],
        name: 'Actual Spending'
      }
    ],
    animationDuration: 3000
  }]
};

export const pieOptions = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    left: 'center',
    bottom: '10',
    data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
  },
  calculable: true,
  series: [
    {
      name: 'WEEKLY WRITE ARTICLES',
      type: 'pie',
      roseType: 'radius',
      radius: [15, 95],
      center: ['50%', '38%'],
      data: [
        { value: 320, name: 'Industries' },
        { value: 240, name: 'Technology' },
        { value: 149, name: 'Forex' },
        { value: 100, name: 'Gold' },
        { value: 59, name: 'Forecasts' }
      ],
      animationEasing: 'cubicInOut',
      animationDuration: 2600
    }
  ]
};

export const barOptions = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    top: 10,
    left: '2%',
    right: '2%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisTick: {
      alignWithLabel: true
    }
  }],
  yAxis: [{
    type: 'value',
    axisTick: {
      show: false
    }
  }],
  series: [{
    name: 'pageA',
    type: 'bar',
    stack: 'vistors',
    barWidth: '60%',
    data: [79, 52, 200, 334, 390, 330, 220],
    animationDuration: 300
  }, {
    name: 'pageB',
    type: 'bar',
    stack: 'vistors',
    barWidth: '60%',
    data: [80, 52, 200, 334, 390, 330, 220],
    animationDuration: 300
  }, {
    name: 'pageC',
    type: 'bar',
    stack: 'vistors',
    barWidth: '60%',
    data: [30, 52, 200, 334, 390, 330, 220],
    animationDuration: 300
  }]
};
