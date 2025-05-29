var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom, 'dark');
var option;

option = {
  title: {
    text: 'Temperature Changing in Traffic Cabinet'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {},
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
      formatter: '{value} °C'
    }
  },
  series: [
    {
      name: 'Sunny 18 to 28',
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
      name: 'Cloudy 18 to 28',
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
    }
  ]
};

fetch('./data.json')
  .then(res => res.json())
  .then(cfg => {
    option.xAxis .data = cfg.times;
    option.series[0].data = cfg.temps_20250529_sunny;
    option.series[1].data = cfg.temps_20250528_cloudy;
    myChart.setOption(option);
  })
  .catch(console.error);

option && myChart.setOption(option);
