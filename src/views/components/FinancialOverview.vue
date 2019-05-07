<template>
  <!-- 财务总览 -->
  <el-dialog
    :visible.sync="financialOverviewBox"
    :modal-append-to-body="false"
    width="1000px">
    <el-radio-group v-model="orderListTitle" size="small">
      <el-radio-button :label="0">全部</el-radio-button>
      <el-radio-button :label="1">订单1：DD1200035</el-radio-button>
      <el-radio-button :label="2">订单2：DD1200036</el-radio-button>
    </el-radio-group>
    <p class="mt10">
      收费总额：
      <span>+3256.06</span>
    </p>
    <el-table
      :data="tableData"
      border
      class="mt10"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="单据号">
        <template v-slot="scope">
          <router-link :to="`/finance/ReceiptsDetail/${1}`" style="color: #00a4ff;">
            hhhhh
          </router-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="单据名称"/>
      <el-table-column
        prop="date"
        label="关联订单"/>
      <el-table-column
        prop="name"
        label="应交易金额">
        <template v-slot="scope"/>
      </el-table-column>
      <el-table-column
        prop="address"
        label="实交易金额">
        <template v-slot="scope"/>
      </el-table-column>
      <el-table-column
        prop="date"
        label="交易时间"/>
    </el-table>
    <p style="text-align: center;margin-top:10px;">
      <el-button style="width:120px;" type="primary" @click="financialOverviewBox=false">关闭</el-button>
    </p>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      financialOverviewBox: false,
      orderListTitle: 0,
      tableData: [{}]
    }
  },
  methods: {
    init() { // 初始化
      this.financialOverviewBox = true
    }
  }
}
</script>
