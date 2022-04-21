<template>
  <div class="top_con">
    <div class="left_fixed">
      <div class="nav_title">导航</div>
      <ul>
        <router-link v-for="(item,index) in tabList" :key="index" :to="{path:item.router}">
          <li :class="index == active?'active_li':''" @click="changeActive(index)">{{item.title}}</li>
        </router-link>
      </ul>
    </div>
    <div style="width:21px;"></div>
    <div class="main_container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      active: 0,
      tabList: [
        {
          router: '/',
          title: '基础图表',
          id: 0
        },
        {
          router: '/size',
          title: '图表容器及大小',
          id: 1
        },
        {
          router: '/style',
          title: '样式',
          id: 2
        },
        {
          router: '/dataset',
          title: '数据集',
          id: 3
        },
        {
          router: '/dataconversion',
          title: '数据转换',
          id: 4
        },
        {
          router: '/coordinateaxis',
          title: '坐标轴',
          id: 5
        },
        {
          router: '/legend',
          title: '图例',
          id: 6
        },
        {
          router: '/eventsandbehaviors',
          title: '事件与行为',
          id: 7
        },
        {
          router: '/bar',
          title: '柱状图',
          id: 8
        },
        {
          router: '/line',
          title: '折线图',
          id: 9
        },
        {
          router: '/pie',
          title: '饼图',
          id: 10
        }
      ]
    }
  },
  mounted () {
    let path = this.$route.path
    this.tabList.forEach(x => {
      if (x.router === path) {
        this.active = x.id
      }
    })
  },
  methods: {
    changeActive (index) {
      this.active = index
    }
  }
}
</script>

<style scoped>
  @import url(../assets/style/home.css);
</style>
