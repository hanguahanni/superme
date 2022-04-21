<template>
  <div>
    <div id="chart" ref="chart"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      option: {
        legend: {
          orient: 'vertical',
          right: 10,
          top: 'center'
        },
        dataset: {
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matchat Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [
          {
            type: 'bar'
          },
          {
            type: 'bar'
          },
          {
            type: 'bar'
          }
        ]
      },
      echartsInstance: null
    }
  },
  mounted () {
    this.drawCharts()
    this.resize()
  },
  methods: {
    resize () {
      window.onresize = () => {
        this.echartsInstance.resize()
      }
    },
    drawCharts () {
      this.echartsInstance = this.$echarts.init(
        this.$refs.chart
        // ,
        // null,
        // {
        //   width: 800,
        //   height: 800
        // }
      )
      this.echartsInstance.setOption(this.option)
    }
  }
}
</script>

<style scoped>
  #chart{
    width:800px;
    height:800px;
    border:1px solid #ccc;
  }
</style>
