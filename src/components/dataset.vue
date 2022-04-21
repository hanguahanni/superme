<template>
  <div>
    <div id="dataset" ref="dataset"></div>
    <div id="dataset2" ref="dataset2"></div>
    <div id="dataset3" ref="dataset3"></div>
    <div id="dataset4" ref="dataset4"></div>
    <div id="dataset5" ref="dataset5"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        xAxis: {
          type: 'category',
          data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            name: '2015',
            data: [89.3, 92.1, 94.4, 85.4]
          },
          {
            type: 'bar',
            name: '2016',
            data: [11, 92.1, 66.4, 45.4]
          },
          {
            type: 'bar',
            name: '2017',
            data: [56.3, 56.1, 34.4, 78.4]
          }
        ]
      },
      options2: {
        legend: {},
        tooltip: {},
        dataset: {
          // 提供一份数据。
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: { type: 'category' },
        // 声明一个 Y 轴，数值轴。
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      },
      options3: {
        legend: {},
        tooltip: {},
        dataset: {
          // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
          // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
          // 如果不指定 dimensions，也可以通过指定 series.encode
          // 完成映射，参见后文。
          dimensions: ['product', '2015', '2016', '2017'],
          source: [
            { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
            { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
            { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
            { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      },
      options4: {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', '2012', '2013', '2014', '2015'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
          ]
        },
        xAxis: [
          { type: 'category', gridIndex: 0 },
          { type: 'category', gridIndex: 1 }
        ],
        yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
        grid: [{ bottom: '55%' }, { top: '55%' }],
        series: [
          // 这几个系列会出现在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
          { type: 'bar', seriesLayoutBy: 'row' },
          { type: 'bar', seriesLayoutBy: 'row' },
          { type: 'bar', seriesLayoutBy: 'row' },
          // 这几个系列会出现在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
        ]
      },
      options5: {
        dataset: {
          source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            [68.1, 79146, 'Tea'],
            [19.6, 91852, 'Orange Juice'],
            [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie']
          ]
        },
        xAxis: {},
        yAxis: { type: 'category' },
        series: [
          {
            type: 'bar',
            encode: {
              // 将 "amount" 列映射到 X 轴。
              x: 'amount',
              // 将 "product" 列映射到 Y 轴。
              y: 'product'
            }
          }
        ]
      }
    }
  },
  mounted () {
    this.initEcharts()
    this.initEcharts2()
    this.initEcharts3()
    this.initEcharts4()
    this.initEcharts5()
  },
  methods: {
    initEcharts () {
      this.$echarts.init(this.$refs.dataset).setOption(this.options)
    },
    initEcharts2 () {
      this.$echarts.init(this.$refs.dataset2).setOption(this.options2)
    },
    initEcharts3 () {
      this.$echarts.init(this.$refs.dataset3).setOption(this.options3)
    },
    initEcharts4 () {
      this.$echarts.init(this.$refs.dataset4).setOption(this.options4)
    },
    initEcharts5 () {
      this.$echarts.init(this.$refs.dataset5).setOption(this.options5)
    }
  }
}
</script>

<style>
#dataset {
  width: 800px;
  height: 400px;
}
#dataset2 {
  width: 800px;
  height: 400px;
}
#dataset3 {
  width: 800px;
  height: 400px;
}
#dataset4 {
  width: 800px;
  height: 400px;
}
#dataset5 {
  width: 1200px;
  height: 400px;
}
</style>
