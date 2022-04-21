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
          text: '容器大小'
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
    width:100%;
    height:300px;
    border:1px solid #ccc;
  }
</style>
