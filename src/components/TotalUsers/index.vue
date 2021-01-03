<template>
  <common-card
    title="累计用户数"
    value="1,410,350"
  >
    <template>
      <div id="total-users-chart" :style="{ width: '100%', height: '100%' }"></div>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比 </span>
        <span class="emphasis">41.01%</span>
        <div class="increase"></div>
        <span class="month">月同比 </span>
        <span class="emphasis">76.27%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'index',
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.getElementById('total-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        show: false,
        boundaryGap: false,
        type: 'value'
      },
      yAxis: {
        show: false,
        type: 'category'
      },
      series: [{
        type: 'bar',
        stack: '总量',
        data: [200],
        itemStyle: {
          color: '#45C946'
        },
        barWidth: 10
      }, {
        type: 'bar',
        stack: '总量',
        data: [250],
        itemStyle: {
          color: '#eee'
        }
      }, {
        type: 'custom',
        stack: '总量',
        data: [200],
        renderItem: (params, api) => {
          const value = api.value(0)
          const endPoint = api.coord([value, 0])

          return {
            type: 'group',
            position: endPoint,
            children: [{
              type: 'path',
              shape: {
                d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                x: -5,
                y: -20,
                width: 10,
                height: 10,
                layout: 'cover'
              },
              style: {
                fill: '#45c946'
              }
            }, {
              type: 'path',
              shape: {
                d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                x: -5,
                y: 10,
                width: 10,
                height: 10,
                layout: 'cover'
              },
              style: {
                fill: '#45c946'
              }
            }]
          }
        }
      }],
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .total-users-footer {
    display: flex;
    align-items: center;
    .month {
      margin-left: 10px;
    }
  }
</style>
