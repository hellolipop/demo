<template>
  <div class="index">
     <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="180">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="电话"
      width="180">
    </el-table-column>
    <el-table-column
      prop="emi"
      label="邮箱"
      width="180">
    </el-table-column>
    <el-table-column
      prop="mz"
      label="民族"
      width="180">
    </el-table-column>
    <el-table-column
      prop="time"
      label="工作经验"
      width="180">
    </el-table-column>
    <el-table-column
      prop="adress"
      label="现居地址">
    </el-table-column>
  </el-table>
  <!-- 雷达图 -->
  <div id="main" style="width: 600px;height: 600px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      tableData: [{
        name: '周湘林',
        age: '24',
        phone: '18569077879',
        emi: 'haigirl@sina.cn',
        mz: '汉族',
        time: '2年',
        adress: '上海市浦东新区江秀苑34号502'
      }]
    }
  },
  mounted () {
    // 初始化雷达图
    this.$nextTick(function () {
      this.drawPie('main')
    })
  },
  methods: {
    // 雷达数据渲染方法
    drawPie () {
      var charts = echarts.init(document.getElementById('main'))
      var option = {
        title: {
          text: '能力值'
        },
        tooltip: {},
        legend: {
          data: ['个人能力']
        },
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: 'HTML', max: 6500 },
            { name: 'CSS', max: 16000 },
            { name: 'Vue', max: 30000 },
            { name: 'JavaScrip', max: 38000 },
            { name: 'Git', max: 52000 },
            { name: 'Node', max: 25000 }
          ]
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '个人能力'
            }
          ]
        }]
      }
      charts.setOption(option)
    }
  }

}
</script>

<style lang='less'>

</style>
