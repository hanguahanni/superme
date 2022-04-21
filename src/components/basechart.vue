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
        title: {
          text: '入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['茶叶', '羊毛衫']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [2, 34]
          }
        ]
      }
    }
  },
  mounted () {
    this.drawCharts()
  },
  methods: {
    drawCharts () {
      this.$echarts.init(this.$refs.chart).setOption(this.option)
    }
  }
}
</script>

<style scoped>
  #chart{
    width:300px;
    height:300px;
    border:1px solid #ccc;
  }
</style>
