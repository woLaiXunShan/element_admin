<template>
  <div class="bgfff p20">
    <h3>评估：李四先生房贷（66789）</h3>
    <el-button class="mt10 mb10" type="primary" @click="$refs.apply.init()">新增评估申请</el-button>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        label="订单"
        align="center"
        min-width="250">
        <template v-slot="scope">
          <router-link to="" class="blue">【随便贷】李先生中信银行60万（66789）</router-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="贷款渠道"
        align="center"/>
      <el-table-column
        prop="address"
        label="评估公司"
        align="center"/>
      <el-table-column
        prop="address"
        label="评估房产"
        align="center"/>
      <el-table-column
        prop="address"
        label="申请时间"
        align="center"/>
      <el-table-column
        prop="address"
        label="预评"
        align="center"/>
      <el-table-column
        prop="enteringDete"
        label="正评"
        align="center"/>
      <el-table-column
        label="进度"
        align="center"
        width="300">
        <template v-slot="scope">
          <el-button size="mini" type="success">申请</el-button>
          <el-button size="mini" type="warning" @click="$refs.audit.init()">审核</el-button>
          <el-button size="mini" type="info" @click="$refs.result.init()">结果</el-button>
          <el-button size="mini" type="info" @click="$refs.affirm.init()">确认</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 申请 -->
    <Apply ref="apply"/>
    <!-- 审核 -->
    <Audit ref="audit"/>
    <!-- 审核 -->
    <Result ref="result"/>
    <!-- 确认 -->
    <Affirm ref="affirm"/>
  </div>
</template>
<script>
import { Apply, Audit, Result, Affirm } from './assess'
export default {
  components: {
    Apply, Audit, Result, Affirm
  },
  data() {
    return {
      tableData: [{}]
    }
  }
}
</script>
