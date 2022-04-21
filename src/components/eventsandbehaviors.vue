<template>
  <div>
    <div id="chart" ref="chart"></div>
    <div id="chart1" ref="chart1"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      option: {
        xAxis: {
          data: ['衬衫', '裤子', '袜子', 'T恤', '羊毛衫', '雪纺衫']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [3, 4, 5, 12, 56, 21]
          }
        ]
      },
      echartsInstance: null,
      option1: {
        title: {
          text: '饼图程序调用高亮示例',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/> {b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      echartsInstance1: null,
      currentIndex: -1,
      interval: null
    }
  },
  mounted () {
    this.drawCharts()
    this.addEvent()
    this.resize()
    this.loopEvent()
    this.addEvent1()
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
    },
    addEvent () {
      this.echartsInstance.on('click', function (params) {
        window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name))
      })
    },
    addEvent1 () {
      this.echartsInstance1.getZr().on('click', function (event) {
        // 没有 target 意味着鼠标/指针不在任何一个图形元素上，它是从“空白处”触发的。
        console.log(event, '111')
        if (!event.target) {
          // 点击了空白处
          console.log('点击了空白处')
        }
      })
    },
    loopEvent () {
      let that = this
      that.interval = setInterval(function () {
        let dataLen = that.option1.series[0].data.length
        // 取消之前高亮的图形
        that.echartsInstance1.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: that.currentIndex
        })
        that.currentIndex = (that.currentIndex + 1) % dataLen
        // 高亮当前图形
        that.echartsInstance1.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: that.currentIndex
        })
        // 显示 tooltip
        that.echartsInstance1.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: that.currentIndex
        })
      }, 1000)
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
