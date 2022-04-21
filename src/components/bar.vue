<template>
  <div>
    <div id="chart" ref="chart"></div>
    <div id="chart1" ref="chart1"></div>
    <div id="chart2" ref="chart2"></div>
    <div id="chart3" ref="chart3"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      option: {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: [23, 21, 12, 67, 44, 89, 100]
          }
        ]
      },
      option1: {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: [23, 21, 12, 67, 44, 89, 100],
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            }
          },
          {
            type: 'bar',
            data: [12, 21, 12, 66, 44, 19, 77]
          }
        ]
      },
      option2: {
        title: {
          text: '堆叠柱状图',
          left: 'center'
        },
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [10, 10, 10, 10, 10],
            type: 'bar',
            stack: 'x'
          },
          {
            data: [15, 40, 3, 5, 10],
            type: 'bar',
            stack: 'x'
          }
        ]
      },
      option3: {
        title: {
          text: '动态排序柱状图'
        },
        xAxis: {
          max: 'dataMax'
        },
        yAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E'],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 2 // only the largest 3 bars will be displayed
        },
        series: [
          {
            realtimeSort: true,
            name: 'X',
            type: 'bar',
            data: [116, 1, 131, 107, 170],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ],
        legend: {
          show: true
        },
        animationDuration: 3000,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      },
      echartsInstance: null,
      echartsInstance1: null,
      echartsInstance2: null,
      echartsInstance3: null
    }
  },
  mounted () {
    this.drawCharts()
    this.resize()
    this.setIntervalAnimation()
  },
  methods: {
    resize () {
      window.onresize = () => {
        this.echartsInstance.resize()
        this.echartsInstance1.resize()
        this.echartsInstance2.resize()
        this.echartsInstance3.resize()
      }
    },
    drawCharts () {
      this.echartsInstance = this.$echarts.init(this.$refs.chart)
      this.echartsInstance.setOption(this.option)

      this.echartsInstance1 = this.$echarts.init(this.$refs.chart1)
      this.echartsInstance1.setOption(this.option1)

      this.echartsInstance2 = this.$echarts.init(this.$refs.chart2)
      this.echartsInstance2.setOption(this.option2)

      this.echartsInstance3 = this.$echarts.init(this.$refs.chart3)
      this.echartsInstance3.setOption(this.option3)
    },
    update () {
      var data = this.option3.series[0].data
      for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
          data[i] += Math.round(Math.random() * 2000)
        } else {
          data[i] += Math.round(Math.random() * 200)
        }
      }
      this.echartsInstance3.setOption(this.option3)
    },
    setIntervalAnimation () {
      let that = this
      setInterval(function () {
        that.update()
      }, 3000)
    }
  },
  computed: {
    dynamicOrderData () {
      let data = []
      for (let i = 0; i < 5; ++i) {
        data.push(Math.round(Math.random() * 200))
      }
      return data
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
  #chart3{
    width:500px;
    height:500px;
    border:1px solid #ccc;
  }
</style>
