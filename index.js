var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom, 'dark');
var option;

option = {
  title: {
    text: 'Temperature Changing and Comparison between Inside Traffic Cabinet and Outside Air'
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
      name: 'Sunny 24 to 31 Inside Cabinet',
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
      name: 'Sunny 24 to 31 Outside Air',
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
    option.series[0].data = cfg.temps_20250605_sunny_inside;
    option.series[1].data = cfg.temps_20250605_sunny_outside;
    myChart.setOption(option);
  })
  .catch(console.error);

option && myChart.setOption(option);
