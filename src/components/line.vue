<template>
  <div>
    <div id="chart" ref="chart"></div>
    <div id="chart1" ref="chart1"></div>
    <div id="chart2" ref="chart2"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150],
            type: 'line'
          }
        ]
      },
      option1: {
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [120, 200, 150, 12, 34],
            type: 'line',
            symbol: 'arrow',
            symbolSize: 6,
            lineStyle: {
              normal: {
                color: 'red',
                width: 4,
                type: 'dashed'
              }
            },
            itemStyle: {
              color: 'green',
              borderColor: 'black',
              borderWidth: 2,
              shadowColor: 'red',
              shadowBlur: 10
            },
            label: {
              show: true
            }
          }
        ]
      },
      option2: {
        title: {
          text: '堆叠折线图',
        },
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [120, 200, 150, 12, 34],
            type: 'line',
            symbol: 'arrow',
            symbolSize: 6,
            lineStyle: {
              normal: {
                color: 'red',
                width: 4,
                type: 'dashed'
              }
            },
            itemStyle: {
              color: 'green',
              borderColor: 'black',
              borderWidth: 2,
              shadowColor: 'red',
              shadowBlur: 10
            },
            label: {
              show: true
            },
            areaStyle: {}
          },
          {
            data: [11, 12, 355, 2, 77],
            type: 'line',
            symbol: 'arrow',
            symbolSize: 6,
            lineStyle: {
              normal: {
                color: 'red',
                width: 4,
                type: 'dashed'
              }
            },
            itemStyle: {
              color: 'green',
              borderColor: 'black',
              borderWidth: 2,
              shadowColor: 'red',
              shadowBlur: 10
            },
            label: {
              show: true
            },
            areaStyle: {}
          }
        ]
      },
      echartsInstance: null,
      echartsInstance1: null,
      echartsInstance2: null
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
        this.echartsInstance1.resize()
        this.echartsInstance2.resize()
      }
    },
    drawCharts () {
      this.echartsInstance = this.$echarts.init(this.$refs.chart)
      this.echartsInstance.setOption(this.option)

      this.echartsInstance1 = this.$echarts.init(this.$refs.chart1)
      this.echartsInstance1.setOption(this.option1)

      this.echartsInstance2 = this.$echarts.init(this.$refs.chart2)
      this.echartsInstance2.setOption(this.option2)
    }
  }
}
</script>

<style scoped>
  #chart{
    width:500px;
    height:500px;
    border:1px solid #ccc;
  }
  #chart1{
    width:500px;
    height:500px;
    border:1px solid #ccc;
  }
  #chart2{
    width:500px;
    height:500px;
    border:1px solid #ccc;
  }
</style>
