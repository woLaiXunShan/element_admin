<template>
  <div>
    <p style="text-align:right;">
      <el-button type="primary" plain @click="$refs.advances.init()">新增费用</el-button>
      <el-button type="primary" plain @click="$refs.financialOverview.init()">财务总览</el-button>
    </p>
    <el-table
      :data="tableData"
      border
      class="mt10"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="单据号"/>
      <el-table-column
        prop="address"
        label="费用类别"/>
      <el-table-column
        prop="date"
        label="金额"/>
      <el-table-column
        prop="name"
        label="创建时间"/>
      <el-table-column
        prop="address"
        label="执行时间"/>
      <el-table-column
        prop="date"
        label="状态"/>
      <el-table-column
        prop="name"
        label="创建人"/>
      <el-table-column
        prop="address"
        label="出纳"/>
    </el-table>
    <!-- 预收款 -->
    <Advances ref="advances"/>
    <!-- 财务总览 -->
    <FinancialOverview ref="financialOverview"/>
  </div>
</template>
<script>
import Advances from '@/views/components/Advances'
import FinancialOverview from '@/views/components/FinancialOverview'
export default {
  components: {
    Advances, FinancialOverview
  },
  data() {
    return {
      tableData: []
    }
  }
}
</script>
