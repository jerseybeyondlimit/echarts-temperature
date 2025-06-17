var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom, 'dark');
var option;

option = {
  title: {
    text: 'GPU Power in Different Model Size in 15 Minutes',
    top: '1%',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top: '5.5%'
  },
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [],
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} W'
    }
  },
  series: [
    {
      name: 'Fusion 100*100 2 LiDAR',
      type: 'line',
      data: [],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
    {
      name: 'Fusion 150*150 2 LiDAR',
      type: 'line',
      data: [],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          // [
          //   {
          //     symbol: 'none',
          //     x: '90%',
          //     yAxis: 'max'
          //   },
          //   {
          //     symbol: 'circle',
          //     label: {
          //       position: 'start',
          //       formatter: 'Max'
          //     },
          //     type: 'max',
          //     name: '最高点'
          //   }
          // ]
        ]
      }
    },
    {
      name: 'Fusion 200*200 2 LiDAR',
      type: 'line',
      data: [],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
  ]
};

fetch('./data.json')
  .then(res => res.json())
  .then(cfg => {
    option.xAxis .data = cfg.times;
    option.series[0].data = cfg.fusion_100_100_2_lidar;
    option.series[1].data = cfg.fusion_150_150_2_lidar;
    option.series[2].data = cfg.fusion_200_200_2_lidar;
    myChart.setOption(option);
  })
  .catch(console.error);

option && myChart.setOption(option);
