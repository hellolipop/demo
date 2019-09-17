<template>
  <div class="ability">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
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
      }]
    }
  }
}
</script>

<style>

</style>
