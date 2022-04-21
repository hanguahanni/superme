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
        series: [
          {
            type: 'pie',
            data: [
              {
                value: '12',
                name: '卡车修改1111'
              },
              {
                value: '34',
                name: '火车'
              },
              {
                value: '78',
                name: '客车'
              }
            ],
            radius: '50%'
          }
        ]
      },
      option1: {
        title: {
          text: '圆环图',
          left: 'center',
          top: 'center'
        },
        series: [
          {
            type: 'pie',
            data: [
              {
                value: '12',
                name: '卡车'
              },
              {
                value: '34',
                name: '火车'
              },
              {
                value: '78',
                name: '客车'
              }
            ],
            radius: ['30%', '70%']
          }
        ]
      },
      echartsInstance: null,
      echartsInstance1: null
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
      }
    },
    drawCharts () {
      this.echartsInstance = this.$echarts.init(this.$refs.chart)
      this.echartsInstance.setOption(this.option)

      this.echartsInstance1 = this.$echarts.init(this.$refs.chart1)
      this.echartsInstance1.setOption(this.option1)
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
</style>
