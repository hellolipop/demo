<template>
<!-- 列表 -->
  <div class="work">
     <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="项目周期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="项目名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="项目描述">
    </el-table-column>
  </el-table>
  <!-- 雷达图 -->
  <div id="main" style="width: 600px;height: 600px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  created () {
    // 初始化列表
    this.tableData.push(this.list[0])
    // 初始化雷达
    this.date.push(this.dateList[0])
  },
  mounted () {
    this.drawPie()
    // 每10秒刷新一次数据
    setInterval(
      () => {
        let num = parseInt(Math.random() * (3 + 1))

        this.tableData = []
        this.tableData.push(this.list[num])
        this.date = []
        this.date.push(this.dateList[num])
        this.drawPie()
      }, 10000
    )
    this.$nextTick(function () {
      this.drawPie('main')
    })
  },
  data () {
    return {
      list: [{
        date: '2019.2-2019.6',
        name: '猫花花',
        address: '用户注册账号、验证信息后进行借款'
      }, {
        date: '2018.9-2019.1',
        name: '催收管理系统(PC)',
        address: '该项目是公司内部使用的催收系统，按照权限可分配案件，便于催收人员管理案情、记录案情、 统计还款人数及金额，提高催款效率。'
      }, {
        date: '2018.3-2018.9',
        name: '随时现金(响应式)',
        address: '对随时现金 app 的介绍及借款账号注册'
      }, {
        date: '2017.9-2017.10',
        name: '贷后邦官网(PC 端首页)',
        address: '朋数信息科技有限公司是一家 P2P 的技术驱动型大数据科技公司，贷后邦致力于通过大数据及人工智能技术，为中国的信贷机构(银行、P2P、消费金融、小贷公司)贷后资产管理提供专业的一揽子解决方案。'
      }],
      tableData: [],
      charts: null,
      // 雷达数据
      date: [],
      dateList: [
        {
          value: [4300, 10000, 28000, 35000, 50000, 19000],
          name: '个人能力'
        },
        {
          value: [1300, 9999, 12333, 4329, 53242, 9009],
          name: '个人能力'
        },
        {
          value: [2349, 2345, 9934, 2345, 4932, 9345],
          name: '个人能力'
        },
        {
          value: [5433, 3499, 5434, 3459, 5439, 9345],
          name: '个人能力'
        }

      ]

    }
  },
  methods: {
    // 雷达渲染方法
    drawPie () {
      if (this.charts) {
        this.charts.clear()
      }
      this.charts = echarts.init(document.getElementById('main'))
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
          data: this.date
        }]
      }
      this.charts.setOption(option)
    }
  }
}
</script>

<style>

</style>
