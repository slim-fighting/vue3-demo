<template>
  <div class="box">
    <div class="box-left"></div>
    <div class="box-main" ref="china">
    </div>
    <div class="box-right"></div>
  </div>
</template>
<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import './assets/china.js'
import { useStore } from './stores'
import * as echarts from 'echarts'

const china = ref<HTMLElement>()
const store = useStore()

onMounted(async () => {
  await store.getList()
  const chart = echarts.init(china.value as HTMLElement)
  const city = store.list.result.data.diseaseh5Shelf.areaTree[0].children
  const data = city.map(item => {
    return {
      name: item.name,
      value: [item.total.nowConfirm]
    }
  })

  chart.setOption({
    // backgroundColor: '#FFFFFF',
    title: {
      // text: '个人存款全国分布情况',
      subtext: '',
      y: '5%',
      x: 'center'
    },
    tooltip: {
      trigger: 'item'
    },

    //左侧小导航图标
    visualMap: {
      show: true,
      x: 'left',
      y: 'center',
      splitList: [
        { start: 500, end: 600 }, { start: 400, end: 500 },
        { start: 300, end: 400 }, { start: 200, end: 300 },
        { start: 100, end: 200 }, { start: 0, end: 100 },
      ],
      color: ['#5475f5', '#9feaa5', '#85daef', '#74e2ca', '#e6ac53', '#9fb5ea']
    },

    //配置属性
    series: [{
      name: '数据',
      type: 'map',
      map: 'china',
      roam: true,
      label: {
        show: true,  //省份名称
      },
      emphasis: {
        show: false
      },
      data: data //数据
    }]
  })
})

</script>

<style lang="scss" >
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

.box {
  height: 100vh;
  display: flex;
  overflow: hidden;
  background-image: url('/src/assets/imgs/girl.png');
  background-repeat: no-repeat;
  background-size: cover;

  &-left {
    width: 400px;

  }

  &-main {
    flex: 1;
  }

  &-right {
    width: 400px;
  }
}
</style>
